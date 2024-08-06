import React, { useEffect, useState } from "react";
import AppRouter from "./router/Router";
import Circle from "./components/ui/Circle";
import Header from "./components/layout/Header";
import CloseIcon from "./assets/icons/close";
import { navBarItems } from "./data/navItems";
import Button from "./components/common/Button";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navBarItems={navBarItems}
      />
      <AppRouter />
      <Circle />
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center bg-black/80 backdrop-blur-md">
          <div className="absolute right-6 top-4">
            <CloseIcon color="white" onClick={() => setIsMenuOpen(false)} />
          </div>
          <nav className="mt-16 flex flex-col space-y-4">
            {navBarItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="nav-item text-fontTitle3 text-title"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <span></span>
            <div className="flex flex-col gap-4">
              <Button />
              <a
                className="text-md w-fit rounded-xl border px-4 py-2 font-medium text-title"
                href="#"
              >
                Dashboard
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default App;
