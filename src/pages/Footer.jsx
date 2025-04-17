import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
<footer className="bg-gray-900 text-white py-6 px-4 flex flex-col md:flex-row md:justify-between items-center border-t border-gray-700">
<nav>
  <ul className="space-y-6">
    <li>
      <Link
        to="/"
        className="flex items-center gap-3 hover:text-gray-300"
      >
        <IoHome className="text-xl" />
        <span>Bosh Sahifa</span>
      </Link>
    </li>
    <li>
      <Link
        to="/students"
        className="flex items-center gap-3 hover:text-gray-300"
      >
        <FaUser className="text-xl" />
        <span>O'quvchilar</span>
      </Link>
    </li>
    <li>
      <Link
        to="/grades"
        className="flex items-center gap-3 hover:text-gray-300"
      >
        <GiUpgrade className="text-xl" />
        <span>Ustozlar</span>
      </Link>
    </li>
  </ul>
</nav>

<div className="mt-6 md:mt-0 text-center md:text-right">
  <p className="text-gray-400 text-sm">
    📍 Maktab manzili: Toshkent, Yunusobod tumani
  </p>
  <p className="text-gray-400 text-sm">
    🕒 Ish vaqti: Dushanba - Juma, 08:00 - 17:00
  </p>
  <div className="flex justify-center md:justify-end gap-4 mt-2">
    <a
      href="https://facebook.com"
      target="_blank"
      className="hover:text-blue-500"
    >
      <FaFacebook size={20} />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      className="hover:text-pink-500"
    >
      <FaInstagram size={20} />
    </a>
    <a
      href="https://t.me"
      target="_blank"
      className="hover:text-blue-400"
    >
      <FaTelegram size={20} />
    </a>
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
  <p className="text-gray-400 text-sm">
    © 2025 Barcha huquqlar himoyalangan.
  </p>
  <Link to="/">
    <p className="text-gray-500 text-xs">
      Sayt dizayni:{" "}
      <span className="text-blue-400">Sizning Maktabingiz</span>
    </p>
  </Link>
</div>
</footer>