import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const ToggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <header className="bg-indigo-100 dark:bg-indigo-950 px-8 py-8 border-b border-indigo-200 dark:border-indigo-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button className="text-2xl text-indigo-950 dark:text-indigo-50 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors cursor-pointer">
            <IoMenuSharp />
          </button>

          <div>
            <h1 className="font-serif text-2xl font-bold text-indigo-950 dark:text-indigo-50">
              Student Management System
            </h1>
            <p className="text-indigo-700 dark:text-indigo-300">
              Manage students, teachers, and courses efficiently in one
              centralized dashboard.
            </p>
          </div>
        </div>

        <nav className="flex gap-6">
          <NavLink
            to="/students"
            className="relative px-1 py-2 text-indigo-900 dark:text-indigo-100 transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Students
          </NavLink>
          <NavLink
            to="/teachers"
            className="relative px-1 py-2 text-indigo-900 dark:text-indigo-100 transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Teachers
          </NavLink>
          <NavLink
            to="/courses"
            className="relative px-1 py-2 text-indigo-900 dark:text-indigo-100 transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Courses
          </NavLink>
        </nav>

        <div className="flex items-center text-indigo-900 dark:text-indigo-100 cursor-pointer">
          <h1>
            <FaRegCircleUser className="size-8" onClick={ToggleDropdown} />
          </h1>
        </div>

        {dropdown && (
          <div className="absolute right-3 mt-25 w-35 bg-white dark:bg-indigo-900 border border-indigo-200 dark:border-indigo-700 rounded-lg shadow-lg px-6 py-2 ">
            <ul>
              <li className=" text-indigo-900 dark:text-indigo-100 cursor-pointer transition-colors hover:text-indigo-300">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
