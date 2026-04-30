import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './component/MainLayout'
import StudentForm from './pages/StudentForm'
import TeacherForm from './pages/TeacherForm'
import CoursesForm from './pages/CoursesForm'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<MainLayout />}/>
        <Route path='/StudentForm' element={<StudentForm />} />
        <Route path='/TeacherForm' element={<TeacherForm />} />
        <Route path='/CoursesForm' element={<CoursesForm />} />
      </Routes>
    </div>
  )
}

export default App