import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.fetchPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="pt-28 max-w-6xl mx-auto px-5 fade-enter">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold gradient-text">Your Posts</h1>

        <Link
          to="/editor"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow transition"
        >
          + New Post
        </Link>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {posts.map((post) => (
          <Link
            key={post._id}
            to={`/post/${post._id}`}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{post.title}</h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
              {post.content}
            </p>

            <div className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium">
              Read more →
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
