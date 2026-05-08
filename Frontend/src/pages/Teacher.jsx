import React, { useEffect, useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import axios from "axios";
import { IoEye } from "react-icons/io5";

const Teacher = () => {
  const nav = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(1);

  const fetchTeacher = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/teachers/getTeacher`,
        {
          params: { page, limit: 2 },
        },
      );
      setTotalpage(res.data.totalpages);
      setTeachers(res.data.teachers);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure want to delete this teacher?",
    );
    if (!confirmed) return;
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/teachers/delete/${id}`,
      );
      if (res.status === 200) {
        alert("Teacher deleted successfully!");
        setTeachers((prev) => prev.filter((t) => t._id !== id));
      }
    } catch (error) {
      console.log("Error deleting teacher", error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchTeacher();
  }, [page]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
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
                  Teacher Management
                </h1>
                <p className="text-gray-500 mt-1 text-base md:text-lg">
                  Manage and view all teacher information
                </p>
              </div>
              <div className="w-full md:w-auto">
                <button
                  className="w-full cursor-pointer flex items-center justify-center gap-2 font-serif font-bold px-8 py-4 
                  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl 
                  hover:from-blue-700 hover:to-purple-700 focus:outline-none 
                  transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
                  onClick={() => nav(`/TeacherForm`)}
                >
                  <MdPersonAddAlt1 className="text-2xl" />
                  <span className="whitespace-nowrap">
                    Register new Teacher
                  </span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="mt-10 w-full overflow-x-auto">
              <div className="min-w-[900px]">
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="bg-gradient-to-r from-[#142C6E] via-[#4C2BC4] to-[#8E118E] px-8 py-7 flex items-center justify-between font-serif">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-400 p-3 rounded-xl">
                        <FaUserTie className="text-white text-xl" />
                      </div>
                      <h1 className="text-3xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Teachers Directory
                      </h1>
                    </div>
                    <h2 className="text-slate-300 text-lg font-medium">
                      {teachers.length} total records
                    </h2>
                  </div>
                </div>

                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-200 to-slate-400 border-b border-slate-700">
                      <th className="w-5 px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-3 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Full Name
                      </th>
                      <th className="px-3 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="w-24 px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Gender
                      </th>
                      <th className="px-3 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-3 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-3 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="w-36 px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200">
                    {teachers.length === 0 ? (
                      <tr>
                        <td
                          colSpan="8"
                          className="text-center py-6 text-gray-500"
                        >
                          No teachers found
                        </td>
                      </tr>
                    ) : (
                      teachers.map((teacher, index) => (
                        <tr
                          key={teacher._id}
                          className="hover:bg-sky-100/50 transition-all duration-300"
                        >
                          <td className="px-4 py-4 text-center text-sm font-bold text-slate-900">
                            {(page - 1) * 2 + index + 1}
                          </td>
                          <td className="px-3 py-4 text-center text-sm font-medium text-gray-800">
                            {`${teacher.first_name} ${teacher.last_name}`}
                          </td>
                          <td className="px-3 py-4 text-center text-sm text-gray-600 break-all">
                            {teacher.email}
                          </td>
                          <td className="px-3 py-4 text-center text-sm text-gray-600">
                            {teacher.gender}
                          </td>
                          <td className="px-3 py-4 text-center text-sm text-gray-600">
                            {teacher.courses}
                          </td>
                          <td className="px-3 py-4 text-center text-sm text-gray-600">
                            {teacher.phone}
                          </td>
                          <td className="px-3 py-4 text-center text-sm text-gray-600">
                            {teacher.address}
                          </td>
                          <td className="px-3 py-4 text-center text-sm font-medium">
                            <div className="flex items-center justify-center  gap-2">
                              <button
                                className="flex gap-1 items-center px-2 py-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:scale-105"
                                onClick={() =>
                                  nav(`/TeacherForm/${teacher._id}`)
                                }
                              >
                                <FiEdit /> <span>Edit</span>
                              </button>
                              <button
                                className="flex gap-1 items-center px-2 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-105"
                                onClick={() => handleDelete(teacher._id)}
                              >
                                <RiDeleteBin6Line /> <span>Delete</span>
                              </button>
                            </div>

                            <button
                              className="rounded-xl p-1 text-xl "
                              onClick={() =>
                                nav(`/TeacherDetails/${teacher._id}`)
                              }
                            >
                              <IoEye />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                <div className="flex items-center justify-center mt-6 mb-6 gap-1 flex-wrap">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                    className={`w-7 h-7 rounded border-none text-s font-medium transition-all
      ${
        page === 1
          ? "bg-slate-200 text-slate-400 cursor-not-allowed"
          : "bg-white text-blue-600 hover:bg-blue-500 hover:text-white"
      }`}
                  >
                    ‹
                  </button>

                  {[...Array(totalpage)].map((_, index) => {
                    const pageNumber = index + 1;

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={`w-7 h-7 rounded bordedr-none text-s font-medium transition-all
          ${
            page === pageNumber
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 hover:bg-blue-100"
          }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    disabled={page === totalpage}
                    onClick={() => setPage((prev) => prev + 1)}
                    className={`w-7 h-7 rounded border-none text-s font-medium transition-all
      ${
        page === totalpage
          ? "bg-slate-200 text-slate-400 cursor-not-allowed"
          : "bg-white text-blue-600 hover:bg-blue-500 hover:text-white"
      }`}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Teacher;
