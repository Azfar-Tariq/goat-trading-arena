import React from "react";

const ThreeCardsSection: React.FC = () => {
  return (
    <section className="relative z-10 mx-4 flex min-h-screen flex-col items-center justify-between gap-4 lg:mx-16 lg:flex-row">
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-bgCard p-6">
        <img
          src="https://goatfundedtrader.com/wp-content/uploads/2024/05/Home-Features-Icon-03.svg"
          alt="placeholder"
        />
        <div>
          <p className="bg-custom-gradient mb-4 bg-clip-text text-3xl text-transparent">
            Up to{" "}
            <span className="bg-gradient-to-b from-[#eaf5ff] via-[#b7ddff] to-[#6bb8ff] bg-clip-text text-transparent">
              800k
            </span>{" "}
            in funding
          </p>
          <p className="text-sm text-text">
            Scale up to $2 millions in Simulated capital: earn monthly salaries,
            unlock higher profit splits and enjoy larger drawdown limits
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-bgCard p-6">
        <img
          src="https://goatfundedtrader.com/wp-content/uploads/2024/05/Home-Features-Icon-02.svg"
          alt="placeholder"
        />
        <div>
          <p className="bg-custom-gradient mb-4 bg-clip-text text-3xl text-transparent">
            <span className="bg-gradient-to-b from-[#eaf5ff] via-[#b7ddff] to-[#6bb8ff] bg-clip-text text-transparent">
              No time
            </span>{" "}
            limit
          </p>
          <p className="text-sm text-text">
            Our Goat and No Time Challenges have no time constraits, letting
            traders keep their accounts until they pass the challenge.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-bgCard p-6">
        <img
          src="https://goatfundedtrader.com/wp-content/uploads/2024/05/Home-Features-Icon-01.svg"
          alt="placeholder"
        />
        <div>
          <p className="bg-custom-gradient mb-4 bg-clip-text text-3xl text-transparent">
            Profit split up to{" "}
            <span className="bg-gradient-to-b from-[#eaf5ff] via-[#b7ddff] to-[#6bb8ff] bg-clip-text text-transparent">
              95%
            </span>
          </p>
          <p className="text-sm text-text">
            rewards your success, offering progressive profit split increases as
            you demonstrate trading proficiency
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeCardsSection;
