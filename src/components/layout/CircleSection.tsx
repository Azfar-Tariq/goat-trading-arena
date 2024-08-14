import React from "react";

const CircleSection: React.FC = () => {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-between py-16 lg:flex-row">
      <div className="w-full p-6 lg:w-1/2">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
          Withdrawal
          <br />
          <span className="bg-gradient-to-b from-[#eaf5ff] via-[#b7ddff] to-[#6bb8ff] bg-clip-text text-transparent">
            On Demand
          </span>
        </h2>
        <p className="text-sm leading-6 text-text">
          For the first payout, traders have the option to initiate a profit
          withdrawal just 3 trading days after executing their first trade on
          the Live Simulated Account and with a minimum of 3% profit on their
          Account Size Balance (mandatory just for the First Payout).
          <br />
          They will have the option to get On demand the 40% profit split or
          wait 14 or 30 days (depending on their Adds On choice at checkout) to
          be eligible for their full profit split of 80%. This GOAT feature
          empowers traders to promptly access their profits.
        </p>
      </div>
      <div className="relative flex h-[27rem] w-1/2 items-center justify-center">
        {/* Static Innermost Circle */}
        <div className="absolute z-10 flex h-[20rem] w-[20rem] items-center justify-center rounded-full border-2 border-accent bg-bgCard">
          {/* Content Inside the Innermost Circle */}
          <img
            src="https://goatfundedtrader.com/wp-content/uploads/2024/05/Goat-Funded-Trader-logos-violet.svg"
            alt="GFT Logo"
            className="h-12 w-12"
          />
        </div>

        {/* Animated Outer Circles */}
        {/* Outermost Circle */}
        <div className="animate-scale-up-down-large absolute flex h-[20rem] w-[20rem] items-center justify-center rounded-full border border-accent border-opacity-80" />
        {/* Second Circle */}
        <div className="animate-scale-up-down-medium absolute flex h-[20rem] w-[20rem] items-center justify-center rounded-full border border-accent border-opacity-80 delay-100" />
        {/* Third Circle */}
        <div className="animate-scale-up-down-small absolute flex h-[20rem] w-[20rem] items-center justify-center rounded-full border border-accent border-opacity-80 delay-200" />
      </div>
    </section>
  );
};

export default CircleSection;
