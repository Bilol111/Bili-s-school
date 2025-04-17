import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../axios";

const AddTeacherModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [imgUrl, setImgUrl] = useState("");

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("Authentication token is missing!");
        return;
      }

      const res = await axiosInstance.post("/teachers/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res && res.data && res.data.url) {
        console.log(res.data.url);
        return res.data.url;
      } else {
        throw new Error("Invalid response format.");
      }
    } catch (error) {
      console.error("Image upload error:", error.response || error);
      console.log("Image upload failed.");
    }
  };

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("Authentication token is missing!");
        return;
      }
  
      let avatarUrl = ""; // сюда будет url после загрузки
  
      // 1. Если файл выбран — сначала загружаем изображение
      if (data.avatar && data.avatar[0]) {
        const formData = new FormData();
        formData.append("avatar", data.avatar[0]);
  
        const uploadRes = await axiosInstance.post("/teachers/upload", formData, {
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
  
      const teacherData = {
        name: data.name,
        avatar: avatarUrl,
        desc:data.desc,
        profession:data.profession
      };
  
      const response = await axiosInstance.post("/teachers", teacherData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log("Student added:", response.data);
      reset();
      onClose();
      alert("Teacher added successfully!");
    } catch (err) {
      console.error("Error during student submission:", err);
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-2xl space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Add New Teacher
        </h2>

        <div className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ism"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="avatar"
              className="block text-gray-700 font-medium mb-1"
            >
              Profile Image
            </label>
            <input
              id="avatar"
              type="file"
              {...register("avatar")}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="text"
              className="block text-gray-700 font-medium mb-1"
            >
              Desc
            </label>
            <input
              id="desc"
              type="desc"
              placeholder="Desc"
              {...register("desc", { required: true })}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="profession"
              className="block text-gray-700 font-medium mb-1"
            >
              Profession
            </label>
            <input
              id="profession"
              type="text"
              placeholder="Profession"
              {...register("profession", { required: true })}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

        

          <div className="mt-6 flex justify-between items-center gap-5">
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-gray-500 text-white py-3 rounded-xl hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
            <input
              type="submit"
              value="Yuborish"
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-300"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTeacherModal;
