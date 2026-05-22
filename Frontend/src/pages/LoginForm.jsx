import api from "../api/api.js";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/slice.js";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const nav = useNavigate();
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await api.post("/users/login", formData);
      console.log("Login successful");

      setLogin(res.data.user);
      dispatch(loginSuccess(res.data.user));

      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    } catch (error) {
      console.log("Login error!", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950/70">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-serif font-bold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <div className="flex items-center justify-between text-sm font-serif">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>

            <h1 className="underline cursor-pointer text-blue-500">
              Forgot Password?
            </h1>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 font-serif rounded-md transition duration-300 font-semibold cursor-pointer"
          >
            Login
          </button>

          <p className="font-serif text-sm flex justify-center">
            Don't have an account?
            <span
              className="font-bold cursor-pointer underline text-blue-500"
              onClick={() => nav("/RegisterForm")}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
