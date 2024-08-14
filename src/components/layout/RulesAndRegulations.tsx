import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChartLine,
  FaCoins,
  FaExclamationTriangle,
  FaChevronDown,
  FaTrophy,
  FaClock,
  FaInfoCircle,
  FaCheckCircle,
  FaBan,
  FaDollarSign,
} from "react-icons/fa";

const RuleSection: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 rounded-lg bg-bgCard p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none"
      >
        <h2 className="mb-4 flex items-center justify-between text-2xl font-bold text-blue-400">
          <span className="flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </span>
          <FaChevronDown
            className={`transition-transform duration-300 ${isOpen ? "rotate-180 transform" : ""}`}
          />
        </h2>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const RuleItem: React.FC<{
  type:
    | "info"
    | "warning"
    | "success"
    | "restriction"
    | "time"
    | "money"
    | "performance";
  children: React.ReactNode;
}> = ({ type, children }) => {
  const iconMap = {
    info: <FaInfoCircle className="mr-2 mt-1 flex-shrink-0 text-blue-400" />,
    warning: (
      <FaExclamationTriangle className="mr-2 mt-1 flex-shrink-0 text-yellow-500" />
    ),
    success: (
      <FaCheckCircle className="mr-2 mt-1 flex-shrink-0 text-green-400" />
    ),
    restriction: <FaBan className="mr-2 mt-1 flex-shrink-0 text-red-400" />,
    time: <FaClock className="mr-2 mt-1 flex-shrink-0 text-purple-400" />,
    money: <FaDollarSign className="mr-2 mt-1 flex-shrink-0 text-green-500" />,
    performance: (
      <FaChartLine className="mr-2 mt-1 flex-shrink-0 text-blue-500" />
    ),
  };

  return (
    <li className="mb-3 flex items-start">
      {iconMap[type]}
      <span>{children}</span>
    </li>
  );
};

const RulesAndRegulations: React.FC = () => {
  return (
    <div className="relative z-10 my-28 min-h-screen p-8 text-gray-300">
      <h1 className="mb-12 text-center text-4xl font-bold text-blue-400">
        GTA Rules and Regulations
      </h1>

      <div className="mx-auto max-w-4xl">
        <RuleSection
          title="Qualification Stages"
          icon={<FaChartLine className="text-blue-400" />}
        >
          <ul className="space-y-4">
            <RuleItem type="info">
              There will be always 2-3 Qualification Stages before you proceed
              to Payout Stages
            </RuleItem>
            <RuleItem type="money">
              A trader will be provided with 100$ Capital. After it is done 100%
              Gain Stage 1 is cleared (100$ to 200$)
            </RuleItem>
            <RuleItem type="performance">
              After Stage 1 Completed you will receive new Account for your
              stage 2. Repeat same process (100$ to 200$)
            </RuleItem>
            <RuleItem type="success">
              After Stage 2 Completed you will receive New account for your
              Final Stage 3, Repeat same Procedure (100$-200$) and you have
              qualified from your qualification stages
            </RuleItem>
            <RuleItem type="warning">
              During any phase if a trader Hits a peak drawdown of 87% Or Loses
              100% of equity shall be terminated and disqualified during any
              stage
            </RuleItem>
          </ul>
        </RuleSection>

        <RuleSection
          title="Post-Qualification Trading"
          icon={<FaCoins className="text-yellow-400" />}
        >
          <ul className="space-y-4">
            <RuleItem type="info">
              After Your Qualification Stages, you're Given again 100$ To trade.
              Your Target is always 100% (100$ to 200$ completed and you will
              proceed to next stage)
            </RuleItem>
            <RuleItem type="warning">
              The leverage provided is 1:1000 on a raw spread/Pro account broker
              Partner Justmarkets. Spreads are 0.0-0.1
            </RuleItem>
            <RuleItem type="restriction">
              Avoid Trading in High-impact news to avoid unnecessary risks
            </RuleItem>
          </ul>
        </RuleSection>

        <RuleSection
          title="Account Options & Drawdown"
          icon={<FaChartLine className="text-green-400" />}
        >
          <ul className="space-y-4">
            <RuleItem type="money">
              After stage 3, A Trader has option for controller to use either
              100$, 200$, 400$ or 800$. Target remains 100% Gain for Each stage
            </RuleItem>
            <RuleItem type="info">
              No Daily Drawdown Limits Like Funded account. You can freely Trade
              but Peak Drawdown is 87% For Disqualification
            </RuleItem>
            <RuleItem type="performance">
              If a Trader Exceeds 100% and goes to 400-700% Gain, it won't be
              counted as bonus. It will only be counted as 100% Gain and clear a
              single Stage
            </RuleItem>
          </ul>
        </RuleSection>

        <RuleSection
          title="Time Limits & Prizes"
          icon={<FaClock className="text-purple-400" />}
        >
          <ul className="space-y-4">
            <RuleItem type="time">
              If a Trader fails to complete minimum 3 Stages in 35 days for Gold
              package (6Stages) will be disqualified
            </RuleItem>
            <RuleItem type="warning">
              If you Claim any prize before final Stage you will Reset to
              mentioned Stage and start from there again
            </RuleItem>
            <RuleItem type="success">
              If you Don't claim your prize during stages you can proceed
              directly to final stage and get All Previous Rewards as well
            </RuleItem>
          </ul>
        </RuleSection>

        <RuleSection
          title="Titanium Package"
          icon={<FaTrophy className="text-yellow-300" />}
        >
          <ul className="space-y-4">
            <RuleItem type="info">
              Titanium Package is an Elite Package where you get many prizes
              claimable.
            </RuleItem>
            <RuleItem type="money">
              If you clear all Stages of titanium within time period of 4 Months
              you can claim 80,000$
            </RuleItem>
            <RuleItem type="success">
              Including A Car/Bike Or Its Cash price worth up to 20,000$
            </RuleItem>
          </ul>
        </RuleSection>
      </div>
    </div>
  );
};

export default RulesAndRegulations;
