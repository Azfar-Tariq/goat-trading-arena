import React from "react";
import YouTube from "../../assets/icons/youtube";
import Discord from "../../assets/icons/discord";
import Instagram from "../../assets/icons/instagram";
import Twitter from "../../assets/icons/twitter";
import Support from "../../assets/icons/support";
import HandShake from "../../assets/icons/handshake";

const platformIcons = {
  youtube: YouTube,
  discord: Discord,
  instagram: Instagram,
  twitter: Twitter,
};

const ChooseUsSection: React.FC = () => {
  return (
    <div className="relative z-10 py-16 text-white">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="mb-2 text-center text-2xl font-bold text-blue-300 lg:text-3xl">
          Why Choose Us
        </h2>
        <h2 className="mb-12 text-center text-4xl font-bold lg:text-6xl">
          Trader Benefits
        </h2>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {/* Payout Guarantee */}
          <div className="bg-custom-gradient rounded-[30px] p-2 lg:col-span-2">
            <div className="flex flex-col items-center justify-between gap-2">
              {/* Left Side */}
              <div className="flex w-full flex-col items-center justify-center space-y-2 p-5 text-left">
                <div>
                  <h3 className="bg-gradient-gr5 bg-clip-text text-xl font-bold text-transparent md:text-5xl">
                    Payout Guarantee
                  </h3>
                </div>
                <h6 className="text-center text-2xl text-bg md:text-3xl">
                  Trade, Pass, Get Rewarded
                </h6>
              </div>

              {/* Right Side */}
              <div className="flex w-full flex-col items-center gap-2 rounded-[28px] bg-bg p-16">
                <h2 className="text-center text-3xl font-bold text-accent md:text-5xl">
                  +$3.2 million
                </h2>
                <div className="text-lg font-semibold text-text">
                  in payouts
                </div>
              </div>
            </div>
          </div>

          {/* TradingPilot */}
          <div className="flex flex-col gap-4">
            <div className="mb-4 flex flex-col items-start justify-between rounded-[30px] bg-colorGR4 p-8">
              <svg
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Add TradingPilot icon SVG path here */}
              </svg>
              <p className="text-xl">23 reviews / 4.9</p>
            </div>
            <div className="flex w-full items-center justify-between gap-8 rounded-[30px] bg-gradient-gr5 p-8">
              <HandShake className="h-20 w-20" />
              <button className="text-left text-3xl text-white">
                Best Trading Conditions
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-5">
          {/* 24/7 Support */}
          <div className="col-span-1 rounded-[30px] bg-bgCard p-6">
            <Support color="#99ceff" className="h-16 w-16 p-2" />
            <h3 className="mb-2 text-xl font-bold">24/7 Support</h3>
            <p className="text-sm">
              Experience our Pro Support with a 50-second average response time.
            </p>
          </div>

          {/* Community */}
          <div className="rounded-[30px] bg-colorGR4 p-6 text-center">
            <h3 className="mb-4 text-xl font-bold">Community</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(platformIcons).map(([platform, Icon]) => (
                <div
                  key={platform}
                  className="flex items-center justify-center rounded-2xl bg-bg p-4"
                >
                  <Icon color="#99ceff" />
                </div>
              ))}
            </div>
          </div>

          {/* 1 month free access */}
          <div className="flex flex-col items-center gap-4 rounded-[30px] bg-bgCard p-6 lg:col-span-3 lg:flex-row">
            <div>
              <h3 className="mb-2 text-3xl font-bold">
                1 month free access on MTJ
              </h3>
              <p className="mb-4 text-xl">
                Buy any Challenge and enjoy 1 Month of Free Access on MTJ
                software as a BONUS.
              </p>
            </div>
            <div className="rounded-[30px] p-2">
              {/* Add MTJ software screenshot or placeholder */}
              <img
                src="https://goatfundedtrader.com/wp-content/uploads/2024/07/mtj-dashboard-smalling.png"
                alt=""
                className="h-40 w-[34rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
