import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950/70 py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-serif font-bold text-center mb-6">
          Register Here
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
              First Name
            </label>

            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
              className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
              <MdPhone className="text-sm text-black" />
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
              <MdEmail className="text-sm text-black" />
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
              <RiLockPasswordFill className="text-sm text-black" />
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 font-serif rounded-md transition duration-300 font-semibold"
          >
            Register
          </button>

          <p className="font-serif text-sm flex justify-center gap-1">
            Already have an account?
            <span
              className="font-bold cursor-pointer underline text-blue-500"
              onClick={() => nav("/LoginForm")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
