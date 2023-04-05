import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      {/* Header components */}
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      {/* Footer components */}
      <Footer />
    </div>
  );
};

export default App;
