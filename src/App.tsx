import { useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import ShowInfo from './components/ShowInfo'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import ProductPage from './pages/Product'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='product' element={<h1>Product Page</h1>}/>
        </Route>
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<Navigate to="dashboard" />}/>
          <Route path='dashboard' element={<h1>Dashboard Page</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

/**
 * B1: npm i react-router-dom
 * B2: wrapper các ứng dụng sử dụng react-router-dom:
 *  - Truy cập file main.tsx :
 *    + import { BrowserRouter } from 'react-router-dom';
 *    + <BrowserRouter><App /></BrowserRouter>
 * B3: Sử dụng Component Routes, Route, NavLink
 */