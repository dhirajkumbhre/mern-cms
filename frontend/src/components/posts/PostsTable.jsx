import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function PostsTable({ posts, loading, onDelete }) {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center text-slate-400">
        Loading posts...
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center text-slate-400">
        No posts found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-slate-800 bg-slate-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Title
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Created
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr
                key={post._id}
                className="border-b border-slate-800 transition hover:bg-slate-800/40"
              >
                {/* Title */}
                <td className="px-6 py-5">
                  <h3 className="font-semibold text-white">
                    {post.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm text-slate-400">
                    {post.excerpt || "No excerpt available."}
                  </p>
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <StatusBadge status={post.status} />
                </td>

                {/* Date */}
                <td className="px-6 py-5 text-sm text-slate-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => navigate(`/posts/${post._id}`)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-emerald-400"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => navigate(`/editor/${post._id}`)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-blue-400"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(post)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-red-400"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}