import React from 'react';
import Navbar from './Navbar';
import MyApp from './Calendar';
import Diagram from './Diagram';
import IncomeExpenseChart from './Diagram2'
const Examen = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen ">
      
      <div >
        <Navbar />
      </div>

   
      <div className="flex-1">
        <div className="flex gap-10">
          <div className="gap-3 mt-24 ml-10">
            <div className="flex gap-3">
              <div className="bg-purple-200 rounded-2xl p-4 shadow-md w-[320px] h-28 flex flex-col justify-between text-center">
                <div className="flex justify-between items-center">
                  <button className="bg-green-100 text-green-600 text-[10px] font-semibold px-2 py-[2px] rounded-lg">
                    2024/25
                  </button>
                  <button className="text-gray-400 text-lg"></button>
                </div>

                <div>
                  <h1 className="text-3xl font-bold">1,234</h1>
                  <p className="text-gray-600 text-sm">Students</p>
                </div>
              </div>

              <div className="bg-yellow-200 rounded-2xl p-4 shadow-md w-[320px] h-28 flex flex-col justify-between text-center">
                <div className="flex justify-between items-center">
                  <button className="bg-green-100 text-green-600 text-[10px] font-semibold px-2 py-[2px] rounded-lg">
                    2024/25
                  </button>
                  <button className="text-gray-400 text-lg"></button>
                </div>

                <div>
                  <h1 className="text-3xl font-bold">1,234</h1>
                  <p className="text-gray-600 text-sm">Teachers</p>
                </div>
              </div>

              <div className="bg-purple-200 rounded-2xl p-4 shadow-md w-[320px] h-28 flex flex-col justify-between text-center">
                <div className="flex justify-between items-center">
                  <button className="bg-green-100 text-green-600 text-[10px] font-semibold px-2 py-[2px] rounded-lg">
                    2024/25
                  </button>
                  <button className="text-gray-400 text-lg"></button>
                </div>

                <div>
                  <h1 className="text-3xl font-bold">1,234</h1>
                  <p className="text-gray-600 text-sm">Parents</p>
                </div>
              </div>
            </div>

            <div className='flex gap-10 mt-5'>
            <div>
              <Diagram />
            </div>
            <div className='mt-6'>
              <IncomeExpenseChart/>
            </div>
            </div>
          </div>

          <div className="mt-24">
            <MyApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examen;
