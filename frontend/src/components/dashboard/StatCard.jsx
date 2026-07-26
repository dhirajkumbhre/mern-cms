/* ==========================================================
   Stat Card
   ----------------------------------------------------------
   Reusable dashboard card used to display a single metric.
========================================================== */

import PropTypes from "prop-types";

export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:border-slate-700">

      {/* Icon */}
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
      >
        {icon}
      </div>

      {/* Card Title */}
      <p className="text-sm text-slate-400">
        {title}
      </p>

      {/* Statistic Value */}
      <h2 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h2>

    </div>
  );
}

/* ==========================================================
   Props Validation
========================================================== */

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};