/*
|--------------------------------------------------------------------------
| RecentPosts
|--------------------------------------------------------------------------
|
| Temporary data is used for now.
| Later this component will fetch the latest posts from the backend.
|
*/

import { ArrowUpRight, Clock3 } from "lucide-react";

const recentPosts = [
  {
    title: "Getting Started with React",
    status: "Published",
    date: "2 hours ago",
  },
  {
    title: "Understanding Express Middleware",
    status: "Draft",
    date: "Yesterday",
  },
  {
    title: "JWT Authentication Guide",
    status: "Published",
    date: "3 days ago",
  },
  {
    title: "Tailwind CSS Tips",
    status: "Published",
    date: "Last week",
  },
];

function RecentPosts() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 lg:col-span-2">

      <div className="flex items-center justify-between border-b border-slate-800 p-6">

        <h2 className="text-xl font-semibold text-white">
          Recent Posts
        </h2>

        <button className="flex items-center gap-2 text-sm text-emerald-400 transition hover:text-emerald-300">
          View All
          <ArrowUpRight size={16} />
        </button>

      </div>

      <div className="divide-y divide-slate-800">

        {recentPosts.map((post) => (

          <div
            key={post.title}
            className="flex items-center justify-between p-5 transition hover:bg-slate-800/40"
          >

            <div>

              <h3 className="font-medium text-white">
                {post.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">

                <Clock3 size={14} />

                {post.date}

              </div>

            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                post.status === "Published"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {post.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentPosts;