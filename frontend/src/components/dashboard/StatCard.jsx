/*
|--------------------------------------------------------------------------
| StatCard
|--------------------------------------------------------------------------
|
| Reusable card used to display a dashboard statistic.
|
*/

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
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

export default StatCard;