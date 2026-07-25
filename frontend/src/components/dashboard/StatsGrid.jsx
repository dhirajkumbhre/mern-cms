/*
|--------------------------------------------------------------------------
| StatsGrid
|--------------------------------------------------------------------------
|
| Fetches dashboard statistics from the backend and renders
| reusable StatCard components.
|
*/

import { useEffect, useState } from "react";
import {
  FileText,
  PenSquare,
  Eye,
} from "lucide-react";

import { api } from "../../services/api";
import StatCard from "./StatCard";

function StatsGrid() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    draftPosts: 0,
    publishedPosts: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const { data } = await api.dashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  const cards = [
    {
      title: "Total Posts",
      value: stats.totalPosts,
      icon: FileText,
      color: "text-emerald-400",
    },
    {
      title: "Draft Posts",
      value: stats.draftPosts,
      icon: PenSquare,
      color: "text-yellow-400",
    },
    {
      title: "Published",
      value: stats.publishedPosts,
      icon: Eye,
      color: "text-sky-400",
    },
  ];

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-36 animate-pulse rounded-2xl bg-slate-900"
          />
        ))}
      </div>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </section>
  );
}

export default StatsGrid;