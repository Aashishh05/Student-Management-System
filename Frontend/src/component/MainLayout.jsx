import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      <Sidebar isOpen={isOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />
        
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;