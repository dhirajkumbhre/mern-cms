import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../services/api";

export default function PostView(){
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(()=> { if(id) api.fetchPost(id).then(r=>setPost(r.data)).catch(()=>{}); }, [id]);

  if(!post) return <div className="pt-28 container-max">Loading...</div>;

  return (
    <div className="page-enter container-max pt-28 pb-20 max-w-3xl">
      <Link to="/dashboard" className="text-indigo-600 mb-4 inline-block">← Back to dashboard</Link>
      <article className="bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-slate-600 whitespace-pre-line">{post.content}</div>
      </article>
    </div>
  );
}
