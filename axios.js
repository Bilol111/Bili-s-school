import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://spec-repo-1-ez1e.onrender.com", 
  headers: {
    "Content-Type": "application/json",
    
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authoken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => Promise.reject(error)
);


export default axiosInstance;

