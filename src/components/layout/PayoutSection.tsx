import React from "react";

const PayoutSection: React.FC = () => {
  return (
    <section className="relative z-10 mx-20 my-24 flex min-h-screen items-center justify-center lg:mx-48">
      <div className="bg-custom-gradient flex flex-col items-start justify-between gap-4 rounded-[30px] p-2 lg:flex-row lg:items-center lg:gap-20">
        {/* Left Side */}
        <div className="space-y-4 p-5 text-left lg:px-12">
          <div>
            <h3 className="text-gradient-gr5 text-4xl font-bold text-[#0176E2]">
              Payout
            </h3>
            <h3 className="text-gradient-gr5 text-4xl font-bold text-[#0176E2]">
              Guarantee
            </h3>
          </div>
          <h6 className="text-xl text-bg">Trade, Pass, Get Rewarded</h6>
          <a className="text-lg font-bold text-bgCard hover:cursor-pointer">
            Check them out
          </a>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-2 rounded-[28px] bg-bg p-16">
          <h2 className="text-5xl font-bold text-accent">+$3.2 million</h2>
          <div className="text-lg font-semibold text-text">in payouts</div>
        </div>
      </div>
    </section>
  );
};

export default PayoutSection;
