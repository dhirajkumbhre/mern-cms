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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <PostEditor />
            </ProtectedRoute>
          }
        />

        <Route path="/post/:id" element={<PostView />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
