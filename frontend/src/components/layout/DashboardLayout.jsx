/*
|--------------------------------------------------------------------------
| Dashboard Layout
|--------------------------------------------------------------------------
|
| This layout wraps every protected admin page.
|
| Instead of adding the Sidebar and Header to every page,
| we place them here once and render the page content through
| React Router's <Outlet /> component.
|
*/

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar stays fixed on the left */}
      <Sidebar />

      {/* Main content grows to fill remaining space */}
      <main className="flex flex-1 flex-col">

        {/* Top navigation */}
        <Header />

        {/* Page Content */}
        <section className="flex-1 p-8">
          <Outlet />
        </section>

      </main>

    </div>
  );
}

export default DashboardLayout;