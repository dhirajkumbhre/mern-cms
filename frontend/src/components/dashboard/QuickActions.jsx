/*
|--------------------------------------------------------------------------
| QuickActions
|--------------------------------------------------------------------------
|
| Common actions for content management.
| These buttons will be connected to routes later.
|
*/

import { useNavigate } from "react-router-dom";
import { Plus, FolderOpen, BarChart3 } from "lucide-react";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Frequently used CMS actions.
      </p>

      <div className="mt-6 space-y-3">

        <button
          onClick={() => navigate("/editor")}
          className="
            flex w-full items-center justify-center gap-2
            rounded-xl
            bg-emerald-500
            px-4 py-3
            font-medium
            text-white
            transition
            hover:bg-emerald-600
          "
        >
          <Plus size={18} />
          Create New Post
        </button>


        <button
  onClick={() => alert("Coming Soon")}
  className="
    flex w-full items-center justify-center gap-2
    rounded-xl
    border border-slate-700
    bg-slate-800
    px-4 py-3
    text-white
    transition
    hover:border-emerald-500
  "
>
  <FolderOpen size={18} />
  Manage Categories
</button>


<button
  onClick={() => alert("Coming Soon")}
  className="
    flex w-full items-center justify-center gap-2
    rounded-xl
    border border-slate-700
    bg-slate-800
    px-4 py-3
    text-white
    transition
    hover:border-emerald-500
  "
>
  <BarChart3 size={18} />
  View Analytics
</button>


      </div>

    </div>
  );
}

export default QuickActions;