import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axios";

const Register = () => {
  const [namee, setNamee] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("https://spec-repo-1-ez1e.onrender.com/auth/register", {
        username: namee, // To'g'ri nomga o'zgartirildi
        email,
        password,
      });

      alert(data.message || "Ro'yxatdan muvaffaqiyatli o'tdingiz ✅");
      setNamee(""); // To'g'ri yozildi
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Ro'yxatdan o'tishda xatolik yuz berdi"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={namee}
          onChange={(e) => setNamee(e.target.value)}
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-60"
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;