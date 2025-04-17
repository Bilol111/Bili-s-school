import React, { useState } from "react";
import axios from "axios";

const AddProjectForm = () => {
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("photo", photo);
    form.append("title", formData.title);
    form.append("link", formData.link);
    form.append("desc", formData.desc);

    try {
      const res = await axios.post("https://your-api-url.com/projects", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Project successfully created!");
    } catch (err) {
      console.error("Error uploading project:", err);
      alert("Failed to create project.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Photo</label>
        <input type="file" name="photo" onChange={handleFileChange} required />
      </div>

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Link (Email)</label>
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Create Project
      </button>
    </form>
  );
};

export default AddProjectForm;
