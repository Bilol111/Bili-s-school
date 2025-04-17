import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";

const EditTeacherModal = ({ isOpen, onClose, teacher, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    profession: "",
    avatar: "",
    newAvatarFile: null,
  });

  useEffect(() => {
    if (teacher && isOpen) {
      setFormData({
        name: teacher.name || "",
        desc: teacher.desc || "",
        profession: teacher.profession || "",
        avatar: teacher.avatar || "",
        newAvatarFile: null,
      });
    }
  }, [teacher, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      newAvatarFile: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    if (!token) return alert("Token topilmadi");

    try {
      let avatarUrl = formData.avatar;

      if (formData.newAvatarFile) {
        const uploadData = new FormData();
        uploadData.append("avatar", formData.newAvatarFile);

        const uploadRes = await axiosInstance.post("/teachers/upload", uploadData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        avatarUrl = uploadRes.data.url;
      }

      const updatedTeacher = {
        name: formData.name,
        desc: formData.desc,
        profession: formData.profession,
        avatar: avatarUrl,
      };

      const res = await axiosInstance.put(`/teachers/${teacher._id}`, updatedTeacher, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onSave(res.data);
      onClose();
    } catch (error) {
      console.error("Xatolik teacherni yangilashda:", error);
      alert("Teacher yangilanishida xatolik yuz berdi");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-xl space-y-6 transition-transform transform scale-100 hover:scale-105"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Edit Teacher
      </h2>
  
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div>
          <label className="block text-gray-700 font-medium mb-1">Profile Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formData.avatar && (
            <img
              src={formData.avatar}
              alt="Current Avatar"
              className="mt-2 h-24 w-24 rounded-full object-cover"
            />
          )}
        </div>
  
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <input
            name="desc"
            type="text"
            value={formData.desc}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div>
          <label className="block text-gray-700 font-medium mb-1">Profession</label>
          <input
            name="profession"
            type="text"
            value={formData.profession}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div className="mt-6 flex justify-between items-center gap-5">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl text-white bg-gray-600 hover:bg-gray-700 focus:outline-none transition duration-300"
          >
            Cancel
          </button>
          <input
            type="submit"
            value="Save"
            className="w-full py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition duration-300"
          />
        </div>
      </div>
    </form>
  </div>
  
  );
};

export default EditTeacherModal;
