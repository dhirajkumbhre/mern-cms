import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {

  // fade animation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-black dark:via-gray-900 dark:to-gray-800">

      {/* Floating bubble decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-indigo-300 opacity-30 rounded-full float-slow"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-400 opacity-30 rounded-full float-slow"></div>

      <div className="max-w-5xl mx-auto text-center px-6 fade-enter">
        
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md leading-tight">
          A beautiful place to write, publish and share
        </h1>

        <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Premium UI, smooth animations and a modern experience.  
          Build stunning content with ease.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link 
            to="/dashboard"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md text-lg transition"
          >
            Go to Dashboard
          </Link>

          <Link 
            to="/auth"
            className="px-8 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-indigo-500 rounded-xl text-lg transition"
          >
            Get Started — it's free
          </Link>
        </div>

      </div>

    </div>
  );
}
