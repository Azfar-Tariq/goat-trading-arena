/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown, FaSearch } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
  category: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mb-4 overflow-hidden rounded-lg bg-gray-700 shadow-lg"
    >
      <button
        className="flex w-full items-center justify-between p-4 text-left transition-colors duration-300 hover:bg-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-blue-300">{question}</span>
        <FaChevronDown
          className={`text-blue-300 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 text-gray-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const faqItems: FAQItemProps[] = [
    {
      question: "What is the minimum deposit to start trading?",
      answer:
        "The initial capital provided is $100 for each qualification stage.",
      category: "Getting Started",
    },
    {
      question: "How long do I have to complete the qualification stages?",
      answer:
        "For the Gold package, you need to complete a minimum of 3 stages in 35 days.",
      category: "Trading Process",
    },
    {
      question: "What happens if I exceed the target gain?",
      answer:
        "If you exceed 100% gain, it will only be counted as 100% gain and clear a single stage. Any excess profit won't be counted as a bonus.",
      category: "Trading Rules",
    },
    {
      question: "Can I withdraw my profits during the qualification stages?",
      answer:
        "You can claim prizes at certain stages, but doing so will reset you to the mentioned stage. If you don't claim prizes during stages, you can proceed to the final stage and get all previous rewards.",
      category: "Withdrawals",
    },
    {
      question: "What is the Titanium Package?",
      answer:
        "The Titanium Package is an elite option where you can claim up to $80,000 and a car/bike (or its cash equivalent up to $20,000) if you clear all stages within 4 months.",
      category: "Packages",
    },
  ];

  const categories = ["All", ...new Set(faqItems.map((item) => item.category))];

  const filteredItems = faqItems.filter(
    (item) =>
      (activeCategory === "All" || item.category === activeCategory) &&
      (item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="relative z-10 mt-12 rounded-lg p-6 shadow-lg">
      <h2 className="mb-6 flex items-center text-2xl font-bold text-blue-400">
        <FaQuestionCircle className="mr-2" />
        Frequently Asked Questions
      </h2>

      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="relative mb-4 w-full md:mb-0 md:w-1/2">
          <input
            type="text"
            placeholder="Search FAQ..."
            className="w-full rounded-full bg-gray-700 py-2 pl-10 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-1 text-sm ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {filteredItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </AnimatePresence>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-400">
          No matching questions found.
        </p>
      )}
    </div>
  );
};

export default FAQ;
