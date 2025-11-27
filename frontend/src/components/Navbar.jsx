import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">
          MERN CMS
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link className="hover:text-indigo-600" to="/">Home</Link>
          
          {token && (
            <Link className="hover:text-indigo-600" to="/dashboard">
              Dashboard
            </Link>
          )}

          {!token ? (
            <Link
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow"
              to="/auth"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
