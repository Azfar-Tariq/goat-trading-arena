import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Rules from "../components/pages/Rules";
import Prizes from "../components/pages/Prizes";
import Pricing from "../components/pages/Pricing";
import Contact from "../components/pages/Contact";
import NotFound from "../components/pages/NotFound";

const AppRouter: React.FC = () => (
  <div>
    {/* for production */}
    {/* <Router basename="https://azfar-tariq.github.io/goat-trading-arena"> */}
    {/* for development */}
    <Router basename="/goat-trading-arena">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Rules />} />
        <Route path="/features" element={<Prizes />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </div>
);

export default AppRouter;
