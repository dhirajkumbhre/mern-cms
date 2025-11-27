import { useEffect, useState } from "react";
import { api } from "../services/api";
import Postcard from "../components/Postcard";

export default function Home(){
  const [posts, setPosts] = useState([]);

  useEffect(()=> { api.fetchPosts().then(r => setPosts(r.data || [])); }, []);

  return (
    <div className="page-enter">
      <section className="pt-28 pb-20 bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute -left-20 -top-10 w-80 h-80 bg-white/6 rounded-full blur-3xl float-slow"></div>
        <div className="container-max text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold gradient-text leading-tight mb-4">A beautiful place to write, publish and share</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">Premium UI, fast experience and polished animations. Create content that stands out.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="/dashboard" className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow cta">Go to Dashboard</a>
            <a href="/auth" className="px-5 py-3 rounded-xl border border-white/30 text-white">Get started — it's free</a>
          </div>
        </div>
      </section>

      <main className="container-max py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        { posts.length === 0 ? (
          <div className="md:col-span-3 text-center text-slate-500">No posts yet. Create one from the dashboard.</div>
        ) : (
          posts.map((p, i) => (
            <div key={p._id} style={{ animationDelay: `${i*80}ms` }}>
              <Postcard post={p} />
            </div>
          ))
        )}
      </main>
    </div>
  );
}
