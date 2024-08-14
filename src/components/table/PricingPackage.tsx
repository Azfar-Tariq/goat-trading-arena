import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTrophy,
  FaCoins,
  FaChartLine,
  FaPlane,
} from "react-icons/fa";

interface PackageProps {
  name: string;
  cost: string;
  icon: React.ReactNode;
  features: string[];
  highlightFeature: string;
  isPopular?: boolean;
}

const Package: React.FC<PackageProps> = ({
  name,
  cost,
  icon,
  features,
  highlightFeature,
  isPopular,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative rounded-lg bg-bgCard p-6 text-white shadow-lg transition-all duration-300 ${isExpanded ? "scale-105" : ""} ${isPopular ? "border-2 border-blue-500" : ""}`}
    >
      {isPopular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
          Popular Choice
        </div>
      )}
      <div className="mb-4 flex items-center">
        <div className="mr-4 text-4xl">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-2xl font-bold text-blue-400">{cost}</p>
        </div>
      </div>
      <p className="mb-4 text-lg font-semibold text-green-400">
        {highlightFeature}
      </p>
      <ul className="mb-4">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="mb-2 flex items-center">
            <FaCheckCircle className="mr-2 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {features.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-400 transition-colors duration-200 hover:text-blue-300"
        >
          {isExpanded ? "Show less" : `+${features.length - 3} more features`}
        </button>
      )}
      {isExpanded && (
        <ul className="mt-4">
          {features.slice(3).map((feature, index) => (
            <li key={index} className="mb-2 flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PricingPackages: React.FC = () => {
  const packages: PackageProps[] = [
    {
      name: "Basic",
      cost: "Free",
      icon: <FaChartLine />,
      features: [
        "3 Qualification Phases",
        "3 Payout Stages",
        "$200 Prize Money",
        "50% Coupon for Every Package",
      ],
      highlightFeature: "Perfect for Beginners",
    },
    {
      name: "Starter",
      cost: "$25",
      icon: <FaCoins />,
      features: [
        "3 Qualification Phases",
        "Up to 6 Payout Stages",
        "Claimable $400",
        "Claimable $2000",
        "Premium Electronic Device",
      ],
      highlightFeature: "Cash Prize + Gift Hampers",
      isPopular: true,
    },
    {
      name: "Gold",
      cost: "$50",
      icon: <FaTrophy />,
      features: [
        "3 Qualification Stages",
        "Up to 8 Payout Stages",
        "Claimable Fee $50",
        "Claimable $400, $1400, $4000",
        "Latest Mobile of Choice",
      ],
      highlightFeature: "Advanced Prizes & Payouts",
    },
    {
      name: "Titanium",
      cost: "$100",
      icon: <FaPlane />,
      features: [
        "3 Qualification Rounds",
        "Up to 14 Payout Stages",
        "Claimable $2400, $5500, $30,000",
        "Luxury Trip to Dubai",
        "Luxury Tech Gadget of Choice",
        "Additional Titanium Rewards",
      ],
      highlightFeature: "Luxury Gifts & Biggest Payouts",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-2xl font-bold text-accent lg:text-2xl">
          Choose Your
        </h2>
        <h2 className="bg-custom-gradient mb-12 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-6xl">
          Path to Success
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <Package key={index} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackages;
