import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function PostEditor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Load existing post if editing
  useEffect(() => {
    if (id) {
      api.fetchPost(id).then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty");
      return;
    }

    try {
      if (id) {
        // Update existing post
        await api.updatePost(id, { title, content });
      } else {
        // Create new post
        await api.createPost({ title, content });
      }

      navigate("/dashboard");
    } catch (err) {
      console.log("Error saving post:", err);
      alert("Failed to save the post");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        {id ? "Edit Post" : "Create New Post"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Enter post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <textarea
            className="w-full p-3 border rounded-lg h-60"
            placeholder="Write your post content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          {id ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
}
