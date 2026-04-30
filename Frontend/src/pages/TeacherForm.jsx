import React from "react";

const TeacherForm = () => {
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
            Teacher Registration Form
          </h1>
          <p className="text-gray-500 font-serif text-s mt-1 mb-20">
            Fill your professional detail below
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="Enter first name"
                required
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Enter last name"
                required
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
                Gender
              </label>
              <select
                name="gender"
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                required
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                required
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
              />
            </div>
          </div>

          {/* Courses */}
          <div>
            <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
              Courses
            </label>
            <input
              type="text"
              name="courses"
              placeholder="Math, Science"
              required
              className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
              focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
              outline-none transition duration-200"
            />
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

export default TeacherForm;