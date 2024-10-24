"use client";
import { FC, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

interface AnimatedButtonProps {
  label: string;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ label }) => {
  // Separate hover state for each button
  const [isHoveredBuyNow, setIsHoveredBuyNow] = useState(false);

  return (
    <div className="flex flex-col space-y-2">
      {/* Second button - Buy Now */}
      <div
        className="relative w-48 h-12 bg-blue-800 hover:bg-[#011962] text-white rounded-lg overflow-hidden flex justify-center items-center"
        onMouseEnter={() => setIsHoveredBuyNow(true)}
        onMouseLeave={() => setIsHoveredBuyNow(false)}
      >
        <p
          className={`absolute text-nowrap transition-all duration-300 ${
            isHoveredBuyNow
              ? "translate-y-[-100%] opacity-0"
              : "translate-y-0 opacity-100"
          } text-white`}
        >
          {label}
        </p>

        <p
          className={`absolute text-nowrap transition-all duration-300 ${
            isHoveredBuyNow
              ? "translate-y-0 opacity-100 text-white"
              : "translate-y-[100%] opacity-0"
          }`}
        >
          <FaShoppingBag size={24} />
        </p>
      </div>
    </div>
  );
};

export default AnimatedButton;
