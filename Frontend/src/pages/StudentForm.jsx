import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";

const StudentForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { id } = useParams();
  console.log(id);
  const isEditMode = Boolean(id);
  const nav = useNavigate();

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

  const ResetForm = () => {
    setFormdata({
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
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [lodaing, setLodaing] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const fetch_Students_Courses = async () => {
      setLodaing(true);
      try {
        const teacher_res = await axios.get(
          "http://localhost:5000/api/teachers/getTeacher",
        );
        const course_res = await axios.get(
          "http://localhost:5000/api/courses/getCourse",
        );

        setTeachers(teacher_res.data.teachers);
        setCourses(course_res.data.courses);
      } catch (error) {
        console.log("Error fetching students, teachers or courses", error);
        alert("Failed to load students, teachers or courses");
      } finally {
        setLodaing(false);
      }
    };
    fetch_Students_Courses();

    if (!isEditMode) return;
    const fetchStudent = async () => {
      setLoadingData(true);
      try {
        const student_res = await axios.get(
          `http://localhost:5000/api/students/getStudent/${id}`,
        );
        setFormdata(student_res.data.student);
      } catch (error) {
        console.log("Error fetching student", error);
        alert("Failed to load student data");
      } finally {
        setLoadingData(false);
      }
    };
    fetchStudent();
  }, [id, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.first_name || !formdata.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formdata.email) {
      alert("Email required");
      return;
    }

    if (formdata.email && !/\S+@\S+\.\S+/.test(formdata.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (formdata.phone && !/^\d{10}$/.test(formdata.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      if (isEditMode) {
        const res = await axios.put(
          `http://localhost:5000/api/students/update/${id}`,
          formdata,
        );
        if (res.status === 200) {
          alert("Student updated successfully!");
        } else {
          alert("Failed to update student");
        }
      } else {
        const res = await axios.post(
          `http://localhost:5000/api/students/createStudent`,
          formdata,
        );
        if (res.data.success) {
          alert("Student added successfully");
          ResetForm();
        } else {
          alert("Failed to add Student");
        }
      }
      nav("/Student");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  if (loadingData)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

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
            <button
              onClick={() => nav("/Student")}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
             text-slate-700 bg-white border border-slate-300 rounded-lg 
             shadow-sm hover:shadow-md 
             hover:bg-slate-100 active:bg-slate-200 
             hover:scale-105 active:scale-95 
             transition-all duration-200 ease-in-out"
            >
              <IoArrowBack className="text-base" />
              Back
            </button>
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
                    outline-none transition duration-200 "
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
                  <option value="">--Select Course--</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course.Title}>
                      {course.Title}
                    </option>
                  ))}
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
                  <option value="">--Select Teacher--</option>

                  {teachers.map((teacher) => (
                    <option key={teacher._id} value={teacher.first_name}>
                      {teacher.first_name}
                    </option>
                  ))}
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
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Overdue">Overdue</option>
                  <option value="Partial">Partial</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 active:scale-95 shadow-2xl transition-all duration-150"
                  onClick={ResetForm}
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className={`px-5 py-2 rounded-lg text-white shadow-md active:scale-95 transition-all duration-150
      ${
        isEditMode
          ? "bg-teal-600 hover:bg-teal-700 hover:shadow-[0_4px_14px_rgba(15,118,110,0.4)] active:bg-teal-800"
          : "bg-blue-600 hover:bg-blue-700 hover:shadow-[0_4px_14px_rgba(37,99,235,0.4)] active:bg-blue-800"
      }`}
                >
                  {isEditMode ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentForm;
