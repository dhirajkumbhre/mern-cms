/* ==========================================================
   Empty State
   ----------------------------------------------------------
   Displayed when no posts are available or no posts match
   the current search/filter.
========================================================== */

import { FileText, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmptyState() {
  // Navigate to the Create Post page
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center">

      {/* Empty State Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">
        <FileText size={40} className="text-slate-400" />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-white">
        No Posts Found
      </h2>

      {/* Description */}
      <p className="mt-3 text-slate-400">
        There are no posts matching your current search or filter.
      </p>

      {/* Create Post Button */}
      <button
        onClick={() => navigate("/editor")}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
      >
        <Plus size={18} />
        Create New Post
      </button>

    </div>
  );
}