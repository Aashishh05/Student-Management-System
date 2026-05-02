import React, { useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

const Student = () => {
    const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [students, setStudents] = useState([]);
  const [loading, setLodaing] = useState(false);
  const [error, setError] = useState(null);


  const fetchStudent = async () => {
    if(students.length > 0) return;
    try {
      const res = await axios.get("")
    } catch (error) {
      
    }
  }


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

        <main className="p-4 md:p-10 space-y-6 md:space-y-10">
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
                    8
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
                    3
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
                    5
                  </p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl backdrop-blur-md flex items-center justify-center border border-white/30 transition-all duration-500 group-hover:rotate-12">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm"></div>
                </div>
              </div>
            </div>
            <div className="table-fixed mt-10">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-200 to-slate-400 border-b border-slate-700 ">
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Full Name
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Gender
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Course
                    </th>

                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Address
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
                  <tr className="hover:bg-sky-100/50 transition-all duration-300 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                      1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Arjun Thapa
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      arjun.thapa@email.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Male
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Computer Science
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      9841000000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Kathmandu, Nepal
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-[12px] font-bold  tracking-wider rounded-full bg-green-200/50 text-green-800 border border-green-200">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <button className="flex gap-2 items-center px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:scale-105 ">
                          <FiEdit className="" /> <span>Edit</span>
                        </button>
                        <button className="flex gap-2 items-center px-3 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-105 ">
                          <RiDeleteBin6Line /> <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-sky-100/50 transition-all duration-300">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                      2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Sita Sharma
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      sita.sharma@email.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Female
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Business Admin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      9801000000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Lalitpur, Nepal
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-[12px] font-bold tracking-wider rounded-full bg-yellow-200/50 text-yellow-800 border border-yellow-200">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <button className="flex gap-2 items-center px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:scale-105">
                          <FiEdit /> <span>Edit</span>
                        </button>
                        <button className="flex gap-2 items-center px-3 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-105">
                          <RiDeleteBin6Line /> <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Student;
