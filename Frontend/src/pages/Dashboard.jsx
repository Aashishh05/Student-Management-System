import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import api from "../api/api.js";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [totalStudents, setTotalStudents] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const nav = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetch_Students_Teachers_Courses = async () => {
      setLoading(true);
      try {
        const student_res = await api.get("/students/getStudent");
        const teacher_res = await api.get("/teachers/getTeacher");
        const course_res = await api.get("/courses/getCourse");

        setTotalStudents(student_res.data.totalStudents);
        setTotalTeachers(teacher_res.data.totalTeacher);
        setTotalCourses(course_res.data.totalCourse);
      } catch (error) {
        console.log("Error fetching students, teachers or courses", error);
        alert("Failed to load students, teachers or courses");
      } finally {
        setLoading(false);
      }
    };
    fetch_Students_Teachers_Courses();
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen bg-slate-50 font-serif">
      <div className="flex-1 flex flex-col min-w-0">
        <main className="p-4 md:p-6 mt-6">
          <div className="px-2 md:px-8 lg:px-16">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent tracking-tight">
                  Dashboard Overview
                </h1>
                <p className="text-slate-500 mt-2 font-medium">
                  Welcome back to the Student Management System
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="text-3xl font-bold text-slate-800 font-mono tracking-wider">
                  {formattedTime}
                </p>
                <p className="text-sm text-slate-500 font-semibold mt-1 uppercase tracking-widest">
                  {formattedDate}
                </p>
              </div>
            </div>

            <div className="w-full bg-white rounded-3xl shadow-xl p-8 border-t-[6px] border-[#2249A3] mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-2xl shadow-slate-900/20 flex flex-col justify-between text-white border border-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Total Students
                    </h2>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                      <span className="text-blue-400 text-lg">👨‍🎓</span>
                    </div>
                  </div>
                  <p className="text-5xl font-bold font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {loading ? "..." : totalStudents}
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-2xl shadow-indigo-900/20 flex flex-col justify-between text-white border border-indigo-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
                      Total Teachers
                    </h2>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                      <span className="text-indigo-300 text-lg">👨‍🏫</span>
                    </div>
                  </div>
                  <p className="text-5xl font-bold font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {loading ? "..." : totalTeachers}
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-2xl shadow-teal-900/20 flex flex-col justify-between text-white border border-teal-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                      Total Courses
                    </h2>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                      <span className="text-teal-300 text-lg">📚</span>
                    </div>
                  </div>
                  <p className="text-5xl font-bold font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {loading ? "..." : totalCourses}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-3xl shadow-xl p-8 border border-slate-100 relative overflow-hidden">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 tracking-tight">
                Quick Links
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-2xl p-6 cursor-pointer transition-all duration-200 flex justify-between items-center text-slate-700 hover:text-blue-700 shadow-sm hover:shadow-md active:scale-95"
                  onClick={() => nav(`/Student`)}
                >
                  <h2 className="text-sm font-bold uppercase tracking-wider">
                    Manage Students
                  </h2>
                  <span className="text-2xl opacity-50">→</span>
                </div>

                <div
                  className="bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 cursor-pointer transition-all duration-200 flex justify-between items-center text-slate-700 hover:text-indigo-700 shadow-sm hover:shadow-md active:scale-95"
                  onClick={() => nav(`/Teacher`)}
                >
                  <h2 className="text-sm font-bold uppercase tracking-wider">
                    Manage Teachers
                  </h2>
                  <span className="text-2xl opacity-50">→</span>
                </div>

                <div
                  className="bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-2xl p-6 cursor-pointer transition-all duration-200 flex justify-between items-center text-slate-700 hover:text-teal-700 shadow-sm hover:shadow-md active:scale-95"
                  onClick={() => nav(`/Courses`)}
                >
                  <h2 className="text-sm font-bold uppercase tracking-wider">
                    Manage Courses
                  </h2>
                  <span className="text-2xl opacity-50">→</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;