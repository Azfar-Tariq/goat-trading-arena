import React from "react";

const TradeSection: React.FC = () => {
  const tradeIndustries = ["Forex", "Stocks", "Crypto", "Indices"];

  return (
    <section className="relative z-10 mb-4">
      <div className="mx-auto text-center">
        <h6 className="mb-6 text-2xl font-semibold text-accent">
          Trade with us
        </h6>
        <div className="flex flex-wrap justify-center gap-4">
          {tradeIndustries.map((industry, index) => (
            <div
              key={index}
              className="rounded-xl bg-bgCard px-8 py-3 shadow-md"
            >
              <h5 className="text-xl font-medium text-title">{industry}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradeSection;
