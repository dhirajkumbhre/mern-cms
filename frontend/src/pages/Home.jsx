import { useEffect, useState } from "react";
import { api } from "../services/api";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.fetchPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="page-enter">

      {/* HERO SECTION */}
      <div className="pt-32 pb-24 bg-gradient-to-br from-indigo-600 to-purple-600 text-white relative overflow-hidden">

        {/* Floating decorative shapes */}
        <div className="absolute top-10 right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl float"></div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold gradient-text mb-6">
            Your Creative CMS
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Create, edit and manage posts with ease.  
            Experience a modern, smooth and premium UI.
          </p>

          <a
            href="/dashboard"
            className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-gray-200 hover-glow shadow-lg"
          >
            Go to Dashboard
          </a>
        </div>
      </div>

      {/* POSTS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.length === 0 && (
            <p className="text-gray-500">No posts yet. Create one from dashboard.</p>
          )}

          {posts.map((post, idx) => (
            <div 
              key={post._id}
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
