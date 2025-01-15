'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Sync with system preference on initial load
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand/Home Link */}
        <Link href="/" className="text-white text-2xl font-semibold cursor-pointer">
          My Portfolio
        </Link>
        <div className="flex space-x-6 items-center">
          {/* Navigation Links */}
          <Link href="/" className="text-white hover:text-blue-400">
            Home
          </Link>
          <Link href="/About" className="text-white hover:text-blue-400">
            About
          </Link>
          <Link href="/Contact" className="text-white hover:text-blue-400">
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
