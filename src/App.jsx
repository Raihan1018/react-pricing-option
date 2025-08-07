import React from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/DaisyNav/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

const App = () => {
  return (
    <div>
      <NavBar />
      <DaisyNav />
      <PriceOptions />
    </div>
  );
};

export default App;
