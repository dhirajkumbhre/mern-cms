/* ==========================================================
   Posts Table
   ----------------------------------------------------------
   Displays all blog posts in a responsive table.

   Features:
   - Loading skeleton
   - Empty state
   - Featured Image
   - View post
   - Edit post
   - Delete post
========================================================== */

import EmptyState from "./EmptyState";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import StatusBadge from "./StatusBadge";
import SkeletonRow from "./SkeletonRow";

export default function PostsTable({
  posts,
  loading,
  onDelete,
}) {
  const navigate = useNavigate();

  /* ==========================================================
     Loading State
  ========================================================== */

  if (loading) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="border-b border-slate-800 bg-slate-950">
              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                  Image
                </th>

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
              <SkeletonRow rows={5} />
            </tbody>

          </table>
        </div>
      </div>
    );
  }

  /* ==========================================================
     Empty State
  ========================================================== */

  if (!posts.length) {
    return <EmptyState />;
  }

  /* ==========================================================
     Posts Table
  ========================================================== */

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full">

          {/* ======================================================
              Table Header
          ======================================================= */}

          <thead className="border-b border-slate-800 bg-slate-950">
            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Image
              </th>

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

          {/* ======================================================
              Posts List
          ======================================================= */}

          <tbody>

            {posts.map((post) => (
              <tr
                key={post._id}
                className="border-b border-slate-800 transition hover:bg-slate-800/40"
              >

                {/* -------------------------------------------------
                    Featured Image
                -------------------------------------------------- */}

                <td className="px-6 py-5">
                  <img
                    src={
                      post.imageUrl ||
                      "https://placehold.co/80x80/0f172a/94a3b8?text=No+Image"
                    }
                    alt={post.title}
                    className="h-16 w-16 rounded-lg border border-slate-700 object-cover"
                  />
                </td>

                {/* -------------------------------------------------
                    Post Title & Excerpt
                -------------------------------------------------- */}

                <td className="px-6 py-5 align-top">

                  <h3 className="font-semibold text-white">
                    {post.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm text-slate-400">
                    {post.excerpt || "No excerpt available."}
                  </p>

                </td>

                {/* -------------------------------------------------
                    Post Status
                -------------------------------------------------- */}

                <td className="px-6 py-5">
                  <StatusBadge status={post.status} />
                </td>

                {/* -------------------------------------------------
                    Post Creation Date
                -------------------------------------------------- */}

                <td className="px-6 py-5 text-sm text-slate-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>

                {/* -------------------------------------------------
                    Action Buttons
                -------------------------------------------------- */}

                <td className="px-6 py-5">

                  <div className="flex items-center justify-center gap-2">

                    {/* View */}

                    <button
                      onClick={() =>
                        navigate(`/posts/${post._id}`)
                      }
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-emerald-400"
                    >
                      <Eye size={18} />
                    </button>

                    {/* Edit */}

                    <button
                      onClick={() =>
                        navigate(`/editor/${post._id}`)
                      }
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-blue-400"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}

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