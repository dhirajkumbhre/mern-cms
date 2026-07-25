import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from "lucide-react";

export default function Auth() {
  // Switch between Login and Register forms
  const [isLogin, setIsLogin] = useState(true);

  // Store all form values in one place
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Show loading while waiting for API response
  const [loading, setLoading] = useState(false);

  // Display validation or server errors
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Update the matching field whenever the user types
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Basic client-side validation before calling the backend
  const validateForm = () => {
    if (!isLogin && formData.name.trim().length < 3) {
      setError("Name should contain at least 3 characters.");
      return false;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return false;
    }

    return true;
  };

  // Handle both Login and Register with one function
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      let response;

      if (isLogin) {
        // Login only needs email and password
        response = await api.login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        // Register needs name, email and password
        response = await api.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      // Save JWT so protected routes can use it
      localStorage.setItem("token", response.data.token);

      // Redirect after successful authentication
      navigate("/dashboard");
    } catch (err) {
      // Show backend error if available
      setError(
        err.response?.data?.message ||
          "Authentication failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* ===========================
          Left Side
          Branding Section
      ============================ */}

      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-900 text-white relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-24 -left-24"></div>
        <div className="absolute w-96 h-96 bg-white/5 rounded-full bottom-[-120px] right-[-120px]"></div>

        <div className="relative z-10 flex flex-col justify-center px-16">

          <h1 className="text-6xl font-black leading-tight">
            MERN
            <br />
            CMS
          </h1>

          <p className="mt-8 text-lg text-emerald-100 leading-8">
            A modern content management system built with React,
            Node.js, Express and MongoDB.
          </p>

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-300"></div>
              <p>Secure JWT Authentication</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-300"></div>
              <p>Create and manage blog posts</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-300"></div>
              <p>Responsive dashboard experience</p>
            </div>

          </div>

        </div>
      </div>

      {/* ===========================
          Right Side
          Authentication Form
      ============================ */}

      <div className="flex-1 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-white">

              {isLogin
                ? "Welcome Back 👋"
                : "Create Your Account"}

            </h2>

            <p className="text-slate-400 mt-2">

              {isLogin
                ? "Sign in to continue."
                : "Start managing your content today."}

            </p>

          </div>

          {/* Display validation or API errors */}
          {error && (
            <div className="mt-6 rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-8"
          >

            {/* Name field only appears while registering */}
            {!isLogin && (
              <div className="relative">

                <User
                  size={18}
                  className="absolute left-4 top-4 text-slate-500"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />

              </div>
            )}

            {/* Continue in Part 2 */}

                        {/* Email */}
            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-4 text-slate-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

            </div>

            {/* Password */}
            <div className="relative">

              <Lock
                size={18}
                className="absolute left-4 top-4 text-slate-500"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-12 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              {/* Show or hide password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-slate-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 rounded-xl py-3 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Please wait...
                </>
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                </>
              )}
            </button>

          </form>

          {/* Switch between Login and Register */}
          <div className="mt-8 text-center">

            <p className="text-slate-400">

              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}

            </p>

            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");

                // Clear the form whenever the mode changes.
                setFormData({
                  name: "",
                  email: "",
                  password: "",
                });
              }}
              className="mt-3 text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              {isLogin
                ? "Create a new account"
                : "Sign in instead"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}