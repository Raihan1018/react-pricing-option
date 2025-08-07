import React from "react";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/DaisyNav/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import LineChart from "./components/LineChart/LineChart";

const App = () => {
  return (
    <div>
      <NavBar />
      <DaisyNav />
      <PriceOptions />
      <LineChart/>
    </div>
  );
};

export default App;
