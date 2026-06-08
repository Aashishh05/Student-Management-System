import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import api from "../api/api.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string(),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(97|98)\d{8}$/,
      "Phone number must start with 97 or 98 and be 10 digits",
    ),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const initialValues = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  password: "",
};

const Register = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const res = await api.post(`/users/register`, values);
      setSuccessMessage("User registered successfully!");
      resetForm();
      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    } catch (error) {
      console.log("Error registering user!", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950/70 py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-serif font-bold text-center mb-6">
          Register Here
        </h1>

        {successMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-green-500 text-white px-10 py-6 rounded-2xl shadow-2xl text-2xl font-bold font-serif animate-ping">
              {successMessage}
            </div>
          </div>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <div>
              <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
                First Name
              </label>
              <Field
                type="text"
                name="first_name"
                placeholder="Enter your first name"
                className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="first_name"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
                Last Name
              </label>
              <Field
                type="text"
                name="last_name"
                placeholder="Enter your last name"
                className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="last_name"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
                <MdPhone className="text-sm text-black" />
                Phone
              </label>
              <Field
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
                <MdEmail className="text-sm text-black" />
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 font-serif font-medium text-gray-700">
                <RiLockPasswordFill className="text-sm text-black" />
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border font-serif border-gray-300 p-3 rounded-md outline-none focus:ring-1 focus:ring-blue-300"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 font-serif rounded-md transition duration-300 font-semibold"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <p className="font-serif text-sm flex justify-center gap-1">
              Already have an account?
              <span
                className="font-bold cursor-pointer underline text-blue-500"
                onClick={() => nav("/Login")}
              >
                Login
              </span>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
