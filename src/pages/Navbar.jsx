import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Sections from "./Sections";
import { IoHome, IoClose, IoLogoInstagram } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <>
    
     <header
      className={` flex justify-between items-center bg-gray-100 p-4 fixed top-0 transition-all duration-300 w-[1440px]`}
    >
      <div className="flex items-center">
        <button
          className="text-3xl p-2 bg-gray-100 text-black rounded-lg ml-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
        <img src="https://www.sammi.ac/logo.svg" alt="Logo" />
        <h1 className="text-2xl font-bold ml-2 xs:hidden sm:flex md:flex lg:flex">Bilol's School</h1>
      </div>
      <input
        className="w-[500px] border-gray-500 border-[1px] rounded-lg p-2 xs:hidden md:hidden sm:hidden lg:flex"
        type="text"
        placeholder="Search..."
      />
      <div className="flex items-center gap-4">
        <a href="tel:+998993411744">
          <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 xs:hidden md:hidden sm:hidden lg:flex">
            Call us
          </button>
        </a>
        <select className="p-2 rounded-lg xs:hidden sm:hidden md:hidden lg:flex">
          <option value="uz">uz</option>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
      </div>
    </header>

      <Sections isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
