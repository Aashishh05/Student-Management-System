import React, { useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { useEffect } from "react";
import { IoEye } from "react-icons/io5";

const Student = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(1);

  const fetchStudent = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/students/getStudent`,
        {
          params: { page, limit: 2 },
        },
      );
      setTotalpage(res.data.totalpages);
      setStudents(res.data.students);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [page]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?",
    );
    if (!confirmed) return;
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/students/delete/${id}`,
      );
      if (res.status === 200) {
        alert("Student deleted successfully");
        setStudents((prev) => prev.filter((s) => s._id !== id));
      }
    } catch (error) {
      console.log("Error deleting student", error);
      alert("Something went wrong");
    }
  };

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

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 md:space-y-10">
          <div className="px-1 md:px-6 lg:px-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 rounded-2xl bg-slate-200 shadow-2xl border-l-[12px] border-b-[6px] border-[#2249A3] gap-6">
              <div className="flex flex-col font-serif">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Student Management
                </h1>
                <p className="text-gray-500 mt-1 text-base md:text-lg">
                  Manage and view all student information
                </p>
              </div>
              <div className="w-full md:w-auto">
                <button
                  className="w-full cursor-pointer flex items-center justify-center gap-2 font-serif font-bold px-8 py-4 
                  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl 
                  hover:from-blue-700 hover:to-purple-700 focus:outline-none 
                  transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
                  onClick={() => nav(`/StudentForm`)}
                >
                  <MdPersonAddAlt1 className="text-2xl" />
                  <span className="whitespace-nowrap">
                    Register new Student
                  </span>
                </button>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16 gap-6">
              <div className="group rounded-2xl p-6 md:p-8 flex justify-between items-center bg-gradient-to-r from-slate-700 to-blue-600 text-white shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110">
                <div>
                  <h1 className="font-serif text-sm opacity-90 uppercase tracking-wider font-bold transition-all duration-300 group-hover:translate-x-1">
                    Total Students
                  </h1>
                  <p className="mt-2 text-4xl md:text-5xl font-bold transition-all duration-300 group-hover:scale-110 origin-left">
                    {students.length}
                  </p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl backdrop-blur-md flex items-center justify-center border border-white/30 transition-all duration-500 group-hover:rotate-12">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm"></div>
                </div>
              </div>

              <div className="group rounded-2xl p-6 md:p-8 flex justify-between items-center bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110">
                <div>
                  <h1 className="font-serif text-sm opacity-90 uppercase tracking-wider font-bold transition-all duration-300 group-hover:translate-x-1">
                    Paid Students
                  </h1>
                  <p className="mt-2 text-4xl md:text-5xl font-bold transition-all duration-300 group-hover:scale-110 origin-left">
                    {students.filter((s) => s.payment_status === "Paid").length}
                  </p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl backdrop-blur-md flex items-center justify-center border border-white/30 transition-all duration-500 group-hover:rotate-12">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm"></div>
                </div>
              </div>

              <div className="group rounded-2xl p-6 md:p-8 flex justify-between items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110">
                <div>
                  <h1 className="font-serif text-sm opacity-90 uppercase tracking-wider font-bold transition-all duration-300 group-hover:translate-x-1">
                    Pending Students
                  </h1>
                  <p className="mt-2 text-4xl md:text-5xl font-bold transition-all duration-300 group-hover:scale-110 origin-left">
                    {
                      students.filter((s) => s.payment_status === "Pending")
                        .length
                    }
                  </p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl backdrop-blur-md flex items-center justify-center border border-white/30 transition-all duration-500 group-hover:rotate-12">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm"></div>
                </div>
              </div>
            </div>

            <div className="mt-10 w-full overflow-x-auto">
              <div className="min-w-[1000px]">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-200 to-slate-400 border-b border-slate-700">
                      <th className="w-14 px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Full Name
                      </th>
                      <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="w-24 px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Gender
                      </th>
                      <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="w-28 px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="w-36 px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200">
                    {students.length === 0 ? (
                      <tr>
                        <td
                          colSpan="9"
                          className="text-center py-6 text-gray-500"
                        >
                          No students found
                        </td>
                      </tr>
                    ) : (
                      students.map((student, index) => (
                        <tr
                          key={student._id}
                          className="hover:bg-sky-100/50 transition-all duration-300"
                        >
                          <td className="px-4 py-4 text-center text-sm font-bold text-slate-900">
                            {(page - 1) * 2 + index + 1}
                          </td>
                          <td className="px-4 py-4 text-center text-sm font-medium text-gray-800">
                            {`${student.first_name} ${student.last_name}`}
                          </td>
                          <td className="px-4 py-4 text-center text-sm text-gray-600 break-all">
                            {student.email}
                          </td>
                          <td className="px-4 py-4 text-center text-sm text-gray-600">
                            {student.gender}
                          </td>
                          <td className="px-4 py-4 text-center text-sm text-gray-600">
                            {student.course}
                          </td>
                          <td className="px-4 py-4 text-center text-sm text-gray-600">
                            {student.phone}
                          </td>
                          <td className="px-4 py-4 text-center text-sm text-gray-600">
                            {student.address}
                          </td>
                          <td className="px-4 py-4 text-center">
                            <span
                              className={`px-3 py-1 text-[12px] font-bold tracking-wider rounded-full border ${
                                student.payment_status === "Paid"
                                  ? "bg-green-200/50 text-green-800 border-green-200"
                                  : student.payment_status === "Pending"
                                    ? "bg-yellow-200/50 text-yellow-800 border-yellow-200"
                                    : "bg-red-200/70 text-red-800 border-red-200"
                              }`}
                            >
                              {student.payment_status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center text-sm font-medium">
                            <div className="flex flex-col items-center gap-1 pt-5">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() =>
                                    nav(`/StudentForm/${student._id}`)
                                  }
                                  className="flex gap-1 items-center px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                                >
                                  <FiEdit /> <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => handleDelete(student._id)}
                                  className="flex gap-1 items-center px-3 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer "
                                >
                                  <RiDeleteBin6Line /> <span>Delete</span>
                                </button>
                              </div>

                              <button
                                className="rounded-xl p-1 text-xl "
                                onClick={() =>
                                  nav(`/StudentDetails/${student._id}`)
                                }
                              >
                                <IoEye />
                              </button>
                            </div>
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

export default Student;
