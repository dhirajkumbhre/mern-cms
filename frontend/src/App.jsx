
import Posts from "./pages/Posts";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import PostEditor from "./pages/PostEditor";
import PostView from "./pages/PostView";

import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "./components/layout/DashboardLayout";

export default function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/post/:id" element={<PostView />} />

      {/* Protected Dashboard Routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/editor" element={<PostEditor />} />
        <Route path="/editor/:id" element={<PostEditor />} />
      </Route>

    </Routes>
  );
}