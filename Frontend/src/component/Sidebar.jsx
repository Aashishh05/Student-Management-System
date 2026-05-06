import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const nav = useNavigate();
  return (
    <div
      className={`${
        isOpen
          ? "w-80 p-6"
          : "w-0 p-0 overflow-hidden border-none shadow-none"
      } transition-all duration-300 ease-in-out min-h-screen bg-gradient-to-b from-slate-400/60 to-white/20 backdrop-blur-xl border-r border-slate-300/50 shadow-2xl shadow-indigo-900/90 space-y-4 relative`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/2 to-purple-500/1" />
      <div className="absolute top-20 right-4 w-12 h-12 bg-indigo-400/10 rounded-full blur-xl animate-pulse" />

      <div
        className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg mb-6 cursor-pointer shrink-0 
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
        onClick={() => nav(`/`)}
      >
        <div className="flex items-center gap-3">
          <FaRegUserCircle className="text-blue-400 text-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
          <h1 className="font-black font-serif text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
            Admin Panel
          </h1>
        </div>
      </div>

      <div className="space-y-3 shrink-0">
        <div
          className="group relative p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/20 hover:border-emerald-200/50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap"
          onClick={() => nav(`/Dashboard`)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 rounded-2xl -z-10" />
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:rotate-3 group-hover:scale-105 transition-all duration-300 text-white shrink-0">
              <RiDashboardFill className="text-xl" />
            </div>
            <span className="font-semibold font-serif text-lg bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform">
              Dashboard
            </span>
          </div>
        </div>

        <div
          className="group relative p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-200/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap"
          onClick={() => nav(`/Student`)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 rounded-2xl -z-10" />
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:rotate-3 group-hover:scale-105 transition-all duration-300 text-white shrink-0">
              <PiStudentFill className="text-xl" />
            </div>
            <span className="font-semibold font-serif text-lg bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform">
              Students
            </span>
          </div>
        </div>

        <div
          className="group relative p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-200/50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap"
          onClick={() => nav(`/Teacher`)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-violet-400/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 rounded-2xl -z-10" />
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:rotate-3 group-hover:scale-105 transition-all duration-300 text-white shrink-0">
              <FaUserTie className="text-xl" />
            </div>
            <span className="font-semibold font-serif text-lg bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform">
              Teachers
            </span>
          </div>
        </div>

        <div
          className="group relative p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-xl hover:shadow-orange-500/20 hover:border-orange-200/50 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300 cursor-pointer overflow-hidden whitespace-nowrap"
          onClick={() => nav(`/Courses`)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 rounded-2xl -z-10" />
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:rotate-3 group-hover:scale-105 transition-all duration-300 text-white shrink-0">
              <IoBookSharp className="text-xl" />
            </div>
            <span className="font-semibold font-serif text-lg bg-gradient-to-r from-slate-800 to-orange-600 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform">
              Courses
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;