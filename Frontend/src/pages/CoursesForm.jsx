import React from "react";

const CoursesForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300 p-6">
      {/* Main Card */}
      <div
        className="w-full max-w-4xl bg-slate-100 rounded-2xl p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)]
        transition duration-300"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-serif font-semibold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Course Registration Form
          </h1>
          <p className="text-gray-500 font-serif text-s mt-1 mb-20">
            Fill the course details below
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Row 1 */}
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
              />
            </div>
          </div>

          {/* Row 2 */}
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
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
              Status
            </label>
            <select
              name="Status"
              className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
              focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
              outline-none transition duration-200"
            >
              <option>--Status--</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-200 shadow-sm"
            >
              Reset
            </button>

            <button
              type="button"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoursesForm;
