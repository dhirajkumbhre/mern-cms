import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  withCredentials: false,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const api = {
  fetchPosts: () => axiosInstance.get("/posts"),
  fetchPost: (id) => axiosInstance.get(`/posts/${id}`),
  createPost: (data) => axiosInstance.post("/posts", data),
  updatePost: (id, data) => axiosInstance.put(`/posts/${id}`, data),
  deletePost: (id) => axiosInstance.delete(`/posts/${id}`),

  register: (data) => axiosInstance.post("/auth/register", data),
  login: (data) => axiosInstance.post("/auth/login", data),
};
