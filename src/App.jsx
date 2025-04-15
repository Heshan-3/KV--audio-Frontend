import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/homePage'
import Login from './pages/login/login'
import { Toaster } from 'react-hot-toast'
import AdminPage from './pages/admin/adminPage'

function App() {

  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
        
    </BrowserRouter>
  )
}

export default App
