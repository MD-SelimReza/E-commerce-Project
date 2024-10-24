"use client";

interface DropdownItemProps {
  label: string;
  isHovered: boolean;
}

interface DropdownProps {
  label: string;
  menuItems: string[];
  className: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, isHovered }) => {
  return (
    <div className="uppercase text-xs font-medium">
      <span
        className={`absolute text-nowrap transition-all duration-300 ${
          isHovered
            ? "translate-y-[-100%] opacity-0"
            : "translate-y-0 opacity-100"
        } text-black`}
      >
        {label}
      </span>
      <span
        className={`absolute text-nowrap transition-all duration-300 ${
          isHovered
            ? "translate-y-0 opacity-100 text-gray-700"
            : "translate-y-[100%] opacity-0"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown: React.FC<DropdownProps> = ({ label, menuItems, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative inline-block text-left">
      {/* Quick Help Text */}
      <div
        className="py-3 cursor-pointer flex justify-between items-center gap-[2px]"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className={`relative font-medium text-xs uppercase h-5 overflow-hidden flex justify-center items-center ${className}`}
        >
          <span
            className={`absolute text-nowrap transition-all duration-300 ${
              isOpen
                ? "translate-y-[-100%] opacity-0"
                : "translate-y-0 opacity-100"
            } text-black whitespace-nowrap`}
          >
            {label}
          </span>
          <span
            className={`absolute text-nowrap transition-all duration-300 ${
              isOpen
                ? "translate-y-0 opacity-100 text-gray-700"
                : "translate-y-[100%] opacity-0"
            } text-gray-700 whitespace-nowrap`}
          >
            {label}
          </span>
        </div>
        <div className="text-gray-700">
          <MdKeyboardArrowDown size={20} />
        </div>
      </div>

      {/* Dropdown Menu */}
      {(isOpen || isHovered) && (
        <div
          className="origin-top-right z-10 absolute text-sm w-[135px] p-4 text-nowrap shadow-custom bg-white"
          onMouseEnter={() => setIsHovered(true)} // Keep menu Hovered on hover
          onMouseLeave={() => setIsHovered(false)} // Close menu on hover out
        >
          <div className="w-auto space-y-3">
            {menuItems.map((item) => (
              <div key={item} className="relative h-[14px] overflow-hidden">
                <a
                  href={item}
                  className="relative overflow-hidden"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <DropdownItem label={item} isHovered={hoveredItem === item} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

// // Dropdown Item Component
// interface DropdownItemProps {
//   label: string;
//   isHovered: boolean;
// }

// const DropdownItem: React.FC<DropdownItemProps> = ({ label, isHovered }) => {
//   return (
//     <div className="relative text-sm h-4 flex gap-2 items-center overflow-hidden">
//       <span
//         className={`absolute transition-all duration-300 ${
//           isHovered
//             ? "translate-y-[-100%] opacity-0"
//             : "translate-y-0 opacity-100"
//         } text-black whitespace-nowrap`}
//       >
//         {label}
//       </span>
//       <span
//         className={`absolute transition-all duration-300 ${
//           isHovered
//             ? "translate-y-0 opacity-100 text-gray-700"
//             : "translate-y-[100%] opacity-0"
//         } text-gray-700 whitespace-nowrap`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// };

// import React, { useState } from "react";

// const QuickHelpDropdown: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//   // Menu items array
//   const menuItems = ["Order Tracking", "Contact", "FAQ", "Find Us"];

//   return (
//     <div className="relative inline-block text-left">
//       {/* Quick Help Text */}
// <div
//   className="py-2 cursor-pointer"
//   onMouseEnter={() => setIsOpen(true)}
//   onMouseLeave={() => setIsOpen(false)}
// >
//   <div className="relative w-20 h-5 overflow-hidden flex justify-center items-center">
//     <a
//       className={`absolute text-nowrap transition-all duration-300 ${
//         isOpen
//           ? "translate-y-[-100%] opacity-0"
//           : "translate-y-0 opacity-100"
//       } text-black`}
//     >
//       Quick Help
//     </a>
//     <a
//       className={`absolute text-nowrap transition-all duration-300 ${
//         isOpen
//           ? "translate-y-0 opacity-100 text-gray-700"
//           : "translate-y-[100%] opacity-0"
//       }`}
//     >
//       Quick Help
//     </a>
//   </div>
// </div>

//       {/* Dropdown Menu */}
//       {(isOpen || isHovered || hoveredItem) && (
//         <div
//           className="origin-top-right absolute w-fit text-nowrap shadow-custom rounded bg-white"
//           // style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)" }} // 20px shadow on all sides
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="w-32 py-2">
//             {menuItems.map((item) => (
//               <div key={item} className="py-[6px] px-4 cursor-pointer">
//                 <a
//                   href={item}
//                   onMouseEnter={() => setHoveredItem(item)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   <DropdownItem label={item} isHovered={hoveredItem === item} />
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuickHelpDropdown;
