import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard(){
  const [posts, setPosts] = useState([]);

  useEffect(()=> { api.fetchPosts().then(r => setPosts(r.data || [])); }, []);

  return (
    <div className="page-enter container-max pt-28 pb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="flex items-center gap-3">
          <Link to="/editor" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow cta">New Post</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <div key={p._id} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-slate-600 line-clamp-3 mb-4">{p.content}</p>
            <div className="flex items-center gap-3">
              <Link to={`/post/${p._id}`} className="text-indigo-600">View</Link>
              <Link to={`/editor/${p._id}`} className="text-slate-700">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
