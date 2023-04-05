import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      {/* Header components */}
      <Header/>
      <Outlet/>
      {/* Footer components */}
    </div>
  );
};

export default App;
