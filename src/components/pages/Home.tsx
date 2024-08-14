import React from "react";
import Hero from "../layout/HeroSection";
import VideoSection from "../layout/VideoSection";
import TradeSection from "../layout/TradeSection";
import ScrollingTicker from "../layout/ScrollingTicker";
import CircleSection from "../layout/CircleSection";
import PayoutSection from "../layout/PayoutSection";
import ThreeCardsSection from "../layout/ThreeCardsSection";
import SubscribeSection from "../layout/SubscribeSection";
import TableSection from "../layout/TableSection";
import CompetitionSection from "../layout/CompetitionSection";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <VideoSection />
      <TradeSection />
      <ScrollingTicker />
      <CircleSection />
      <PayoutSection />
      <ThreeCardsSection />
      <SubscribeSection />
      <TableSection />
      <CompetitionSection />
    </>
  );
};

export default Home;
