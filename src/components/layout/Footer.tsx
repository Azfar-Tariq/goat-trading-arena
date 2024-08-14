import React from "react";
import Logo from "../../assets/logo.png";
import Call from "../../assets/icons/call";
import YouTube from "../../assets/icons/youtube";
import Discord from "../../assets/icons/discord";
import Twitter from "../../assets/icons/twitter";
import Instagram from "../../assets/icons/instagram";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-10 px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <img src={Logo} alt="Logo" className="mb-4 h-12" />
            <button className="mb-4 flex items-center justify-between gap-2 rounded-xl border border-white bg-bgCard px-4 py-2 text-white">
              <Call className="h-4 w-4" />
              Call Support
            </button>
            <p className="text-primary">support@goatfundedtrader.com</p>
            <div className="mt-4 flex space-x-4">
              <YouTube color="#99ceff" />
              <Discord color="#99ceff" />
              <Twitter color="#99ceff" />
              <Instagram color="#99ceff" />
            </div>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Payouts</a>
              </li>
              <li>
                <a href="#">Scaling Plan</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Insights</a>
              </li>
              <li>
                <a href="#">Affiliate Area</a>
              </li>
              <li>
                <a href="#">Become an affiliate</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Funded Account Disclaimer</a>
              </li>
              <li>
                <a href="#">Refund policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="mb-4 rounded-xl bg-gradient-gr5 px-6 py-2 text-title">
              Start Evaluation ↗
            </button>
            <p className="mb-2 text-sm">Pay as you want</p>
            <div className="flex space-x-2">
              <img
                src="https://goatfundedtrader.com/wp-content/uploads/2024/07/Visa.svg"
                alt="visa"
              />
              <img
                src="https://goatfundedtrader.com/wp-content/uploads/2024/07/Mastercard.svg"
                alt="mastercard"
              />
              <img
                src="https://goatfundedtrader.com/wp-content/uploads/2024/07/amex.svg"
                alt="amex"
              />
              <img
                src="https://goatfundedtrader.com/wp-content/uploads/2024/07/ethereum-logo.svg"
                alt="ethereum"
              />
              <img
                src="https://goatfundedtrader.com/wp-content/uploads/2024/07/bitcoin-logo.svg"
                alt="bitcoin"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4 text-center">
          <p>
            © 2023{" "}
            <span className="bg-gradient-to-b from-[#eaf5ff] via-[#b7ddff] to-[#6bb8ff] bg-clip-text text-transparent">
              GFT
            </span>
            . All Rights Reserved.
          </p>
        </div>
        <div className="mt-4 space-y-6 text-xs text-[#b8b8b8]">
          <p>
            Disclaimer: Goat Funded Trader, a trade name of Wishes Tower
            International SL (the "Company"), calle Perez Galdos 32, 35002, Las
            Palmas, Spain (B44653145)(SL or LLC), and its affiliates
            (collectively, the "Company") publish and distribute content that
            should be regarded as general information only. None of the
            information provided by the Company or contained herein is intended
            as investment advice, an offer or solicitation of an offer to buy or
            sell securities, or a recommendation, endorsement, or sponsorship of
            any security, company, or fund. The information contained on the
            Company's websites is provided for informational purposes only and
            is not intended to be relied upon for making investment decisions.
            Any use of the information contained on the Company's websites is at
            your own risk, and the Company assumes no responsibility or
            liability for any use or misuse of such information. Nothing
            contained herein constitutes a solicitation or an offer to buy or
            sell futures, options, or forex. Please note that past performance
            is not necessarily indicative of future results, and any investment
            involves risks, including the possibility of total loss of the
            invested amount. You should always seek professional advice before
            making any investment decisions. All broker related services are
            provided by Match Trade, Goat Funded Trader holds zero control over
            pricing, slippage, or any other buying/selling related occurrences.
            Goat Funded Trader (SL or LLC) does not provide broker services,
            trading services, or hold custody of any investor funds.
          </p>
          <p>
            GoatFundedTrader serves as an Introducing Broker for Match Trade,
            offering clients access exclusively to demo accounts within a
            simulated trading environment. Additionally, the services offered
            are aimed at assessing professional skills. The results of these
            services are directly related to each individual's professional
            skill level and their capacity to follow the program guidelines and
            objectives detailed for each service. We encourage clients to
            conduct a comprehensive review of the program requirements before
            enrolling in any services. Disclosure on Hypothetical Performance:
            The accounts utilized for our services are demo accounts.
            Hypothetical performance results come with inherent limitations,
            among which include the fact that they do not reflect actual
            trading. No claim is made that any account will achieve or is likely
            to achieve profits or losses comparable to those discussed; in
            reality, actual results can significantly differ from those
            predicted by hypothetical performance. Hypothetical performance
            often benefits from hindsight, does not account for financial risk,
            and cannot consider the financial risk in actual trading. For
            instance, the capacity to endure losses or to stick to a trading
            plan despite losses are crucial factors that can negatively impact
            real trading results. Many other market factors or aspects of
            implementing a specific trading program not accounted for in
            hypothetical performance preparation can also adversely affect
            actual trading results. Please be aware that we do not offer
            specific investment advice, business consulting, analysis of
            investment opportunities, or any general recommendations on trading
            investment instruments. Trading in financial markets carries a high
            level of risk, and we advise against risking more than you can
            afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
