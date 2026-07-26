/*
|--------------------------------------------------------------------------
| Dashboard Page
|--------------------------------------------------------------------------
|
| Dashboard overview composed of reusable widgets.
|
*/

import StatsGrid from "../components/dashboard/StatsGrid";
import PostsChart from "../components/dashboard/PostsChart";
import StatusPieChart from "../components/dashboard/StatusPieChart";
import RecentPosts from "../components/dashboard/RecentPosts";
import QuickActions from "../components/dashboard/QuickActions";
import ActivityFeed from "../components/dashboard/ActivityFeed";

import { monthlyPosts } from "../data/chartData";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { api } from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
  totalPosts: 0,
  draftPosts: 0,
  publishedPosts: 0,
});

const [loading, setLoading] = useState(true);
useEffect(() => {
  fetchDashboardStats();
}, []);

async function fetchDashboardStats() {
  try {
    setLoading(true);

    const { data } = await api.dashboardStats();

    setStats(data);
  } catch (error) {
    console.error(error);

    toast.error("Failed to load dashboard statistics");
  } finally {
    setLoading(false);
  }
}
  return (
    <div className="space-y-8">

      {/* ==========================================================
          Page Heading
      ========================================================== */}

      <section>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor your content, manage posts, and track platform activity.
        </p>
      </section>

      {/* ==========================================================
          Statistics Cards
      ========================================================== */}

      <StatsGrid
  stats={stats}
  loading={loading}
/>

      {/* ==========================================================
          Monthly Posts Chart
      ========================================================== */}

      {/* ==========================================================
    Dashboard Analytics
========================================================== */}

<section className="grid gap-6 lg:grid-cols-2">

  <PostsChart data={monthlyPosts} />

  <StatusPieChart
    published={stats.publishedPosts}
    drafts={stats.draftPosts}
  />

</section>


      {/* ==========================================================
          Post Status Pie Chart
      ========================================================== */}

<StatusPieChart
  published={stats.publishedPosts}
  drafts={stats.draftPosts}
/>

      {/* ==========================================================
          Dashboard Widgets
      ========================================================== */}

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