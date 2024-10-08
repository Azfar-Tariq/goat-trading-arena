import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Rules from "../components/pages/Rules";
import Prizes from "../components/pages/Prizes";
import Pricing from "../components/pages/Pricing";
import Contact from "../components/pages/Contact";
import NotFound from "../components/pages/NotFound";

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/prizing" element={<Prizes />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;
