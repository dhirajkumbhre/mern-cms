/*
|--------------------------------------------------------------------------
| StatsGrid
|--------------------------------------------------------------------------
|
| Displays dashboard statistics using reusable StatCard components.
| Data is received from the parent Dashboard component.
|
*/

import PropTypes from "prop-types";

import {
  FileText,
  PenSquare,
  Eye,
} from "lucide-react";

import StatCard from "./StatCard";

function StatsGrid({ stats, loading }) {
  /* ==========================================================
     Dashboard Cards
  ========================================================== */

  const cards = [
    {
      title: "Total Posts",
      value: stats.totalPosts,
      icon: FileText,
      color: "bg-emerald-500/15 text-emerald-400",
    },
    {
      title: "Draft Posts",
      value: stats.draftPosts,
      icon: PenSquare,
      color: "bg-yellow-500/15 text-yellow-400",
    },
    {
      title: "Published",
      value: stats.publishedPosts,
      icon: Eye,
      color: "bg-sky-500/15 text-sky-400",
    },
  ];

  /* ==========================================================
     Loading Skeleton
  ========================================================== */

  if (loading) {
    return (
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-36 animate-pulse rounded-2xl border border-slate-800 bg-slate-900"
          />
        ))}
      </section>
    );
  }

  /* ==========================================================
     Dashboard UI
  ========================================================== */

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={<card.icon size={24} />}
          color={card.color}
        />
      ))}
    </section>
  );
}

StatsGrid.propTypes = {
  stats: PropTypes.shape({
    totalPosts: PropTypes.number.isRequired,
    draftPosts: PropTypes.number.isRequired,
    publishedPosts: PropTypes.number.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default StatsGrid;