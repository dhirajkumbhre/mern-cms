/*
|--------------------------------------------------------------------------
| Sidebar Component
|--------------------------------------------------------------------------
|
| This component renders the main navigation used throughout the admin
| dashboard.
|
| Responsibilities:
| - Display the project logo.
| - Render navigation links.
| - Highlight the active page.
| - Keep the logout action at the bottom.
|
| Notice what it DOESN'T do:
| - Fetch data
| - Handle authentication
| - Manage dashboard state
|
| Keeping each component focused on one responsibility makes the project
| easier to understand, test, and maintain.
|
*/

import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import Logo from "../common/Logo";

/* -------------------------------------------------------------------------- */
/* Navigation Configuration                                                   */
/* -------------------------------------------------------------------------- */

/*
  Instead of hardcoding every <NavLink />, we keep navigation data
  inside one array.

  Benefits:
  ✔ Easier to add new pages.
  ✔ Less duplicated JSX.
  ✔ Cleaner component.
*/

const navigationItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Posts",
    path: "/posts",
    icon: FileText,
  },
  {
    label: "Categories",
    path: "/categories",
    icon: FolderOpen,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">

      {/* ------------------------------------------------------------------ */}
      {/* Logo Section                                                       */}
      {/* ------------------------------------------------------------------ */}

      <div className="border-b border-slate-800 px-6 py-6">
        <Logo />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Navigation                                                         */}
      {/* ------------------------------------------------------------------ */}

      {/*
        flex-1 is important here.

        It tells this section to occupy all remaining height.
        That automatically pushes the Logout button to the bottom.
      */}

      <nav className="flex-1 px-4 py-6">

        <ul className="space-y-2">

          {navigationItems.map((item) => {

            /*
              item.icon stores the icon component.

              We rename it to Icon because React components
              should begin with a capital letter.
            */

            const Icon = item.icon;

            return (
              <li key={item.path}>

                <NavLink
                  to={item.path}

                  /*
                    NavLink automatically tells us whether
                    the current route is active.

                    We don't need our own useState() for this.
                  */

                  className={({ isActive }) =>
                    `
                      flex items-center gap-3
                      rounded-xl
                      px-4 py-3
                      transition-all duration-200

                      ${
                        isActive
                          ? "bg-emerald-500 text-white shadow-lg"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }
                    `
                  }
                >
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.label}
                  </span>

                </NavLink>

              </li>
            );
          })}

        </ul>

      </nav>

      {/* ------------------------------------------------------------------ */}
      {/* Logout Button                                                      */}
      {/* ------------------------------------------------------------------ */}

      <div className="border-t border-slate-800 p-4">

        <button
          className="
            flex w-full items-center gap-3
            rounded-xl
            px-4 py-3
            text-red-400
            transition-colors

            hover:bg-red-500
            hover:text-white
          "
        >
          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;