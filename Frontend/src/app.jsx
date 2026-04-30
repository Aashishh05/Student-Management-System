import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './component/MainLayout'
import StudentForm from './pages/StudentForm'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<MainLayout />}/>
        <Route path='/StudentForm' element={<StudentForm />} />
      </Routes>
    </div>
  )
}

export default App