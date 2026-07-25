/*
|--------------------------------------------------------------------------
| ActivityFeed
|--------------------------------------------------------------------------
|
| Displays recent activity inside the CMS.
| This is mock data for now and will later come from the backend.
|
*/

const activities = [
  {
    title: "New post published",
    time: "20 minutes ago",
    color: "bg-emerald-500",
  },
  {
    title: "Draft updated",
    time: "Today",
    color: "bg-yellow-500",
  },
  {
    title: "Category added",
    time: "Yesterday",
    color: "bg-sky-500",
  },
];

function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">

        {activities.map((activity) => (

          <div
            key={activity.title}
            className="flex items-start gap-3"
          >

            <div
              className={`mt-1 h-3 w-3 rounded-full ${activity.color}`}
            />

            <div>

              <p className="text-white">
                {activity.title}
              </p>

              <p className="text-sm text-slate-400">
                {activity.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityFeed;