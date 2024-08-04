import React from "react";
import AppRouter from "./router/Router";
import Circle from "./components/ui/Circle";
import Header from "./components/layout/Header";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg">
      <Header />
      <AppRouter />
      <Circle />
    </div>
  );
};

export default App;
