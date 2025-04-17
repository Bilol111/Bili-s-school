import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../axios";

const AddStudentModal = ({ isOpen, onClose, student }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (student) {
      setValue("name", student.name);
      setValue("age", student.age);
      setValue("email", student.email);
      setValue("birthdate", student.birthdate?.slice(0, 10)); // ensure proper format
      setValue("phoneNumber", student.phoneNumber);
      setValue("coins", student.coins || 0);
    } else {
      reset(); // clear form on "Add New"
    }
  }, [student, setValue, reset]);

  const onSubmit = async (data) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.log("Authentication token is missing!");
      return;
    }

    try {
      let avatarUrl = student?.avatar || ""; // fallback to existing avatar

      if (data.avatar && data.avatar[0]) {
        const formData = new FormData();
        formData.append("avatar", data.avatar[0]);

        const uploadRes = await axiosInstance.post("/students/upload", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (uploadRes.data?.url) {
          avatarUrl = uploadRes.data.url;
        } else {
          throw new Error("Avatar upload failed");
        }
      }

      const studentData = {
        name: data.name,
        age: data.age,
        email: data.email,
        birthdate: data.birthdate,
        phoneNumber: data.phoneNumber,
        avatar: avatarUrl,
        coins: data.coins || 0,
      };

      if (student) {
        // Editing mode
        await axiosInstance.put(`/students/${student._id}`, studentData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Student updated successfully!");
      } else {
        // Adding mode
        await axiosInstance.post("/students", studentData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Student added successfully!");
      }

      reset();
      onClose();
    } catch (err) {
      console.error("Submission error:", err);
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
          {student ? "Edit Student" : "Add New Student"}
        </h2>

        <div className="flex flex-col space-y-4">
  <input
    {...register("name", { required: true })}
    placeholder="Name"
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
  />
  <input
    {...register("age", { required: true })}
    type="number"
    placeholder="Age"
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
  />
  <input
    {...register("email", { required: true })}
    type="email"
    placeholder="Email"
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
  />
  <input
    {...register("birthdate", { required: true })}
    type="date"
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
  />
  <input
    {...register("phoneNumber", { required: true })}
    placeholder="Phone Number"
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
  />
  <input
    {...register("coins", { required: true })}
    type="number"
    placeholder="Coins"
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
  />
  <input
    {...register("avatar")}
    type="file"
    className="w-full px-4 py-2 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
  />

  <div className="mt-6 flex justify-between items-center gap-4">
    <button
      type="button"
      onClick={onClose}
      className="w-full bg-gray-500 text-white py-3 rounded-xl hover:bg-gray-600 transition duration-300"
    >
      Cancel
    </button>
    <input
      type="submit"
      value={student ? "Update" : "Submit"}
      className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-300 cursor-pointer"
    />
  </div>
</div>

      </form>
    </div>
  );
};

export default AddStudentModal;
