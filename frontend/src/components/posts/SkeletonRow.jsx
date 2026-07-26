/* ==========================================================
   Skeleton Row
   ----------------------------------------------------------
   Displays placeholder rows while posts are loading.
========================================================== */

export default function SkeletonRow({ rows = 5 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <tr
          key={index}
          className="border-b border-slate-700 animate-pulse"
        >
          {/* Title */}
          <td className="px-6 py-4">
            <div className="h-4 w-40 rounded bg-slate-700"></div>
          </td>

          {/* Excerpt */}
          <td className="px-6 py-4">
            <div className="h-4 w-64 rounded bg-slate-700"></div>
          </td>

          {/* Status */}
          <td className="px-6 py-4">
            <div className="h-8 w-24 rounded-full bg-slate-700"></div>
          </td>

          {/* Date */}
          <td className="px-6 py-4">
            <div className="h-4 w-28 rounded bg-slate-700"></div>
          </td>

          {/* Actions */}
          <td className="px-6 py-4">
            <div className="flex gap-2">
              <div className="h-8 w-16 rounded bg-slate-700"></div>
              <div className="h-8 w-16 rounded bg-slate-700"></div>
              <div className="h-8 w-16 rounded bg-slate-700"></div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}