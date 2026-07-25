/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#6366F1",
        brandDark: "#4F46E5",
        accent: "#A78BFA",
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
