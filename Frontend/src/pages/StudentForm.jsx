import React, { useState } from "react";

const StudentForm = () => {
  const [formdata, setFormdata] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    course: "",
    teacher: "",
    payment_status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata)
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300 p-6">
      <div
        className="w-full max-w-4xl bg-slate-100 rounded-2xl p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)]
        transition duration-300"
      >
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-serif font-semibold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Student Enrollment Form
          </h1>
          <p className="text-gray-500 font-serif text-s mt-1">
            Fill the student information below
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                required
                placeholder="Enter first name"
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
                onChange={handleChange}
                value={formdata.first_name}
              />
            </div>

            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                required
                placeholder="Enter last name"
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
                onChange={handleChange}
                value={formdata.last_name}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Gender
              </label>
              <select
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
                name="gender"
                required
                onChange={handleChange}
                value={formdata.gender}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                required
                placeholder="Enter phone number"
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
                onChange={handleChange}
                value={formdata.phone}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
                onChange={handleChange}
                value={formdata.email}
              />
            </div>

            <div>
              <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Enter your address"
                className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                outline-none transition duration-200"
                onChange={handleChange}
                value={formdata.address}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
              Select Course
            </label>
            <select
              className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
              focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
              outline-none transition duration-200"
              name="course"
              onChange={handleChange}
              required
              value={formdata.course}
            >
              <option>--Select Course--</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
              Select Teacher
            </label>
            <select
              className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
              focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
              outline-none transition duration-200"
              name="teacher"
              onChange={handleChange}
              value={formdata.teacher}
              required
            >
              <option>--Select Teacher--</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
              Payment Status
            </label>
            <select
              className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
              focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
              outline-none transition duration-200"
              name="payment_status"
              onChange={handleChange}
              value={formdata.payment_status}
              required
            >
              <option>Select Payment Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
              <option>Partial</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-200 shadow-sm"
              onClick={() => ({
                first_name: "",
                last_name: "",
                gender: "",
                phone: "",
                email: "",
                address: "",
                course: "",
                teacher: "",
                payment_status: "",
              })}
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
    </div>
  );
};

export default StudentForm;
