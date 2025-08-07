import { FaCheck } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <FaCheck />
        {feature}
      </p>
    </div>
  );
};

export default Feature;
