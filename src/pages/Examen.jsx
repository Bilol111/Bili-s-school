import React from "react";
import Navbar from "./Navbar";
import MyApp from "./Calendar";
import Diagram from "./Diagram";
import IncomeExpenseChart from "./Diagram2";
import { LineChart, ResponsiveContainer } from "recharts";

const Examen = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 mt-20 lg:mt-24">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { color: "bg-purple-200", title: "Students" },
            { color: "bg-yellow-200", title: "Teachers" },
            { color: "bg-purple-200", title: "Parents" },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`${card.color} rounded-2xl p-4 shadow-md h-28 flex flex-col justify-between text-center`}
            >
              <div className="flex justify-between items-center">
                <button className="bg-green-100 text-green-600 text-[10px] font-semibold px-2 py-[2px] rounded-lg">
                  2024/25
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-bold">1,234</h1>
                <p className="text-gray-600 text-sm">{card.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row gap-8 mt-8">
          <div className="flex-1 flex flex-col lg:flex-row gap-8">
            <div className="w-full max-w-[600px] mx-auto">
              <Diagram />
            </div>
            <div className="w-full max-w-[600px] mx-auto">
              <LineChart/>
            </div>
          </div>

          <div className="w-full xl:w-[400px]">
            <MyApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examen;
