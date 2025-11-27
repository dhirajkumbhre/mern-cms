import { Link } from "react-router-dom";

export default function Postcard({ post }){
  return (
    <Link to={`/post/${post._id}`} className="block p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 rise-up">
      <h3 className="text-xl font-semibold mb-2 text-slate-900">{post.title}</h3>
      <p className="text-slate-600 line-clamp-3 mb-4">{post.content}</p>
      <div className="flex items-center justify-between">
        <div className="text-indigo-600 font-medium">Read more →</div>
        <div className="text-sm text-slate-400">•</div>
      </div>
    </Link>
  );
}
