/*
|--------------------------------------------------------------------------
| Dashboard Page
|--------------------------------------------------------------------------
|
| Dashboard overview composed of reusable widgets.
|
*/

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import StatsGrid from "../components/dashboard/StatsGrid";
import PostsChart from "../components/dashboard/PostsChart";
import StatusPieChart from "../components/dashboard/StatusPieChart";
import RecentPosts from "../components/dashboard/RecentPosts";
import QuickActions from "../components/dashboard/QuickActions";
import ActivityFeed from "../components/dashboard/ActivityFeed";

import { api } from "../services/api";

function Dashboard() {
  /* ==========================================================
     Dashboard State
  ========================================================== */

  const [stats, setStats] = useState({
    totalPosts: 0,
    draftPosts: 0,
    publishedPosts: 0,
  });

  const [monthlyPosts, setMonthlyPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  /* ==========================================================
     Fetch Dashboard Data
  ========================================================== */

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    try {
      setLoading(true);

      const [statsResponse, monthlyResponse] = await Promise.all([
        api.dashboardStats(),
        api.monthlyPosts(),
      ]);

      setStats(statsResponse.data);
      setMonthlyPosts(monthlyResponse.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  }

  /* ==========================================================
     Dashboard UI
  ========================================================== */

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

      <StatsGrid
        stats={stats}
        loading={loading}
      />

      {/* Analytics */}

      <section className="grid gap-6 lg:grid-cols-2">

        <PostsChart data={monthlyPosts} />

        <StatusPieChart
          published={stats.publishedPosts}
          drafts={stats.draftPosts}
        />

      </section>

      {/* Widgets */}

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