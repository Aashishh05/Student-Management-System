import React, { useEffect, useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import axios from "axios";

const Courses = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/courses/getCourse`
      );
      setCourses(res.data.courses);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure want to delete this course?");
    if (!confirm) return;
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/courses/delete/${id}`
      );
      if (res.status === 200) {
        alert("Course deleted successfully");
        setCourses((prev) => prev.filter((c) => c._id !== id));
      }
    } catch (error) {
      console.log("Error deleting course");
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );

  return (
    <div className="flex h-screen overflow-hidden bg-slate-300">
      {/* Sidebar — locked, never scrolls */}
      <div
        className={`${
          isOpen ? "w-80" : "w-0"
        } transition-all duration-300 ease-in-out shrink-0 overflow-hidden md:relative absolute z-50 h-full`}
      >
        <Sidebar isOpen={isOpen} />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />

        {/* Only this scrolls */}
        <main className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 md:space-y-10">
          <div className="px-1 md:px-6 lg:px-10">

            {/* Header banner */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 rounded-2xl bg-slate-200 shadow-2xl border-l-[12px] border-b-[6px] border-[#2249A3] gap-6">
              <div className="flex flex-col font-serif">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Course Management
                </h1>
                <p className="text-gray-500 mt-1 text-base md:text-lg">
                  Manage and view all Course information
                </p>
              </div>
              <div className="w-full md:w-auto">
                <button
                  className="w-full cursor-pointer flex items-center justify-center gap-2 font-serif font-bold px-8 py-4 
                  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl 
                  hover:from-blue-700 hover:to-purple-700 focus:outline-none 
                  transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
                  onClick={() => nav(`/CoursesForm`)}
                >
                  <MdPersonAddAlt1 className="text-2xl" />
                  <span className="whitespace-nowrap">Register new Course</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="mt-10 w-full overflow-x-auto">
              <div className="min-w-[900px]">
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="bg-gradient-to-r from-[#142C6E] via-[#4C2BC4] to-[#8E118E] px-8 py-7 flex items-center justify-between font-serif">
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-400 p-3 rounded-xl">
                        <IoBookSharp className="text-white text-xl" />
                      </div>
                      <h1 className="text-3xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Courses Directory
                      </h1>
                    </div>
                    <h2 className="text-slate-300 text-lg font-medium">
                      {courses.length} Total Records
                    </h2>
                  </div>
                </div>

                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-200 to-slate-400 border-b border-slate-700">
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Duration
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Base Fee
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200">
                    {courses.length === 0 ? (
                      <tr>
                        <td
                          colSpan="7"
                          className="text-center py-6 text-gray-500"
                        >
                          No Courses found
                        </td>
                      </tr>
                    ) : (
                      courses.map((course, index) => (
                        <tr
                          key={course._id}
                          className="hover:bg-sky-100/50 transition-all duration-300"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900 text-center">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
                            {course.Title}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 text-center max-w-[200px] truncate">
                            {course.Description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                            {course.Duration}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                            {course.Basefee}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span
                              className={`px-3 py-1 text-[12px] font-bold tracking-wider rounded-full border ${
                                course.Status === "active"
                                  ? "bg-green-200/50 text-green-800 border-green-200"
                                  : "bg-red-200/50 text-red-800 border-red-200"
                              }`}
                            >
                              {course.Status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            <div className="flex items-center justify-center gap-3">
                              <button
                                className="flex gap-1 items-center px-2 py-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:scale-105"
                                onClick={() => nav(`/CoursesForm/${course._id}`)}
                              >
                                <FiEdit /> <span>Edit</span>
                              </button>
                              <button
                                className="flex gap-1 items-center px-2 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-105"
                                onClick={() => handleDelete(course._id)}
                              >
                                <RiDeleteBin6Line /> <span>Delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Courses;