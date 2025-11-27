import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/20 dark:bg-black/20 border-b border-white/30 dark:border-white/10 shadow-lg z-50 fade-enter">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent tracking-wide hover:opacity-80 transition"
        >
          MERN CMS
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-indigo-500 transition"
          >
            Home
          </Link>

          <Link
            to="/auth"
            className="px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Login / Register
          </Link>
        </div>

      </div>
    </nav>
  );
}
