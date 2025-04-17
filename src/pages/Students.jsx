import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Navbar from "./Navbar";
import Sidebar from "./Sections";
import axiosInstance from "../../axios";
import AddStudentModal from "./AddStudentModal";
import CoinModal from "./CoinModal";
import { Link } from "react-router-dom";

const Students = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coinModalOpen, setCoinModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await axiosInstance.get("/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      alert("Failed to fetch students.");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleCoinModalOpen = (student) => {
    setSelectedStudent(student);
    setCoinModalOpen(true);
  };

  const handleCoinUpdate = async (coinsToAdd, coinsToSubtract) => {
    try {
      const updatedStudent = {
        ...selectedStudent,
        coins: selectedStudent.coins + coinsToAdd - coinsToSubtract,
      };

      await axiosInstance.put(`/students/${selectedStudent._id}`, updatedStudent);
      setCoinModalOpen(false);
      fetchStudents();
    } catch (error) {
      console.error("Error updating coins:", error);
      alert("Failed to update coins.");
    }
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.log("Authorization token not found.");
      return;
    }

    axiosInstance
      .delete(`/students/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setStudents((prev) => prev.filter((student) => student._id !== id));
      })
      .catch((error) => {
        console.error("Error during deletion:", error);
        console.log("Full delete error:", error.response?.data);
      });
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="p-8 mt-20 w-full">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">O'quvchilar</h2>
            <button
              onClick={() => {
                setEditingStudent(null);
                setIsModalOpen(true);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              + Add Student
            </button>
          </div>
          <table className="min-w-full table-fixed bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left w-1/6">Img</th>
                <th className="px-4 py-3 text-left w-1/4">Name</th>
                <th className="px-4 py-3 text-left w-1/6">Age</th>
                <th className="px-4 py-3 text-left w-1/6">Coins</th>
                <th className="px-4 py-3 text-left w-1/4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr
                  key={s._id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-4">
                    <Link to="/abouts">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={`https://spec-repo-1-ez1e.onrender.com/uploads/${s.avatar}`}
                        alt={s.name}
                      />
                    </Link>
                  </td>
                  <td className="px-4 py-4">{s.name}</td>
                  <td className="px-4 py-4">{s.age}</td>
                  <td className="px-4 py-4 flex items-center gap-2">
                    <FaBitcoin className="text-yellow-500" /> {s.coins || 0}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2 justify-start">
                      <button
                        className="bg-yellow-300 p-2 rounded text-black hover:bg-yellow-400 transition duration-300"
                        onClick={() => handleEdit(s)}
                      >
                        <MdModeEdit />
                      </button>

                      <button
                        className="bg-red-500 p-2 rounded text-white hover:bg-red-600 transition duration-300"
                        onClick={() => handleDelete(s._id)}
                      >
                        <RiDeleteBin6Line />
                      </button>

                      <button
                        className="bg-green-500 p-2 rounded text-white hover:bg-green-600 transition duration-300"
                        onClick={() => handleCoinModalOpen(s)}
                      >
                        <AiOutlinePlusCircle />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingStudent(null);
          fetchStudents();
        }}
        student={editingStudent} // 🟢 Pass editing student
      />

      <CoinModal
        isOpen={coinModalOpen}
        onClose={() => setCoinModalOpen(false)}
        onUpdate={handleCoinUpdate}
        student={selectedStudent}
      />
    </>
  );
};

export default Students;
