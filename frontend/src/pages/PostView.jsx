import { useEffect, useState } from "react";
import { ArrowLeft, Pencil } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../services/api";
import StatusBadge from "../components/posts/StatusBadge";

export default function PostView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [id]);

  async function loadPost() {
    try {
      setLoading(true);

      const { data } = await api.fetchPost(id);

      setPost(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-slate-400 text-lg">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white">
          Post Not Found
        </h2>

        <button
          onClick={() => navigate("/posts")}
          className="mt-6 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600"
        >
          Back to Posts
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <button
          onClick={() => navigate("/posts")}
          className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 hover:bg-slate-800"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={() => navigate(`/editor/${post._id}`)}
          className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2 font-semibold text-white hover:bg-emerald-600"
        >
          <Pencil size={18} />
          Edit Post
        </button>

      </div>

      {/* Card */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-xl">

        <h1 className="text-4xl font-bold text-white">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-4">

          <StatusBadge status={post.status} />

          <span className="text-slate-400">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>

        </div>

        {post.excerpt && (
          <div className="mt-10">

            <h3 className="mb-3 text-lg font-semibold text-white">
              Excerpt
            </h3>

            <p className="leading-8 text-slate-300">
              {post.excerpt}
            </p>

          </div>
        )}

        <div className="mt-10">

          <h3 className="mb-3 text-lg font-semibold text-white">
            Content
          </h3>

          <div className="whitespace-pre-wrap leading-8 text-slate-300">
            {post.content}
          </div>

        </div>

      </div>

    </div>
  );
}