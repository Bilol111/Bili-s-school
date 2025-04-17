import React, { useState } from "react";
import Navbar from "./Navbar";
import Sections from "./Sections";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoHome, IoClose } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Aboutus = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sections isOpen={isOpen} />
      
      <div className="mt-24 px-8 md:px-20 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-gray-800">Bilol's School</h1>
        <img
          src="https://thumbs.dreamstime.com/b/middle-school-building-20723831.jpg"
          alt="School"
          className="mt-6 rounded-lg shadow-lg w-full max-w-3xl"
        />
        
        <p className="text-lg mt-6 text-gray-600 leading-relaxed max-w-3xl">
          Bilol studies at a well-known school in his city, a place filled with energy, knowledge, and fun.
          The school has a big building with bright classrooms, a large playground, and a well-stocked library.
          Students from different grades come together to learn, play, and grow. The teachers at Bilol’s school
          are kind and supportive, always encouraging students to do their best.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl">
          <img
            src="https://www.insidehighered.com/sites/default/files/2024-02/GettyImages-1072191138.jpg"
            alt="Students Learning"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <img
            src="https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg"
            alt="Library"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>

        <p className="text-lg mt-6 text-gray-600 leading-relaxed max-w-3xl">
          Each day starts with a morning assembly where students sing the national anthem and listen to important announcements.
          After that, classes begin, covering subjects like math, science, history, and literature. Apart from studies, the school
          also offers exciting extracurricular activities such as sports, music, and art. Bilol enjoys participating in school events,
          especially competitions where he gets to showcase his talents.
        </p>
      </div>
      <footer className="bg-gray-900 text-white py-6 px-4 flex flex-col md:flex-row md:justify-between items-center border-t border-gray-700">
      <nav>
        <ul className="space-y-6">
          <li>
            <Link to="/" className="flex items-center gap-3 hover:text-gray-300">
              <IoHome className="text-xl" />
              <span>Bosh Sahifa</span>
            </Link>
          </li>
          <li>
            <Link to="/students" className="flex items-center gap-3 hover:text-gray-300">
              <FaUser className="text-xl" />
              <span>O'quvchilar</span>
            </Link>
          </li>
          <li>
            <Link to="/grades" className="flex items-center gap-3 hover:text-gray-300">
              <GiUpgrade className="text-xl" />
              <span>Ustozlar</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-6 md:mt-0 text-center md:text-right">
        <p className="text-gray-400 text-sm">📍 Maktab manzili: Toshkent, Yunusobod tumani</p>
        <p className="text-gray-400 text-sm">🕒 Ish vaqti: Dushanba - Juma, 08:00 - 17:00</p>
        <div className="flex justify-center md:justify-end gap-4 mt-2">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-500"><FaFacebook size={20} /></a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram size={20} /></a>
          <a href="https://t.me" target="_blank" className="hover:text-blue-400"><FaTelegram size={20} /></a>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <a href="tel:+998993411744">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-500 transition duration-200">
            Call us
          </button>
        </a>
      </div>
      <div className="mt-6 md:mt-0 text-center md:text-right">
        <p className="text-gray-400 text-sm">© 2025 Barcha huquqlar himoyalangan.</p>
       <Link to="/"> <p className="text-gray-500 text-xs">Sayt dizayni: <span className="text-blue-400">Sizning Maktabingiz</span></p></Link>
      </div>
    </footer>
    </>
  );
};

export default Aboutus;
