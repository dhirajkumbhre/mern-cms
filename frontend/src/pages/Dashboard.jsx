/*
|--------------------------------------------------------------------------
| Dashboard Page
|--------------------------------------------------------------------------
|
| This page displays an overview of the CMS.
| Data is currently mocked. Later it will come from the backend.
|
*/

import {
  FileText,
  Eye,
  FolderOpen,
  PenSquare,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Temporary Dashboard Data                                                   */
/* -------------------------------------------------------------------------- */

const stats = [
  {
    title: "Total Posts",
    value: 128,
    icon: FileText,
    color: "text-emerald-400",
  },
  {
    title: "Draft Posts",
    value: 17,
    icon: PenSquare,
    color: "text-yellow-400",
  },
  {
    title: "Categories",
    value: 12,
    icon: FolderOpen,
    color: "text-sky-400",
  },
  {
    title: "Views",
    value: "12.8K",
    icon: Eye,
    color: "text-violet-400",
  },
];

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

/* -------------------------------------------------------------------------- */
/* Reusable Statistics Card                                                   */
/* -------------------------------------------------------------------------- */

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-800
        bg-slate-900
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-500
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div
          className={`
            rounded-xl
            bg-slate-800
            p-3
            ${color}
          `}
        >
          <Icon size={26} />
        </div>

      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Dashboard                                                                  */
/* -------------------------------------------------------------------------- */

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome Section */}

      <section>

        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back. Here's an overview of your CMS today.
        </p>

      </section>

      {/* Statistics */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}

      </section>

      {/* Bottom Grid */}

      <section className="grid gap-6 lg:grid-cols-3">

        {/* Recent Posts */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 lg:col-span-2">

          <div className="flex items-center justify-between border-b border-slate-800 p-6">

            <h2 className="text-xl font-semibold text-white">
              Recent Posts
            </h2>

            <button className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300">

              View All

              <ArrowUpRight size={16} />

            </button>

          </div>

          <div className="divide-y divide-slate-800">

            {recentPosts.map((post) => (

              <div
                key={post.title}
                className="flex items-center justify-between p-5 hover:bg-slate-800/40 transition"
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
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-semibold

                    ${
                      post.status === "Published"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }
                  `}
                >
                  {post.status}
                </span>

              </div>

            ))}

          </div>

        </div>
                {/* Quick Actions */}

        <div className="space-y-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white">
              Quick Actions
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Frequently used CMS actions.
            </p>

            <div className="mt-6 space-y-3">

              <button
                className="
                  w-full rounded-xl
                  bg-emerald-500
                  px-4 py-3
                  font-medium text-white
                  transition
                  hover:bg-emerald-600
                "
              >
                + Create New Post
              </button>

              <button
                className="
                  w-full rounded-xl
                  border border-slate-700
                  bg-slate-800
                  px-4 py-3
                  text-white
                  transition
                  hover:border-emerald-500
                "
              >
                Manage Categories
              </button>

              <button
                className="
                  w-full rounded-xl
                  border border-slate-700
                  bg-slate-800
                  px-4 py-3
                  text-white
                  transition
                  hover:border-emerald-500
                "
              >
                View Analytics
              </button>

            </div>

          </div>

          {/* Activity Feed */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white">
              Recent Activity
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500"></div>

                <div>

                  <p className="text-white">
                    New post published
                  </p>

                  <p className="text-sm text-slate-400">
                    20 minutes ago
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="mt-1 h-3 w-3 rounded-full bg-yellow-500"></div>

                <div>

                  <p className="text-white">
                    Draft updated
                  </p>

                  <p className="text-sm text-slate-400">
                    Today
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="mt-1 h-3 w-3 rounded-full bg-sky-500"></div>

                <div>

                  <p className="text-white">
                    Category added
                  </p>

                  <p className="text-sm text-slate-400">
                    Yesterday
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}