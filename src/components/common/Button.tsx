import React from "react";
import OutwardArrow from "../../assets/icons/outward-arrow";

const Button: React.FC = () => {
  return (
    <a
      href="#"
      className="bg-gradient-gr5 flex gap-2 items-center text-title py-2 px-4 rounded-2xl text-lg font-semibold transition-colors duration-300"
      style={{ boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.25)" }}
    >
      Start Now
      <OutwardArrow />
    </a>
  );
};

export default Button;
