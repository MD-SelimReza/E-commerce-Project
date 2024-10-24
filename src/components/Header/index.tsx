import React from "react";
import Dropdown from "../Dropdown";
import { LanguageMenus, modeMenus, quickHelpMenus } from "@/data/menu";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  return (
    <header className="text-black">
      <nav className="container mx-auto">
        <div className=" flex justify-between bg-gray-100 px-4 border-b border-gray-300">
          <div className="flex gap-3 items-center">
            <Dropdown label={"Mode"} menuItems={modeMenus} className="w-10" />
            <Dropdown
              label={"Language"}
              menuItems={LanguageMenus}
              className="w-16"
            />
            <Dropdown
              label={"Quick Help"}
              menuItems={quickHelpMenus}
              className="w-[68px]"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-black hover:text-gray-800">
              <FaFacebookF />
            </span>
            <span className="text-black hover:text-gray-800">
              <FaInstagram />
            </span>
            <span className="text-black hover:text-gray-800">
              <FaTwitter />
            </span>
            <span className="text-black hover:text-gray-800">
              <FaWhatsapp />
            </span>
          </div>
        </div>
        {/* <div className="px-4 py-6 bg-[#FFFFFF] shadow space-y-5">
          <div className="flex justify-between items-center h-12">
            <div className="flex-1 border-2 border-gray-200 rounded-s-md flex justify-between items-center divide-x-2">
              <input
                type="text"
                placeholder="Search for products"
                className="outline-none border-none placeholder:text-gray-600 flex-grow px-2 py-2 text-sm text-gray-600"
              />
              <div className="px-4">
                <Dropdown
                  label={"All"}
                  menuItems={quickHelpMenus}
                  className={"w-6"}
                />
              </div>
            </div>
            <div className="flex justify-center items-center h-full">
              <div className="bg-[#2252d1] h-full flex justify-center items-center rounded-e-md w-12">
                <button className="text-white">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <FaBars />
              <p className="text-4xl font-medium text-blue-700">Electron</p>
            </div>
            <div className="flex items-center gap-6">
              <FaRegCircleUser size={24} />
              <HiOutlineShoppingBag size={30} />
              <FaSearch size={24} />
            </div>
          </div>
        </div> */}
        {/* <div
          className="px-4 py-6 bg-[#FFFFFF] space-y-5"
          style={{ boxShadow: "0px 14px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex justify-between items-center h-12">
            <div className="flex-1 border-2 border-gray-200 rounded-s-md flex justify-between items-center divide-x-2">
              <input
                type="text"
                placeholder="Search for products"
                className="outline-none border-none placeholder:text-gray-600 flex-grow px-2 py-2 text-sm text-gray-600"
              />
              <div className="px-4">
                <Dropdown
                  label={"All"}
                  menuItems={quickHelpMenus}
                  className={"w-6"}
                />
              </div>
            </div>
            <div className="flex justify-center items-center h-full">
              <div className="bg-[#2252d1] h-full flex justify-center items-center rounded-e-md w-12">
                <button className="text-white">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <FaBars />
              <p className="text-4xl font-medium text-blue-700">Electron</p>
            </div>
            <div className="flex items-center gap-6">
              <FaRegCircleUser size={24} />
              <HiOutlineShoppingBag size={30} />
              <FaSearch size={24} />
            </div>
          </div>
        </div> */}
        <div className="px-4 py-6 bg-white shadow-lg shadow-gray-300 space-y-5 border-b mb-3">
          <div className="flex justify-between items-center h-12">
            <div className="flex-1 border-2 border-gray-200 rounded-s-md flex justify-between items-center divide-x">
              <input
                type="text"
                placeholder="Search for products"
                className="outline-none border-none placeholder:text-gray-500 flex-grow px-2 py-2 text-sm text-gray-600"
              />
              <div className="px-4">
                <Dropdown
                  label={"ALL"}
                  menuItems={quickHelpMenus}
                  className="w-6"
                />
              </div>
            </div>
            <div className="flex justify-center items-center h-full">
              <div className="bg-[#2252D1] h-full flex justify-center items-center rounded-e-md w-12">
                <button className="text-white">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center text-gray-800">
              <FaBars size={20} />
              <p className="text-3xl font-semibold text-blue-700">Electron</p>
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <FaRegCircleUser size={22} />
              <HiOutlineShoppingBag size={26} />
              <FaSearch size={22} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
