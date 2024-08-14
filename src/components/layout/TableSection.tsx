import React from "react";
import PricingPackages from "../table/PricingPackage";
// import TradingTable from "../table/TradingTable";

const TableSection: React.FC = () => {
  return (
    <div className="relative z-10 mx-4 my-28 flex flex-col items-center justify-between">
      {/* <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-2xl text-accent">Start your</p>
        <p className="bg-custom-gradient bg-clip-text text-5xl text-transparent">
          Challenge
        </p>
      </div> */}
      {/* <TradingTable /> */}
      <PricingPackages />
      <div className="flex flex-wrap justify-center gap-4">
        <img
          src="https://goatfundedtrader.com/wp-content/uploads/2024/07/Visa.svg"
          alt="visa"
          className="rounded-3xl bg-bgCard p-4"
        />
        <img
          src="https://goatfundedtrader.com/wp-content/uploads/2024/07/Mastercard.svg"
          alt="mastercard"
          className="rounded-3xl bg-bgCard p-4"
        />
        <img
          src="https://goatfundedtrader.com/wp-content/uploads/2024/07/amex.svg"
          alt="amex"
          className="rounded-3xl bg-bgCard p-4 px-6"
        />
        <img
          src="https://goatfundedtrader.com/wp-content/uploads/2024/07/ethereum-logo.svg"
          alt="ethereum"
          className="rounded-3xl bg-bgCard p-4 px-6"
        />
        <img
          src="https://goatfundedtrader.com/wp-content/uploads/2024/07/bitcoin-logo.svg"
          alt="bitcoin"
          className="rounded-3xl bg-bgCard p-4 px-6"
        />
      </div>
    </div>
  );
};

export default TableSection;
