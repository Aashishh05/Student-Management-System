import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Student from "./Student";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

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

        <main className="p-4 md:p-10 mt-15">
          <div className="px-2 md:px-10 lg:px-20">
            
            <div className="w-full bg-slate-200/10 rounded-2xl shadow-2xl p-6 md:border-l-[10px] border-b-[6px] border-[#2249A3]">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-8 md:mb-12 font-serif ">
                Dashboard Overview
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                
                <div className="bg-gradient-to-r from-slate-700 to-blue-600 rounded-2xl p-6 md:p-10 cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold font-serif opacity-90 uppercase tracking-widest">
                      Students
                    </h2>
                    <p className="text-4xl md:text-6xl font-bold mt-2 font-mono">30</p>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
                    <div className="w-7 h-7 md:w-10 md:h-10 bg-white rounded-lg shadow-sm"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-2xl p-6 md:p-10 cursor-pointer hover:scale-110 transition-all duration-300 shadow-xl flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold font-serif opacity-90 uppercase tracking-widest">
                      Teachers
                    </h2>
                    <p className="text-4xl md:text-6xl font-bold mt-2 font-mono">12</p>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
                    <div className="w-7 h-7 md:w-10 md:h-10 bg-white rounded-lg shadow-sm"></div>
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