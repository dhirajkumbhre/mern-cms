import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
<div className="min-h-screen bg-red-500">
  TESTING TAILWIND
</div>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center py-24 px-6">
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Place to Write, Publish & Inspire
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A premium CMS experience with smooth animations, beautiful components
          and lightning-fast publishing.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/register"
            className="px-6 py-3 bg-white border rounded-xl shadow hover:bg-gray-100 transition"
          >
            Get Started — it's free
          </Link>
        </motion.div>
      </section>

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-20 max-w-6xl mx-auto">
        {[
          {
            title: "Write Beautifully",
            desc: "A clean and fast editor to publish amazing stories.",
          },
          {
            title: "Manage Effortlessly",
            desc: "Organize posts, drafts, and updates with ease.",
          },
          {
            title: "Publish Instantly",
            desc: "Fast API, zero lag — your content is live in seconds.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
