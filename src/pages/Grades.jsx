import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sections from "./Sections";
import { Link } from "react-router-dom";
import AddTeacherModal from "./AddTeacherModal";
import EditTeacherModal from "./EditTEacherModal"; 
import axiosInstance from "../../axios";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false); // New state for Edit Modal
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null); // Store selected teacher for editing

  const fetchTeachers = async () => {
    try {
      const res = await axiosInstance.get("/teachers");
      setTeachers(res.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      alert("Failed to fetch teachers.");
    }
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.log("Authorization token not found.");
      return;
    }

    axiosInstance
      .delete(`/teachers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setTeachers((prev) => prev.filter((teacher) => teacher._id !== id));
      })
      .catch((error) => {
        console.error("Error during deletion:", error);
        console.log("Full delete error:", error.response?.data);
      });
  };

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher); // Set the teacher data to be edited
    setEditModalOpen(true); // Open the edit modal
  };

  const handleTeacherUpdated = (updatedTeacher) => {
    setTeachers((prev) =>
      prev.map((t) => (t._id === updatedTeacher._id ? updatedTeacher : t))
    );
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sections isOpen={isOpen} setIsOpen={setIsOpen} />

      <h1 className="pt-24 text-4xl font-bold bg-gray-100 text-blue-900 text-center">
        Our teachers
      </h1>

      <div className="bg-gray-100 flex justify-center py-4">
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition duration-200"
        >
          Add Teacher
        </button>
      </div>

      <div
        className={`flex bg-gray-50 items-center justify-center text-4xl font-bold transition-all duration-300 ${
          isOpen ? "ml-52" : "ml-0"
        }`}
      >
        <div className="grid grid-cols-3 gap-12 p-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center bg-white rounded-xl shadow-md p-4 space-y-4 transition duration-200 hover:shadow-lg"
            >
              <Link to="/third">
                <img
                  className="w-80 h-80 rounded-full object-cover shadow"
                  src={`https://spec-repo-1-ez1e.onrender.com/uploads/${teacher.avatar}`}
                  alt={`Teacher ${index + 1}`}
                />
              </Link>

              <div className="absolute bottom-0 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleEdit(teacher)} // Open the Edit Teacher Modal
                  className="text-yellow-500 hover:text-yellow-400 text-3xl"
                  title="Edit"
                >
                  <FiEdit2 />
                </button>

                <button
                  onClick={() => handleDelete(teacher._id)}
                  className="text-red-500 hover:text-red-400 text-3xl"
                  title="Delete"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddTeacherModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          fetchTeachers(); // Refresh teacher list after adding a new one
        }}
      />

      {/* EditTeacherModal */}
      <EditTeacherModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)} // Close modal
        teacher={selectedTeacher} // Pass the selected teacher to edit
        onSave={handleTeacherUpdated} // Handle updated teacher data
      />
    </>
  );
};

export default Home;
