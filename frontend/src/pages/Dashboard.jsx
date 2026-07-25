/*
|--------------------------------------------------------------------------
| Dashboard Page
|--------------------------------------------------------------------------
|
| Dashboard overview composed of reusable widgets.
|
*/

import StatsGrid from "../components/dashboard/StatsGrid";
import RecentPosts from "../components/dashboard/RecentPosts";
import QuickActions from "../components/dashboard/QuickActions";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Page Heading */}

      <section>

        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor your content, manage posts, and track platform activity.
        </p>

      </section>

      {/* Statistics */}

      <StatsGrid />

      {/* Dashboard Widgets */}

      <section className="grid gap-6 lg:grid-cols-3">

        <RecentPosts />

        <div className="space-y-6">

          <QuickActions />

          <ActivityFeed />

        </div>

      </section>

    </div>
  );
}

export default Dashboard;