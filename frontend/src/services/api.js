import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000/api",
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}, (err) => Promise.reject(err));

axiosInstance.interceptors.response.use((res) => res, (err) => {
  // Optional: centralized error handling
  return Promise.reject(err);
});

export const api = {
  /* posts */
  fetchPosts: () => axiosInstance.get("/posts"),
  fetchPost: (id) => axiosInstance.get(`/posts/${id}`),
  createPost: (data) => axiosInstance.post("/posts", data),
  updatePost: (id, data) => axiosInstance.put(`/posts/${id}`, data),
  deletePost: (id) => axiosInstance.delete(`/posts/${id}`),

  /* auth */
  register: (data) => axiosInstance.post("/auth/register", data),
  login: (data) => axiosInstance.post("/auth/login", data),
};
