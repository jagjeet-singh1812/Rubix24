// Import necessary libraries
import React from "react";
import { Link } from "react-router-dom";

// Sidebar component
const Sidebar = () => {
  return (
    <div>
      {/* Sidebar toggle button (your existing code) */}

      {/* Sidebar content */}
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-500 dark:bg-gray-5000">
          {/* Navigation links */}
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* Dashboard SVG and text */}
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/q&a"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* Q&A SVG and text */}
                <span className="ms-3">Q&A</span>
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* Terms and Conditions SVG and text */}
                <span className="ms-3">Terms and Conditions</span>
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* Events SVG and text */}
                <span className="ms-3">Events</span>
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {/* Logout SVG and text */}
                <span className="ms-3">Logout</span>
              </Link>
            </li>
          </ul>
          {/* Additional links (your existing code) */}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
