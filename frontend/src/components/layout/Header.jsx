/*
|--------------------------------------------------------------------------
| Header Component
|--------------------------------------------------------------------------
|
| This component displays the top section of every dashboard page.
|
| Responsibilities:
| - Welcome message
| - Search input
| - Notification button
| - User profile
|
| Notice that this component doesn't fetch user data or notifications.
| It only renders the UI. The parent component or API layer will provide
| real data later.
|
*/

import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

function Header() {

  // We'll replace this with real user data after authentication.
  const user = JSON.parse(localStorage.getItem("user"));

  const userName = user?.name || "User";
  return (

    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">

      {/* -------------------------------------------------------------- */}
      {/* Left Side */}
      {/* -------------------------------------------------------------- */}

      <div>

        <h2 className="text-2xl font-bold text-white">

          Welcome back, {user?.name || "Guest"} 

        </h2>

        <p className="mt-1 text-sm text-slate-400">

          Manage your content from one place.

        </p>

      </div>

      {/* -------------------------------------------------------------- */}
      {/* Right Side */}
      {/* -------------------------------------------------------------- */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative">

          {/* Position the icon inside the input without affecting layout */}
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-64
              rounded-lg
              border
              border-slate-700
              bg-slate-800
              py-2
              pl-10
              pr-4
              text-sm
              text-white
              outline-none
              transition-colors

              placeholder:text-slate-500

              focus:border-emerald-500
            "
          />

        </div>

        {/* Notifications */}

        <button
          className="
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            p-2.5
            text-slate-300
            transition-colors

            hover:border-emerald-500
            hover:text-white
          "
        >

          <Bell size={20} />

        </button>

        {/* User */}

        <button
          className="
            flex
            items-center
            gap-3
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            px-4
            py-2
            transition-colors

            hover:border-emerald-500
          "
        >

          <UserCircle
            size={34}
            className="text-emerald-500"
          />

          <div className="text-left">

            <p className="text-sm font-semibold text-white">

              {user?.name || "Guest"}

            </p>

            <p className="text-xs text-slate-400">

              Administrator

            </p>

          </div>

        </button>

      </div>

    </header>

  );
}

export default Header;