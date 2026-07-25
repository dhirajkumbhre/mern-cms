/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#10B981",
        brandDark: "#059669",
        accent: "#34D399",
        background: "#020617",
        surface: "#1E293B",
        border: "#334155",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        smooth: "0 8px 30px rgba(0,0,0,0.08)",
        glow: "0 0 20px rgba(99,102,241,0.4)",
      },
    },
  },
  plugins: [],
};
