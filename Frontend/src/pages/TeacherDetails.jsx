import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { IoArrowBack } from "react-icons/io5";

const TeacherDetails = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTeacher = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/teachers/getTeacher/${id}`,
      );
      console.log(res.data);
      setTeacher(res.data.teacher);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeacher();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="flex h-screen overflow-hidden bg-slate-300">
      <div
        className={`${
          isOpen ? "w-80" : "w-0"
        } transition-all duration-300 ease-in-out shrink-0 overflow-hidden md:relative absolute z-50 h-full`}
      >
        <Sidebar isOpen={isOpen} />
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <div className="px-1 md:px-6 lg:px-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 rounded-2xl bg-slate-200 shadow-2xl border-l-[12px] border-b-[6px] border-[#2249A3] gap-6">
              <div className="flex flex-col font-serif">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                  Teacher Details
                </h1>
                <p className="text-gray-500 mt-1 text-base md:text-lg">
                  Full profile information for this Teacher
                </p>
              </div>
              <button
                onClick={() => nav("/Teacher")}
                className="flex items-center gap-2 font-serif font-bold px-6 py-3
                bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl
                hover:from-blue-700 hover:to-purple-700 transition-all duration-300
                transform hover:scale-105 shadow-lg active:scale-95 cursor-pointer"
              >
                <IoArrowBack className="text-xl" />
                <span>Back</span>
              </button>
            </div>

            {!teacher ? (
              <div className="mt-10 text-center text-gray-500">
                No student data found.
              </div>
            ) : (
              <div className="mt-10 bg-slate-200 shadow-2xl  rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-400 p-6 md:p-8 max-w-3xl mx-auto">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => nav("/Teacher")}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                    text-slate-600 border border-slate-300 rounded-lg
                    hover:bg-slate-100 active:scale-95 transition"
                  >
                    <IoArrowBack />
                    Back
                  </button>
                </div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-6 font-serif flex items-center justify-center">
                  Teacher Profile
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-slate-200">
                  <div className="flex-shrink-0 flex justify-center">
                    <img
                      src={
                        teacher.photo ||
                        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                      }
                      alt="student"
                      className="w-32 h-32 rounded-full object-cover border-4 border-slate-200 shadow-md"
                    />
                  </div>

                  <div className="flex-2 space-y-3 font-serif">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-black text-l">Name</span>
                      <span className="font-medium text-slate-800 text-sm">
                        {teacher.first_name} {teacher.last_name}
                      </span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                      <span className="text-black text-l">Gender</span>
                      <span className="font-medium text-slate-800 text-sm">
                        {teacher.gender || "—"}
                      </span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                      <span className="text-black text-l">Phone</span>
                      <span className="font-medium text-slate-800 text-sm">
                        {teacher.phone || "—"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-black text-l">Email</span>
                      <span className="font-medium text-slate-800 text-sm">
                        {teacher.email || "—"}
                      </span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                      <span className="text-black text-l">Address</span>
                      <span className="font-medium text-slate-800 text-sm text-right">
                        {teacher.address || "—"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 flex items-center justify-center sm:grid-cols-3 gap-4 mt-6 font-serif">
                  <div className="border border-slate-300 rounded-xl p-4 bg-gradient-to-r from-teal-600 to-teal-400 ">
                    <p className="text-l text-white mb-1">Course</p>
                    <p className="text-sm font-semibold text-white">
                      {teacher.courses || "—"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDetails;
