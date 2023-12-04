import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import NavBar from '../../components/NavBar';
import { ContextTheme } from '../../context/ThemeProvider';
import { useContext } from 'react';
export default function Dashboard() {
  const {theme} = useContext(ContextTheme)
  const [user, setUser] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    axios.post('http://localhost:3008/getprofileadministrator', {
        token
    }).then(response => {
        if(response.data.user){
            setUser(response.data.user)
        }
    })
  }, [])

  return (
    <div>
        <div>
            <NavBar/>

            <Outlet/>
          </div>
    </div>
  )
}
