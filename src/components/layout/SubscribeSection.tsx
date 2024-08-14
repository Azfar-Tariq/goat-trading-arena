import React from "react";

const SubscribeSection: React.FC = () => {
  return (
    <section className="relative z-10 mx-4 my-10 flex min-h-screen flex-col items-center justify-between gap-16 border-y border-slate-600 lg:mx-20 lg:flex-row">
      <div className="mt-8 flex w-full flex-col gap-4 px-2 py-8 lg:mt-0 lg:w-3/4 lg:p-8">
        <p className="text-xl text-title md:text-3xl lg:text-5xl">
          Never miss an{" "}
          <span className="bg-gradient-to-b from-[#eaf5ff] via-[#b7ddff] to-[#6bb8ff] bg-clip-text text-transparent">
            Update
          </span>
        </p>
        <p className="text-sm text-text">
          We will share with you any important news and feature, you might be
          one of the luckiest to win our giveaway!
        </p>
        <div className="flex items-center justify-between rounded-2xl border border-slate-600 bg-bgCard p-1">
          <input
            type="text"
            placeholder="Insert Email"
            className="w-full rounded-2xl bg-bgCard p-4 text-white"
          />
          <button className="rounded-2xl bg-primary p-4 text-white lg:text-xl lg:font-bold">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mb-20 w-full text-lg text-title md:text-2xl lg:mb-0 lg:text-4xl">
        At GoatTradingArena we offer trading objectives to help you prove your
        discipline as a trader. With multiple product options to choose based on
        your experience, we are committed to provide you with the best resources
        and support you need to succeed
      </div>
    </section>
  );
};

export default SubscribeSection;
