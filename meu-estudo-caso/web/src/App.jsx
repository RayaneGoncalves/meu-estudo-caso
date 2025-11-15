import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import StudentsList from './pages/StudentsList'
import StudentDetails from './pages/StudentDetails'
export default function App(){
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="brand">Meus Alunos</Link>
      </header>
      <Routes>
        <Route path="/" element={<StudentsList/>} />
        <Route path="/student/:id" element={<StudentDetails/>} />
      </Routes>
    </div>
  )
}
