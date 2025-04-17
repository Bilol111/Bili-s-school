import React, { useState } from "react";
import Navbar from "./Navbar";
import Sections from "./Sections";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoHome, IoClose } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ResponsiveContainer } from "recharts";
const data = [
  { month: 'Boys', income: 750, expense: 2400 },
  { month: 'Girls', income: 250, expense: 1398 },
  { month: 'Parents', income: 2000, expense: 3600 },
  { month: 'Teachers', income: 400, expense: 2000 },

  
];
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} className="sm:w-[]"/>

      <Sections isOpen={isOpen} />

      <div className="mt-20">
        <img
          className="w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg"
          alt=""
        />
      </div>

      <div>
        <h1 className="text-gray-700 mt-10 text-6xl font-bold text-center">
          Welcome
        </h1>
       
      </div>

      <div className="w-full h-[400px]">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <Line
        type="monotone"
        dataKey="income"
        stroke="#82ca9d"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="expense"
        stroke="#8884d8"
        strokeWidth={3}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  </ResponsiveContainer>
</div>

      <div className="flex mt-[50px] p-[100px] justify-center gap-[50px] ">
        <div className="w-[720px]">
          <h1 className="pl-[100px] pb-6 pt-5 text-2xl font-bold text-gray-600">
            BILOL'S EDUCATIONAL QUALITY
          </h1>
          <p className="text-2xl font-extralight sm:w-[500px]">
            At our Bilol's school in Tashkent, Uzbekistan, we teach a carefully
            constructed academic programme that will lay the foundations for
            your child’s future – whatever they choose to be or do in life.{" "}
            <br />
            <br /> All our students follow the English National Curriculum,
            which includes IGCSEs and A-levels. These qualifications set the
            standard for international education and provide pathways to higher
            education across the globe. We offer the widest choice of subjects
            in Uzbekistan, too, ensuring what and how your child learns matches
            their hopes and aspirations for the future. <br />
            <br /> Learning in small class sizes and enjoying global experiences
            that cater to their passions and talents, your child will enjoy a
            truly personalised education that engages, excites, and inspires.
            Tailoring learning in this way enables our students to achieve
            fantastic grades. This opens doors to the world’s top universities,
            including Cambridge, University College London, and Sciences Po in
            Paris.
          </p>
          <Link to="/about">
            <button className="text-2xl font-extrabold text-blue-800 border border-gray-800 mt-8 p-3 rounded-2xl hover:bg-black hover:text-white">
              About Us
            </button>
          </Link>
        </div>
        <div>
          <img
            className="w-[800px] h-[750px]"
            src="https://www.nordangliaeducation.com/bst-tashkent/-/media/bst-tashkent/homepage/image_bst2024_fullres-107.jpg?h=1000&iar=0&w=1499&rev=5b4eef6276024db488a2c119374fe0e2&hash=3EA5E1380FFB9F0CC42F0481D75E6D6A"
            alt=""
          />
        </div>
      </div>

      <div className="ml-[100px] font-semibold text-5xl mb-[80px]">
        <h1>We have.....</h1>
      </div>

      <div className="grid grid-cols-3 ml-[100px] xs:grid-cols-1 xs:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="mb-[50px] max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-3">
          {/* Image */}
          <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-md -mt-16">
            <img
              src="https://thephysiocompany.co.uk/wp-content/uploads/football.jpg"
              alt="Student in lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Academic Football
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Your child will follow a personalised pathway to success that
            nurtures their academic development, without learning your child
            play footbal with their classmates and play in tourments in our
            school.
          </p>

          {/* Button */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        <div className="mb-[50px] max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-3">
          {/* Image */}
          <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-md -mt-16">
            <img
              src="https://cdn.vox-cdn.com/thumbor/46rp_6Tb025DqcqUvQw076nqPyY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25551536/2164077239.jpg"
              alt="Student in lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Academic Basketball
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Your child will follow a personalised pathway to success that
            nurtures their academic development, in their PI lesson they can
            play basketball in our gym.
          </p>

          {/* Button */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        <div className="mb-[50px] snap-start max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-3">
          {/* Image */}
          <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-md -mt-16">
            <img
              src="https://sport-news.uz/wp-content/uploads/2023/07/7-2.jpg"
              alt="Student in lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Academic Valleyball
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Your child will follow a personalised pathway to success that
            nurtures their academic development, in their PI lesson they can
            play valeyball in our gym..
          </p>

          {/* Button */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        <div className="scroll-ml-6 snap-start max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-3">
          {/* Image */}
          <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-md -mt-16">
            <img
              src="https://www.eyeqindia.com/wp-content/uploads/2023/05/Protecting-your-eyes-while-swimming.webp"
              alt="Student in lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Academic Swimming
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Your child will follow a personalised pathway to success that
            nurtures their academic development, and we have our swimming pool
            that way your children can swim there and relax with their friends.
          </p>

          {/* Button */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        <div className="scroll-ml-6 snap-start max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-3">
          {/* Image */}
          <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-md -mt-16">
            <img
              src="https://s0.rbk.ru/v6_top_pics/media/img/7/64/756761242247647.jpg"
              alt="Student in lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Academic Handball
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Your child will follow a personalised pathway to success that
            nurtures their academic development, after their lesson they can
            play handball because we have our tourment in our school.
          </p>

          {/* Button */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        <div className="scroll-ml-6 snap-start max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-3">
          {/* Image */}
          <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-md -mt-16">
            <img
              src="https://www.tennisireland.ie/wp-content/uploads/2024/11/2724520-1024x625.jpg"
              alt="Student in lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Academic Tennis
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Your child will follow a personalised pathway to success that
            nurtures their academic development, in our school's area we have
            special area for tennis for your children they can play tennis with
            their classmates in PI lesson.
          </p>

          {/* Button */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-[120px] text-center">
        <h1 className="text-3xl font-bold text-gray-900">OUR KITCHEN</h1>
        <div>
          <img
            className="w-full mt-[20px]"
            src="https://images.adsttc.com/media/images/5f3a/2e02/b357/65be/e000/021f/newsletter/NYBG_EdibleAcademy_02_v1_Courtesy_Cooper_Robertson__Credit_Robert_Benson_current.jpg?1597648366"
            alt=""
          />
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-10 px-4 flex flex-col md:flex-row md:justify-between items-center border-t border-gray-700">
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
          <button className=" text-white py-2 px-6 rounded-lg shadow-md hover:text-purple-800 transition duration-200">
            +998-99-341-17-44
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


export default Home;
