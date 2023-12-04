import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import PartnershipsMain from './pages/Partnerships/PartnershipsMain'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import DoLogin from './components/DoLogin'
import School from './pages/School/School'
import { Context } from './context/AuthContext'
import Dashboard from './pages/Dashboard/Dashboard'
import { AuthProvider } from './context/AuthContext'
import CreateNotice from './pages/Dashboard/CreateNotice'
import Notices from './pages/Notices/Notices'
function App() {

  const {authenticated, admin} = useContext(Context)

 
    console.log(admin)

  return (
      <Router>
            <Routes>
                  <Route element={<Home/>} path='/'/>
                  <Route element={<PartnershipsMain/>} path='/parcerias'/>
                  <Route element={<About/>} path='/sobrenos'/>
                  <Route element={!authenticated ? <Login/> : <Navigate to='/'/>} path='/login'/>
                  <Route element={authenticated ? <School/> : <Navigate to='/'/>} path='/school/:id'/>
                  <Route element={authenticated && admin ? <Dashboard/> : <Navigate to='/'/>} path='dashboard'>
                    <Route element={authenticated && admin ? <CreateNotice/> : <Navigate to='/'/>} path='createnotice'/>
                  </Route>
                  <Route element={<Notices/>} path='/notices/school/:id'/>
            </Routes>

      </Router>  
  )
}

export default App
