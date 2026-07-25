// Logo component used across the application.
// By keeping it separate, we can reuse the same branding
// in the Sidebar, Login page, Navbar, or Footer later.

export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      {/* 
        SVG keeps the logo sharp on every screen.
        Unlike PNG images, SVG doesn't lose quality when scaled.
      */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rounded square */}
        <rect
          x="2"
          y="2"
          width="38"
          height="38"
          rx="10"
          fill="#10B981"
        />

        {/* Three white blocks represent content/pages */}
        <rect x="11" y="11" width="20" height="4" rx="2" fill="white" />
        <rect x="11" y="19" width="15" height="4" rx="2" fill="white" />
        <rect x="11" y="27" width="20" height="4" rx="2" fill="white" />
      </svg>

      {/* Brand name */}
      <div>

        <h1 className="text-lg font-bold tracking-wide text-white">
          MERN CMS
        </h1>

        <p className="text-xs text-slate-400">
          Content Manager
        </p>

      </div>

    </div>
  );
}