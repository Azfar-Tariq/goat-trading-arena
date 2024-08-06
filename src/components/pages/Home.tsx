import React from "react";
import Hero from "../layout/HeroSection";
import VideoSection from "../layout/VideoSection";
import TradeSection from "../layout/TradeSection";
import ScrollingTicker from "../layout/ScrollingTicker";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <VideoSection />
      <TradeSection />
      <ScrollingTicker />
    </div>
  );
};

export default Home;
