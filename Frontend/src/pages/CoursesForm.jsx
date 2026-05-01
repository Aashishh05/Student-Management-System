import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

const CoursesForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [formdata, setFormdata] = useState({
    Title: "",
    Description: "",
    Duration: "",
    Basefee: "",
    Status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <div className="flex min-h-screen bg-slate-300 overflow-x-hidden">
      <div
        className={`${
          isOpen ? "w-80" : "w-0"
        } transition-all duration-300 ease-in-out shrink-0 overflow-hidden md:relative absolute z-50 h-full`}
      >
        <Sidebar isOpen={isOpen} />
      </div>

      <div
        className="flex-1 flex flex-col min-w-0"
        style={{ scrollbarGutter: "stable" }}
      >
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />

        <main className="flex-1 flex items-center justify-center p-6">
          <div
            className="w-full max-w-4xl bg-slate-100 rounded-2xl p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)]
            transition duration-300"
          >
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-serif font-semibold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Course Registration Form
              </h1>
              <p className="text-gray-500 font-serif text-s mt-1 mb-10 md:mb-20">
                Fill the course details below
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Title"
                    placeholder="Enter course title"
                    className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                    focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                    outline-none transition duration-200"
                    onChange={handleChange}
                    value={formdata.Title}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    name="Description"
                    placeholder="Enter course description"
                    className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                    focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                    outline-none transition duration-200"
                    onChange={handleChange}
                    value={formdata.Description}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="Duration"
                    placeholder="Enter course duration"
                    className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                    focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                    outline-none transition duration-200"
                    onChange={handleChange}
                    value={formdata.Duration}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                    Base Fee
                  </label>
                  <input
                    type="text"
                    name="Basefee"
                    placeholder="Enter course base fee"
                    className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                    focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                    outline-none transition duration-200"
                    onChange={handleChange}
                    value={formdata.Basefee}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                  Status
                </label>
                <select
                  name="Status"
                  className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                  focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                  outline-none transition duration-200"
                  onChange={handleChange}
                  value={formdata.Status}
                  required
                >
                  <option value="">--Status--</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-200 shadow-sm"
                  onClick={() =>
                    setFormdata({
                      Title: "",
                      Description: "",
                      Duration: "",
                      Basefee: "",
                      Status: "",
                    })
                  }
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursesForm;
