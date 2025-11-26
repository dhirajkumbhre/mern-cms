import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

// First create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});

// ⭐ Add token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API functions
export const api = {
  login: (data) => axiosInstance.post("/auth/login", data),
  register: (data) => axiosInstance.post("/auth/register", data),
  me: () => axiosInstance.get("/auth/me"),

  fetchPosts: () => axiosInstance.get("/posts"),
  fetchPost: (id) => axiosInstance.get(`/posts/${id}`),
  createPost: (data) => axiosInstance.post("/posts", data),
  updatePost: (id, data) => axiosInstance.put(`/posts/${id}`, data),
  deletePost: (id) => axiosInstance.delete(`/posts/${id}`)
};

export default axiosInstance;
