import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-teal-100 relative overflow-hidden">

      {/* ==========================================================
          Floating Background Decorations
      ========================================================== */}

      {/* Top Left Circle */}
      <div className="absolute top-20 left-10 h-28 w-28 rounded-full bg-emerald-300 opacity-25 float-slow"></div>

      {/* Bottom Right Circle */}
      <div className="absolute bottom-40 right-20 h-32 w-32 rounded-full bg-teal-400 opacity-20 float-slow"></div>

      {/* Center Circle */}
      <div className="absolute top-1/2 left-[60%] h-40 w-40 rounded-full bg-emerald-200 opacity-20 float-slow"></div>

      {/* ==========================================================
          Hero Section
      ========================================================== */}

      <section className="fade-enter mx-auto max-w-5xl px-6 pb-24 pt-28 text-center">

        {/* Hero Heading */}
        <h1 className="gradient-text text-5xl font-extrabold leading-tight md:text-6xl">
          Write. Publish. Inspire.
        </h1>

        {/* Hero Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          A beautiful, modern CMS designed with passion — smooth animations,
          premium components, and a delightful writing experience.
        </p>

        {/* ======================================================
            Call To Action Buttons
        ====================================================== */}

        <div className="mt-10 flex justify-center gap-6">

          {/* Dashboard Button */}
          <Link
            to="/dashboard"
            className="
              rounded-xl
              bg-emerald-500
              px-8
              py-3
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-emerald-600
              hover:shadow-xl
            "
          >
            Go to Dashboard
          </Link>

          {/* Register Button */}
          <Link
            to="/auth"
            className="
              rounded-xl
              border
              border-emerald-200
              bg-white
              px-8
              py-3
              font-medium
              text-emerald-700
              shadow
              transition-all
              duration-300
              hover:border-emerald-400
              hover:bg-emerald-50
              hover:shadow-md
            "
          >
            Get Started — it's free
          </Link>

        </div>

      </section>

      {/* ==========================================================
          Features Section
      ========================================================== */}

      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* ======================================================
              Feature Card 1
          ====================================================== */}

          <div
            className="
              rise-up
              rounded-2xl
              border
              border-emerald-100
              bg-white
              p-6
              shadow-smooth
              transition
              hover-glow
              hover:shadow-glow
            "
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Write Beautifully
            </h3>

            <p className="text-gray-600">
              A clean and modern editor that lets your creativity flow
              without distractions.
            </p>
          </div>

          {/* ======================================================
              Feature Card 2
          ====================================================== */}

          <div
            className="
              rise-up
              rounded-2xl
              border
              border-emerald-100
              bg-white
              p-6
              shadow-smooth
              transition
              hover-glow
              hover:shadow-glow
            "
            style={{ animationDelay: "120ms" }}
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Manage Easily
            </h3>

            <p className="text-gray-600">
              A simple dashboard to organize your posts, drafts, and updates.
            </p>
          </div>

          {/* ======================================================
              Feature Card 3
          ====================================================== */}

          <div
            className="
              rise-up
              rounded-2xl
              border
              border-emerald-100
              bg-white
              p-6
              shadow-smooth
              transition
              hover-glow
              hover:shadow-glow
            "
            style={{ animationDelay: "240ms" }}
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Publish Instantly
            </h3>

            <p className="text-gray-600">
              Lightning-fast API — your content goes live in just seconds.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}