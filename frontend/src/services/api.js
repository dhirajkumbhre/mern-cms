import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE ||
    "https://mern-cms-backend-z67v.onrender.com/api",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ==========================================================
   Request Interceptor
========================================================== */

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ==========================================================
   Response Interceptor
========================================================== */

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

/* ==========================================================
   API Methods
========================================================== */

export const api = {
  /* ---------------- Posts ---------------- */

  fetchPosts: () => axiosInstance.get("/posts"),

  fetchPost: (id) => axiosInstance.get(`/posts/${id}`),

  createPost: (data) => axiosInstance.post("/posts", data),

  updatePost: (id, data) =>
    axiosInstance.put(`/posts/${id}`, data),

  deletePost: (id) =>
    axiosInstance.delete(`/posts/${id}`),


    uploadImage: (formData) =>
    axiosInstance.post("/upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

  /* ---------------- Dashboard ---------------- */

  dashboardStats: () =>
    axiosInstance.get("/posts/dashboard/stats"),

  monthlyPosts: () =>
    axiosInstance.get("/posts/dashboard/monthly-posts"),

  /* ---------------- Authentication ---------------- */

  register: (data) =>
    axiosInstance.post("/auth/register", data),

  login: (data) =>
    axiosInstance.post("/auth/login", data),
};