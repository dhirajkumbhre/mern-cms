import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PostEditor from "./pages/PostEditor";
import PostView from "./pages/PostView";
import Auth from "./pages/Auth";
import ProtectedRoute from "./ProtectedRoute"; // keep your ProtectedRoute

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16"> {/* offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/post/:id" element={<PostView />} />
          <Route path="/editor" element={<ProtectedRoute><PostEditor /></ProtectedRoute>} />
          <Route path="/editor/:id" element={<ProtectedRoute><PostEditor /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
