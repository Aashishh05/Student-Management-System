import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    const fetch_Students_Teachers_Courses = async () => {
      setLoading(true);
      try {
        const student_res = await axios.get(
          "http://localhost:5000/api/students/getStudent",
        );
        const teacher_res = await axios.get(
          "http://localhost:5000/api/teachers/getTeacher",
        );
        const course_res = await axios.get(
          "http://localhost:5000/api/courses/getCourse",
        );

        setStudents(student_res.data.students);
        setTeachers(teacher_res.data.teachers);
        setCourses(course_res.data.courses);
      } catch (error) {
        console.log("Error fetching students, teachers or courses", error);
        alert("Failed to load students, teachers or courses");
      } finally {
        setLoading(false);
      }
    };
    fetch_Students_Teachers_Courses();
  });

  return (
    <div className="flex min-h-screen bg-slate-300">
      <div
        className={`${
          isOpen ? "w-80" : "w-0"
        } transition-all duration-300 ease-in-out shrink-0 overflow-hidden md:relative absolute z-50 h-full`}
      >
        <Sidebar isOpen={isOpen} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />

        <main className="p-4 md:p-3 mt-10">
          <div className="px-2 md:px-10 lg:px-20">
            <div className="w-full bg-slate-200/10 rounded-2xl shadow-2xl p-6 md:border-l-[10px] border-b-[6px] border-[#2249A3]">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-8 md:mb-10 font-serif">
                Dashboard Overview
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 ">
                <div className="bg-gradient-to-r from-slate-700 to-blue-600 rounded-2xl p-5 cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest opacity-85">
                      Students
                    </h2>
                    <p className="text-5xl font-bold mt-1 font-mono">
                      {students.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/25 rounded-xl flex items-center justify-center border border-white/30 shrink-0">
                    <div className="w-7 h-7 bg-white rounded-lg shadow-sm"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-2xl p-5 cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest opacity-85">
                      Teachers
                    </h2>
                    <p className="text-5xl font-bold mt-1 font-mono">
                      {teachers.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/25 rounded-xl flex items-center justify-center border border-white/30 shrink-0">
                    <div className="w-7 h-7 bg-white rounded-lg shadow-sm"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-600 to-teal-400 rounded-2xl p-5 cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest opacity-85">
                      Courses
                    </h2>
                    <p className="text-5xl font-bold mt-1 font-mono">
                      {courses.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/25 rounded-xl flex items-center justify-center border border-white/30 shrink-0">
                    <div className="w-7 h-7 bg-white rounded-lg shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-15 bg-slate-200/10 rounded-2xl shadow-2xl p-6 border-[#2249A3]">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-8 md:mb-7 font-serif">
                Quick Links
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
                <div
                  className="bg-gradient-to-r from-slate-700 to-blue-600 rounded-2xl p-8 cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl flex justify-between items-center text-white active:scale-95"
                  onClick={() => nav(`/Student`)}
                >
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest opacity-85">
                      Students
                    </h2>
                  </div>
                 
                </div>

                <div
                  className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-2xl p-5 cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl flex justify-between items-center text-white active:scale-95"
                  onClick={() => nav(`/Teacher`)}
                >
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest opacity-85">
                      Teachers
                    </h2>
                  </div>
                 
                </div>

                <div
                  className="bg-gradient-to-r from-teal-600 to-teal-400 rounded-2xl p-5 cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl flex justify-between items-center text-white active:scale-95"
                  onClick={() => nav(`/Courses`)}
                >
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest opacity-85">
                      Courses
                    </h2>
                  </div>
                 
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
