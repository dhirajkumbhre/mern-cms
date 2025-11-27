import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.fetchPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto pt-28 px-6">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Link
          to="/editor"
          className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-lg"
        >
          + New Post
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            to={`/post/${post._id}`}
            key={post._id}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 line-clamp-3">{post.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
