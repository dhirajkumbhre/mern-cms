import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar(){
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(()=> setToken(localStorage.getItem("token")), []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    navigate("/auth");
  };

  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-white/60 backdrop-blur-sm border-b border-white/10">
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow">
            M
          </div>
          <div className="text-lg font-semibold text-slate-800">MERN CMS</div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="text-slate-700 hover:text-indigo-600">Home</Link>

          { token ? (
            <>
              <Link to="/dashboard" className="text-slate-700 hover:text-indigo-600">Dashboard</Link>
              <Link to="/editor" className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 ml-2 shadow cta">New post</Link>
              <button onClick={handleLogout} className="ml-2 px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-600">Logout</button>
            </>
          ) : (
            <Link to="/auth" className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 ml-2 shadow">Login / Register</Link>
          ) }
        </nav>
      </div>
    </header>
  );
}
