import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    navigate("/auth");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-white/40 dark:bg-black/30 border-b border-white/10 shadow-lg">
        <div className="container-max flex items-center justify-between gap-4 px-4 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 no-underline"
            onClick={() => setOpen(false)}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow">
              M
            </div>
            <div className="hidden sm:block text-lg font-semibold text-slate-900 dark:text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                MERN CMS
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-700 hover:text-indigo-600 transition">
              Home
            </Link>

            {token && (
              <Link to="/dashboard" className="text-slate-700 hover:text-indigo-600 transition">
                Dashboard
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {!token ? (
              <Link
                to="/auth"
                className="hidden sm:inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Login / Register
              </Link>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => navigate("/editor")}
                  className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg border border-indigo-100 hover:bg-indigo-100"
                >
                  New
                </button>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 md:hidden"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (slides down) */}
        <div className={`md:hidden ${open ? "block" : "hidden"} px-4 pb-4`}>
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-indigo-600">Home</Link>

            {token && (
              <>
                <Link to="/dashboard" onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-indigo-600">Dashboard</Link>
                <Link to="/editor" onClick={() => setOpen(false)} className="py-2 text-indigo-700">+ New Post</Link>
                <button onClick={() => { setOpen(false); handleLogout(); }} className="py-2 text-red-500 text-left">Logout</button>
              </>
            )}

            {!token && (
              <Link to="/auth" onClick={() => setOpen(false)} className="py-2 bg-indigo-600 text-white rounded-md px-3 inline-block text-center">Login / Register</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
