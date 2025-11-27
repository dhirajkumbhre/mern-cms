import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PostEditor from "./pages/PostEditor";
import PostView from "./pages/PostView";
import Auth from "./pages/Auth";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <div className="pt-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/editor" element={<ProtectedRoute><PostEditor /></ProtectedRoute>} />
        <Route path="/editor/:id" element={<ProtectedRoute><PostEditor /></ProtectedRoute>} />
        <Route path="/post/:id" element={<PostView />} />
      </Routes>
    </div>
  );
}

