import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";

const EditStudentModal = ({ isOpen, onClose, student, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    birthdate: "",
    phoneNumber: "",
    coins: 0,
    avatar: "",
    newAvatarFile: null, // для загрузки нового файла
  });

  useEffect(() => {
    if (student && isOpen) {
      setFormData({
        name: student.name || "",
        age: student.age || "",
        email: student.email || "",
        birthdate: student.birthdate || "",
        phoneNumber: student.phoneNumber || "",
        coins: student.coins || 0,
        avatar: student.avatar || "",
        newAvatarFile: null,
      });
    }
  }, [student, isOpen]);

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
    if (!token) {
      alert("Token not found.");
      return;
    }

    try {
      let avatarUrl = formData.avatar;

      if (formData.newAvatarFile) {
        const uploadFormData = new FormData();
        uploadFormData.append("avatar", formData.newAvatarFile);

        const uploadRes = await axiosInstance.post("/students/upload", uploadFormData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (uploadRes.data && uploadRes.data.url) {
          avatarUrl = uploadRes.data.url;
        } else {
          throw new Error("Avatar upload failed");
        }
      }

      const updatedData = {
        name: formData.name,
        age: formData.age,
        email: formData.email,
        birthdate: formData.birthdate,
        phoneNumber: formData.phoneNumber,
        coins: formData.coins,
        avatar: avatarUrl,
      };

      const updatedStudent = await axiosInstance.put(
        `/students/${student._id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onSave(updatedStudent.data);
      onClose();
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Birthdate</label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Coins</label>
            <input
              type="number"
              name="coins"
              value={formData.coins}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Image</label>
            <input
              type="file"
              name="avatar"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {formData.avatar && (
              <img
                src={formData.avatar}
                alt="Current Avatar"
                className="mt-2 h-20 rounded-md object-cover"
              />
            )}
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudentModal;
