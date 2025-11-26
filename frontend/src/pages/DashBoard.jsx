import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    api.fetchPosts().then((res) => setPosts(res.data));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <a
          href="/editor"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
        >
          + New Post
        </a>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="border p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {post.title}
            </h2>

            <div className="mt-4 flex gap-4">
              <a
                href={`/post/${post._id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </a>

              <a
                href={`/editor?id=${post._id}`}
                className="text-green-600 hover:underline"
              >
                Edit
              </a>

              <button
                onClick={async () => {
                  await api.deletePost(post._id);
                  loadPosts();
                }}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
