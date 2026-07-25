import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function PostEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const createPost = async () => {
    await api.createPost({ title, content });
    navigate("/dashboard");
  };

  return (
    <div className="pt-28 max-w-3xl mx-auto px-5 fade-enter">

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
        
        <h1 className="text-3xl font-bold gradient-text mb-6">
          Create New Post
        </h1>

        <input
          className="w-full p-3 text-lg border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-900"
          placeholder="Post title..."
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="10"
          className="w-full mt-4 p-3 text-lg border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:bg-gray-900"
          placeholder="Write your content here..."
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={createPost}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl w-full hover:bg-indigo-700 shadow transition"
        >
          Publish Post
        </button>

      </div>

    </div>
  );
}
