import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100 relative overflow-hidden">

      {/* Floating decoration circles */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-indigo-300 opacity-30 rounded-full float-slow"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-400 opacity-30 rounded-full float-slow"></div>
      <div className="absolute top-1/2 left-[60%] w-40 h-40 bg-pink-300 opacity-20 rounded-full float-slow"></div>

      {/* MAIN HERO */}
      <section className="pt-28 pb-24 px-6 max-w-5xl mx-auto text-center fade-enter">

        <h1 className="text-5xl md:text-6xl font-extrabold gradient-text leading-tight">
          Write. Publish. Inspire.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A beautiful, modern CMS designed with passion — smooth animations,
          premium components, and a delightful writing experience.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <Link
            to="/dashboard"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/auth"
            className="px-8 py-3 bg-white text-gray-900 font-medium border border-gray-200 rounded-xl shadow hover:shadow-md hover:border-indigo-400 transition-all"
          >
            Get Started — it's free
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Feature Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-smooth hover:shadow-glow hover-glow transition rise-up">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Write Beautifully
            </h3>
            <p className="text-gray-600">
              A clean and modern editor that lets your creativity flow without distractions.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-smooth hover:shadow-glow hover-glow transition rise-up"
               style={{ animationDelay: "120ms" }}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Manage Easily
            </h3>
            <p className="text-gray-600">
              A simple dashboard to organize your posts, drafts, and updates.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-smooth hover:shadow-glow hover-glow transition rise-up"
               style={{ animationDelay: "240ms" }}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
