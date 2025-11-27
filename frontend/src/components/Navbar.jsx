import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
      >
        MERN CMS
      </Link>

      <nav className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-purple-600 transition">
          Home
        </Link>
        <Link to="/login" className="hover:text-purple-600 transition">
          Login / Register
        </Link>
      </nav>
    </header>
  );
}
