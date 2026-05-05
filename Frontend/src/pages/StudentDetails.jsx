import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStudent = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/students/getStudent/${id}`,
      );
      console.log(res.data);
      setStudent(res.data.student);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  if (loading) return <h1 className="text-center mt-10">Loading...</h1>;
  if (!student) return <h1 className="text-center mt-10">No data found</h1>;

  return (
    <div className="pt-10 px-10 flex justify-center">
      <div className="w-full max-w-xl bg-white/60  rounded-2xl shadow-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center gap-6">
          <img
            src={
              student.photo ||
              "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            }
            alt="student"
            className="w-32 h-32 rounded-full object-cover border-4 border-slate-200 shadow-md"
          />

          <div className="flex flex-col gap-2 text-gray-700 font-serif">
            <h1 className="text-lg font-semibold">
              <span className="font-bold text-black">Name:</span>
              {student.first_name} {student.last_name}
            </h1>
            <h1>
              <span className="font-bold text-black">Gender:</span>
              {student.gender}
            </h1>
            <h1>
              <span className="font-bold text-black">Email:</span>
              {student.email}
            </h1>
            <h1>
              <span className="font-bold text-black">Phone:</span>
              {student.phone}
            </h1>
            <h1>
              <span className="font-bold text-black">Address:</span>
              {student.address}
            </h1>
            <h1>
              <span className="font-bold text-black">Course:</span>
              {student.course}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
