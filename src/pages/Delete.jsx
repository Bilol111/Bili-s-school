import axiosInstance from "../../axios";

const Delete = (id, setStudents, students) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    console.log("Authorization token not found.");
    return;
  }

  if (!id) {
    console.log("Invalid student ID.");
    return;
  }

  axiosInstance
    .delete(`https://spec-repo-1-ez1e.onrender.com/students/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      setStudents(students.filter((student) => student._id !== id));
    })
    .catch((error) => {
      console.error("Error during deletion:", error);
      console.log("Full delete error:", error.response?.data);
    });
};

export default Delete;
