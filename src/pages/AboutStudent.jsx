import React, { useState, useEffect } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { FaCalendarAlt, FaBook, FaSchool, FaChalkboardTeacher, FaCalendarCheck } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Aboutstudent = () => {
  const student = {
    name: 'Biloliddin',
    grade: 'C+',
    date: 'August 2007',
    email: 'bilol@gmail.com',
    phone: '+998-99-341-17-44',
  };

  const hours = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const [schedule, setSchedule] = useState(() => {
    return JSON.parse(localStorage.getItem('schedule')) || {};
  });
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [note, setNote] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  const handleCellClick = (day, hour) => {
    setSelectedDay(day);
    setSelectedTime(hour);
    setNote(schedule[`${day}-${hour}`] || '');
    setIsModalOpen(true);
  };

  const saveNote = () => {
    setSchedule({ ...schedule, [`${selectedDay}-${selectedTime}`]: note });
    setIsModalOpen(false);
  };

  const deleteNote = () => {
    const updatedSchedule = { ...schedule };
    delete updatedSchedule[`${selectedDay}-${selectedTime}`];
    setSchedule(updatedSchedule);
    setIsModalOpen(false);
  };

  const cards = [
    { id: 1, icon: <FaCalendarCheck className="text-blue-500 text-3xl" />, title: 'Attendance', value: '90%' },
    { id: 2, icon: <FaSchool className="text-yellow-500 text-3xl" />, title: 'Branches', value: '2' },
    { id: 3, icon: <FaBook className="text-red-500 text-3xl" />, title: 'Lessons', value: '6' },
    { id: 4, icon: <FaChalkboardTeacher className="text-green-500 text-3xl" />, title: 'Classes', value: '6' },
  ];

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        {/* Top Section (Profile + Stats) */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center w-full max-w-6xl">
          {/* Profile Card */}
          <div className="w-full lg:w-[500px] bg-gradient-to-r from-blue-400 to-blue-200 py-8 px-6 rounded-2xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                className="w-40 h-40 rounded-full border-4 border-white shadow-md"
                src="https://cdn.prod.website-files.com/65b95c11ae04f06420162f26/65d7aec04aa4d730958b4951_gs-student-center-hero.webp"
                alt="Profile"
              />
              <div>
                <h1 className="font-extrabold text-2xl text-white mb-1">{student.name}</h1>
                <div className="flex items-center mb-2">
                  <IoCheckmarkCircle className="mr-2 text-green-500 text-lg" />
                  <h2 className="font-bold text-white">{student.grade}</h2>
                </div>
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="mr-2 text-yellow-300 text-lg" />
                  <h2 className="font-bold text-white">{student.date}</h2>
                </div>
                <div className="flex items-center mb-2">
                  <MdEmail className="mr-2 text-red-300 text-lg" />
                  <h2 className="font-bold text-white">{student.email}</h2>
                </div>
                <div className="flex items-center">
                  <BsFillTelephoneFill className="mr-2 text-indigo-300 text-lg" />
                  <h2 className="font-bold text-white">{student.phone}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {cards.map((card) => (
              <div key={card.id} className="bg-white rounded-xl p-5 flex items-center shadow-md hover:shadow-lg">
                <div className="mr-4">{card.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-700">{card.value}</h2>
                  <p className="text-gray-500">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mt-10 w-full max-w-6xl bg-white rounded-2xl shadow-xl">
          <div className="border-b p-5 text-xl font-bold text-center bg-blue-100 text-blue-800">Teacher's Schedule</div>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-6 divide-x divide-gray-300 min-w-[700px]">
              <div className="bg-blue-50 font-semibold text-center py-3 text-blue-700">Time</div>
              {days.map((day) => (
                <div key={day} className="bg-blue-50 font-semibold text-center py-3 text-blue-700">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-6 divide-x divide-gray-300 min-w-[700px]">
              <div>
                {hours.map((hour) => (
                  <div key={hour} className="h-16 border-t border-gray-300 flex items-center justify-center text-sm font-medium bg-gray-50">{hour}</div>
                ))}
              </div>
              {days.map((day) => (
                <div key={day}>
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      onClick={() => handleCellClick(day, hour)}
                      className={`h-16 border-t border-gray-300 cursor-pointer ${
                        schedule[`${day}-${hour}`] ? 'bg-blue-300 text-white' : 'bg-white hover:bg-blue-200'
                      } flex items-center justify-center`}
                    >
                      {schedule[`${day}-${hour}`] || ''}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-300">Add or Delete Note</h2>
            <p className="text-sm mb-2 text-gray-600">{`${selectedDay} - ${selectedTime}`}</p>
            <textarea
              className="w-full p-3 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows="4"
              placeholder="Write your note here..."
            />
            <div className="flex justify-end gap-4">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={saveNote} className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                Save
              </button>
              <button onClick={deleteNote} className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Aboutstudent;
