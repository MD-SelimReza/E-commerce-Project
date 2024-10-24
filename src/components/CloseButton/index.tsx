import React from "react";

interface CloseButtonProps {
  className?: string; // Optional prop for custom classes
}

const CloseButton: React.FC<CloseButtonProps> = ({ className = "" }) => {
  return (
    <button
      className={`relative bg-[#011962] flex justify-center items-center w-10 h-10 group ${className}`}
      aria-label="Close"
    >
      <div className="relative flex justify-center items-center mr-4">
        {/* First Line */}
        <span className="absolute inset-0 bg-white w-4 h-[2px] rounded-md transform rotate-45 transition-transform duration-300 group-hover:rotate-0"></span>
        {/* Second Line */}
        <span className="absolute inset-0 bg-white w-4 h-[2px] rounded-md transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"></span>
      </div>
    </button>
  );
};

export default CloseButton;
