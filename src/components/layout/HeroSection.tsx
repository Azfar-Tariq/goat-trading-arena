import React, { useEffect } from "react";
import Button from "../common/Button";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Telegram from "../../assets/icons/telegram";

const Hero: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(
        ".moving-card",
      ) as NodeListOf<HTMLDivElement>;
      const { clientX, clientY } = e;
      const offsetX = clientX - window.innerWidth / 2;
      const offsetY = clientY - window.innerHeight / 2;

      cards.forEach((card) => {
        card.style.transform = `translate(${offsetX * 0.07}px, ${
          offsetY * 0.07
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-content relative mb-12 flex bg-bg text-center text-white lg:my-28">
      <div className="absolute inset-0 top-56 z-0">
        <svg
          style={{
            width: "100%",
            opacity: 1,
            filter: "drop-shadow(rgba(0, 133, 255, 0.5) 0px 0px 5px)",
            transition: "unset",
          }}
          viewBox="0 0 1452 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 444H19.8754C82.5727 444 144.183 427.617 198.608 396.471L284.816 347.137C336.82 317.378 395.423 301.074 455.315 299.703L521.297 298.193C581.189 296.822 639.793 280.518 691.796 250.758L781.836 199.233C833.827 169.479 892.421 153.175 952.303 151.799L1017 150.312C1077.09 148.931 1135.88 132.519 1188 102.571L1278.11 50.7992C1329.2 21.446 1387.09 6 1446 6"
            stroke="url(#paint0_linear_271_17794)"
            stroke-width="12"
            stroke-linecap="round"
            style={{ strokeDasharray: "1530.16", strokeDashoffset: 0 }}
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_271_17794"
              x1="32.28"
              y1="444"
              x2="1423.82"
              y2="6.43666"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0085FF"></stop>
              <stop offset="0.11" stop-color="#8DC8FF"></stop>
              <stop offset="0.234123" stop-color="#0085FF"></stop>
              <stop offset="0.556727" stop-color="#8BC8FF"></stop>
              <stop offset="0.765582" stop-color="#0085FF"></stop>
              <stop offset="0.914018" stop-color="#9DD0FF"></stop>
              <stop offset="1" stop-color="#0085FF"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 mb-32 mt-4 grid grid-cols-1 items-center gap-x-6 gap-y-5 px-6 lg:grid-cols-2">
        <div className="w1/2 flex flex-col items-start text-left md:items-center md:text-center lg:items-start lg:text-left">
          <h6 className="mb-4 text-sm text-accent md:text-fontTitle6">
            A Firm Like Never before The Easiest Way to Get Rich
          </h6>
          <h1 className="mb-6 w-10/12 text-[30px] font-bold leading-none md:text-6xl">
            Never Depend on
            <br />
            <span className="bg-gradient-to-b from-[#eaf5ff] via-[#b7ddff] to-[#6bb8ff] bg-clip-text leading-8 text-transparent">
              Big Capital again
            </span>
          </h1>
          <p className="mb-4 text-[14px] md:mb-8 md:w-2/3 md:text-xl">
            Earn upto 100,000$ Real Money Usdt to your Wallet address and Cars
            bikes as gifts A Firm that cares about it's Traders Revolutionary
            Change in Trading
          </p>
          <div className="flex space-x-4">
            <Button />
            <a
              href="#"
              target="_self"
              className="inline-flex items-center gap-2 rounded-2xl border border-white bg-[#262626] px-6 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-white hover:text-[#111111]"
            >
              <Telegram />
              Join Telegram
            </a>
          </div>
        </div>
        <div className="relative hidden justify-start lg:flex">
          <img
            src={Card2}
            className="moving-card rounded-3xl border border-slate-600 bg-[#262626] transition-transform duration-75"
          />
          <img
            src={Card1}
            className="moving-card absolute bottom-24 left-36 rounded-3xl border border-slate-600 bg-[#262626] transition-transform duration-75"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
