import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api.js";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaImage } from "react-icons/fa";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  gender: Yup.string().required("Gender is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(97|98)\d{8}$/,
      "Phone number must start with 97 or 98 and be 10 digits",
    ),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  course: Yup.string().required("Course is required"),
  teacher: Yup.string().required("Teacher is required"),
  payment_status: Yup.string().required("Payment status is required"),
});

const StudentForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { id } = useParams();
  const isEditMode = Boolean(id);
  const nav = useNavigate();

  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    course: "",
    teacher: "",
    payment_status: "",
    image: null,
    existingImage: null,
  });
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const fetch_Students_Courses = async () => {
      setLoading(true);
      try {
        const teacher_res = await api.get("/teachers/getTeacher");
        const course_res = await api.get("/courses/getCourse");
        setTeachers(teacher_res.data.teachers);
        setCourses(course_res.data.courses);
      } catch (error) {
        console.log("Error fetching students, teachers or courses", error);
        alert("Failed to load students, teachers or courses");
      } finally {
        setLoading(false);
      }
    };
    fetch_Students_Courses();

    if (!isEditMode) return;
    const fetchStudent = async () => {
      setLoadingData(true);
      try {
        const student_res = await api.get(`/students/getStudent/${id}`);
        const studentData = student_res.data.student;

        setInitialValues({
          first_name: studentData.first_name || "",
          last_name: studentData.last_name || "",
          gender: studentData.gender || "",
          phone: studentData.phone || "",
          email: studentData.email || "",
          address: studentData.address || "",
          course: studentData.course || "",
          teacher: studentData.teacher || "",
          payment_status: studentData.payment_status || "",
          image: null,
          existingImage: studentData.image || null,
        });
      } catch (error) {
        console.log("Error fetching student", error);
        alert("Failed to load student data");
      } finally {
        setLoadingData(false);
      }
    };
    fetchStudent();
  }, [id, isEditMode]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formdata = new FormData();

      formdata.append("first_name", values.first_name);
      formdata.append("last_name", values.last_name);
      formdata.append("gender", values.gender);
      formdata.append("phone", values.phone);
      formdata.append("email", values.email);
      formdata.append("address", values.address);
      formdata.append("course", values.course);
      formdata.append("teacher", values.teacher);
      formdata.append("payment_status", values.payment_status);

      if (values.image) {
        formdata.append("image", values.image);
      }

      if (isEditMode) {
        const res = await api.put(`/students/update/${id}`, formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (res.status === 200) {
          alert("Student updated successfully!");
        } else {
          alert("Failed to update student");
        }
      } else {
        const res = await api.post(`/students/createStudent`, formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (res.data.success) {
          alert("Student added successfully");
          resetForm();
        } else {
          alert("Failed to add Student");
        }
      }
      nav("/Student");
    } catch (error) {
      console.log(error.response?.data);
      console.log(error);
      alert("Something went wrong");
    }
  };
  if (loadingData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading student...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-300 overflow-x-hidden">
      <div
        className="flex-1 flex flex-col min-w-0"
        style={{ scrollbarGutter: "stable" }}
      >
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

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ resetForm, values, setFieldValue }) => (
                <Form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="first_name"
                        placeholder="Enter first name"
                        className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                        focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                        outline-none transition duration-200"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        name="last_name"
                        placeholder="Enter last name"
                        className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                        focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                        outline-none transition duration-200"
                      />
                      <ErrorMessage
                        name="last_name"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                        Gender
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                        focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                        outline-none transition duration-200"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </Field>
                      <ErrorMessage
                        name="gender"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Enter phone number"
                        className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                        focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                        outline-none transition duration-200"
                      />
                      <ErrorMessage
                        name="phone"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                        focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                        outline-none transition duration-200"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                        Address
                      </label>
                      <Field
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                        focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                        outline-none transition duration-200"
                      />
                      <ErrorMessage
                        name="address"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                      Select Course
                    </label>
                    <Field
                      as="select"
                      name="course"
                      className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                      focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                      outline-none transition duration-200"
                    >
                      <option value="">--Select Course--</option>
                      {courses.map((course) => (
                        <option key={course._id} value={course.Title}>
                          {course.Title}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="course"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                      Select Teacher
                    </label>
                    <Field
                      as="select"
                      name="teacher"
                      className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                      focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                      outline-none transition duration-200"
                    >
                      <option value="">--Select Teacher--</option>
                      {teachers.map((teacher) => (
                        <option key={teacher._id} value={teacher.first_name}>
                          {teacher.first_name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="teacher"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-serif font-bold mb-1 text-gray-700">
                      Payment Status
                    </label>
                    <Field
                      as="select"
                      name="payment_status"
                      className="w-full font-serif border border-gray-300 rounded-lg px-3 py-2 shadow-sm 
                      focus:ring-1 focus:ring-blue-500 focus:shadow-md focus:border-blue-500 
                      outline-none transition duration-200"
                    >
                      <option value="">Select Payment Status</option>
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Overdue">Overdue</option>
                      <option value="Partial">Partial</option>
                    </Field>
                    <ErrorMessage
                      name="payment_status"
                      component="p"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="font-semibold">Upload Image</label>

                    <div className="border-dashed border-2 p-5 text-center rounded">
                      <FaImage className="text-4xl mx-auto text-gray-400" />

                      <input
                        type="file"
                        onChange={(e) =>
                          setFieldValue("image", e.target.files[0])
                        }
                        className="mt-3"
                      />

                      {!values.image && !!initialValues.existingImage && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">
                            Current Image:
                          </p>
                          <img
                            src={`http://localhost:5000/uploads/${initialValues.existingImage}`}
                            className="w-32 h-32 object-cover rounded"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 active:scale-95 shadow-2xl transition-all duration-150"
                      onClick={() => resetForm()}
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
                </Form>
              )}
            </Formik>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentForm;
