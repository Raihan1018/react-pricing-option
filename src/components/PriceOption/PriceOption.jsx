import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-700 p-5 rounded-2xl flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
      <button className="btn bg-green-500 w-full rounded-2xl hover:bg-green-300">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
