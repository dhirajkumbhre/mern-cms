import PropTypes from "prop-types";

export default function StatusBadge({ status }) {
  const normalizedStatus = status?.toLowerCase();

  const styles = {
    published:
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
    draft: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        styles[normalizedStatus] ||
        "bg-slate-700 text-slate-300 border border-slate-600"
      }`}
    >
      {status || "Unknown"}
    </span>
  );
}

StatusBadge.propTypes = {
  status: PropTypes.string,
};