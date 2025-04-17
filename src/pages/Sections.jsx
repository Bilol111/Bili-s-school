import React from "react";
import { FaUser } from "react-icons/fa";
import { IoHome, IoClose } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsTelegram } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { IoLogIn } from "react-icons/io5";
import { FaRegistered } from "react-icons/fa";
const Sections = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-52 bg-gray-100 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        <button
          className="absolute top-5 right-5 text-3xl p-2 bg-gray-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className=""/>
        </button>

        <div className="mt-20 p-3">
          <div className="w-48 flex items-center hover:bg-gray-50 text-xl p-3 rounded-md">
            <Link to="/">
              <IoHome />
            </Link>
            <Link to="/" className="ml-2">
              Bosh sahifa
            </Link>
          </div>
          <div className="w-48 flex items-center hover:bg-gray-50 text-xl p-3 rounded-md">
            <Link to="/students">
              <FaUser />
            </Link>
            <Link to="/students" className="ml-2">
              O'quvchilar
            </Link>
          </div>
          <div className="w-48 flex items-center hover:bg-gray-50 text-xl p-3 rounded-md">
            <Link to="/grades">
              <GiUpgrade />
            </Link>
            <Link to="/grades" className="ml-2">
              Ustozlar
            </Link>
          </div>
          <div className="w-48 flex items-center hover:bg-gray-50 text-xl p-3 rounded-md">
            <Link to="/examen">
            <PiExam />
            </Link>
            <Link to="/examen" className="ml-2">
              Exam
            </Link>
          </div>
          <div className="w-48 flex items-center hover:bg-gray-50 text-xl p-3 rounded-md">
            <Link to="/register">
            </Link>
            <FaRegistered />
            <Link to="/register" className="ml-2">
              Register
            </Link>
          </div>
          <div className="w-48 flex items-center hover:bg-gray-50 text-xl p-3 rounded-md">
            <Link to="/login">
            <IoLogIn />
            </Link>
            <Link to="/login" className="ml-2">
              Login
            </Link>
          </div>
        </div>

        <div className="absolute bottom-5 left-5">
          <hr className="mb-3" />
          <div className="flex gap-5 text-2xl">
            <a href="https://t.me/samarbadriddinov">
              <BsTelegram />
            </a>
            <a href="https://www.instagram.com/samarbadriddinov/">
              <IoLogoInstagram />
            </a>
            <a href="https://www.youtube.com/@samarbadriddinov">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sections