import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="sticky w-full px-8 py-6 bg-gradient-to-r from-slate-400/50 to-white/50 backdrop-blur-xl border-b border-white/50 shadow-sm transition-colors font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section: Menu + Title */}
        <div className="flex items-center gap-4">
          <button className="text-2xl text-slate-700 hover:text-indigo-600 transition-colors">
            <IoMenuSharp />
          </button>
          <div>
            <h1 className="font-semibold text-2xl bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent ">
              Student Management System
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              Centralized Admin Dashboard
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-8">
          <NavLink
            to="/students"
            className="relative px-2 py-1 text-lg font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
          >
            Students
          </NavLink>

          <NavLink
            to="/teachers"
            className="relative px-2 py-1 text-lg font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
          >
            Teachers
          </NavLink>

          <NavLink
            to="/courses"
            className="relative px-2 py-1 text-lg font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
          >
            Courses
          </NavLink>
        </nav>

        {/* User Profile */}
        <div className="relative">
          <div
            onClick={() => setDropdown(!dropdown)}
            className="w-12 h-12 rounded-full bg-white/60 border border-white/30 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <FaRegCircleUser className="text-3xl text-indigo-600" />
          </div>

          {/* Dropdown */}
          {dropdown && (
            <div className="absolute right-0 mt-3 w-40 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-3 animate-in fade-in zoom-in duration-200">
              <button className="w-full text-left px-4 py-2 text-slate-700 hover:bg-indigo-500 hover:text-indigo-100 rounded-xl transition-all">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
