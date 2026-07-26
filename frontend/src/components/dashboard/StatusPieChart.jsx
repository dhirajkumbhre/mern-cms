/* ==========================================================
   Status Pie Chart
   ----------------------------------------------------------
   Displays the ratio of Published and Draft posts.
========================================================== */

import PropTypes from "prop-types";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#10b981", "#facc15"];

export default function StatusPieChart({
  published,
  drafts,
}) {
  const data = [
    {
      name: "Published",
      value: published,
    },
    {
      name: "Draft",
      value: drafts,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      {/* Chart Heading */}
      <h2 className="mb-6 text-xl font-semibold text-white">
        Post Status
      </h2>

      <div className="h-[340px]">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
   data={data}
  dataKey="value"
  nameKey="name"
  innerRadius={55}
  outerRadius={110}
  paddingAngle={5}
  label
>




              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

StatusPieChart.propTypes = {
  published: PropTypes.number.isRequired,
  drafts: PropTypes.number.isRequired,
};