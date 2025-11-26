import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
const navigate = useNavigate();
const token = localStorage.getItem("token");


return (
<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm dark:bg-gray-800/80">
<div className="max-w-6xl mx-auto flex justify-between items-center p-4">
<Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
MERN CMS
</Link>


<div className="flex gap-6 text-lg">
<Link to="/" className="hover:text-indigo-600">Home</Link>
{token && <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>}


{!token ? (
<button
onClick={() => navigate("/auth")}
className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
>
Login
</button>
) : (
<button
onClick={() => {
localStorage.removeItem("token");
navigate("/auth");
}}
className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
>
Logout
</button>
)}
</div>
</div>
</nav>
);
}
