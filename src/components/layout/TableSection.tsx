import React from "react";
import PricingPackages from "../table/PricingPackage";
// import TradingTable from "../table/TradingTable";
import Visa from "../../assets/svgs/visa.svg";
import MasterCard from "../../assets/svgs/mastercard.svg";
import Amex from "../../assets/svgs/amex.svg";
import Ethereum from "../../assets/svgs/ethereum.svg";
import Bitcoin from "../../assets/svgs/bitcoin.svg";

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
          src={Visa}
          alt="visa"
          className="w-24 rounded-2xl bg-bgCard object-contain px-4 py-3"
        />
        <img
          src={MasterCard}
          alt="mastercard"
          className="w-24 rounded-2xl bg-bgCard object-contain px-4 py-3"
        />
        <img
          src={Amex}
          alt="amex"
          className="w-24 rounded-2xl bg-bgCard object-contain px-4 py-3"
        />
        <img
          src={Ethereum}
          alt="ethereum"
          className="w-24 rounded-2xl bg-bgCard object-contain px-4 py-3"
        />
        <img
          src={Bitcoin}
          alt="bitcoin"
          className="w-24 rounded-2xl bg-bgCard object-contain px-4 py-3"
        />
      </div>
    </div>
  );
};

export default TableSection;
