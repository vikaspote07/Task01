import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const role = JSON.parse(localStorage.getItem("role").toLocaleLowerCase());

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#250f4f]  border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#250f4f] dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {role === "admin" && (
              <>
                <li>
                  <Link
                    to="/List"
                    className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:text-gray-50 hover:bg-[#432b73] dark:hover:bg-[#432b73] group"
                  >
                    <svg
                      className="w-5 h-5 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-50  dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">Users</span>
                  </Link>
                </li>
              </>
            )}

            {role === "user" && (
              <>
                <li>
                  <Link
                    to="/Product"
                    className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:text-gray-50 hover:bg-[#432b73] dark:hover:bg-[#432b73] group"
                  >
                    <svg
                      className="w-5 h-5 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">Product</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}
