import React from "react";
import Logo from "../../assets/logo.png";
import Button from "../common/Button";
import MenuIcon from "../../assets/icons/menu";
import CloseIcon from "../../assets/icons/close";
import { NavBarItem } from "../../data/navItems";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navBarItems: NavBarItem[];
}

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  navBarItems,
}) => {
  return (
    <header
      className={`${isMenuOpen ? "blur-sm" : ""} relative z-10 flex items-center justify-between bg-gradient-to-b from-bg2 via-bg2/70 to-transparent px-6 py-4`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>

      {/* Navigation for Small Screens */}
      <div className="flex flex-grow justify-end lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          {!isMenuOpen && <MenuIcon color="white" />}
        </button>
      </div>

      {/* Overlay Navigation Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-50 h-screen w-screen bg-black/80 blur-sm">
          {isMenuOpen ? (
            <CloseIcon
              color="white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <></>
          )}
        </div>
      )}

      {/* Navigation Bar for Larger Screens */}
      <nav>
        <ul className="hidden justify-between rounded-[60px] bg-bgCard p-3 lg:flex">
          {navBarItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="rounded-[32px] px-4 py-2 text-[14px] text-title transition-colors duration-200 hover:bg-primaryHover hover:bg-opacity-30 hover:text-accent"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Start Now Button for Larger Screens */}
      <div className="hidden items-center gap-4 lg:flex">
        <a className="text-lg font-medium text-title" href="#">
          Dashboard
        </a>
        <Button />
      </div>
    </header>
  );
};

export default Header;
