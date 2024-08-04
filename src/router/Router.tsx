import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Rules from "../components/pages/Rules";
import Prizes from "../components/pages/Prizes";
import Pricing from "../components/pages/Pricing";
import Contact from "../components/pages/Contact";
import NotFound from "../components/pages/NotFound";

interface HeaderProps {
  isMenuOpen: boolean;
}

const AppRouter: React.FC<HeaderProps> = ({ isMenuOpen }) => (
  <div className={`${isMenuOpen ? "blur-sm" : ""}`}>
    <Router>
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
