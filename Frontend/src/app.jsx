import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './component/MainLayout'
import StudentForm from './pages/StudentForm'
import TeacherForm from './pages/TeacherForm'
import CoursesForm from './pages/CoursesForm'
import Dashboard from './pages/Dashboard'
import Student from './pages/Student'
import Teacher from './pages/Teacher'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<MainLayout />}/>
        <Route index element={<Dashboard />} />
        <Route path='/StudentForm' element={<StudentForm />} />
        <Route path='/TeacherForm' element={<TeacherForm />} />
        <Route path='/CoursesForm' element={<CoursesForm />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Student' element={<Student />} />
        <Route path='/Teacher' element={<Teacher />} /> 
      </Routes>
    </div>
  )
}

export default App