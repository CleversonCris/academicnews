import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoChevronBackCircle } from "react-icons/io5";

export default function FormLoginStudent() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const login = async(e) => {
      e.preventDefault()
      axios.post('http://localhost:3008/loginstudent', {
          email,
          password
      }).then(response => {
        setMessage(response.data.msg)

        if(response.data.token){
            setError(false)
            localStorage.setItem('auth_token', response.data.token)
        } else {
            setError(true)
        }
      })
  
      
    }
    return (
        <>
            <h1 className='text-2xl'>Login (Aluno)</h1>
            <div className='flex flex-col relative'>
                <form action="" onSubmit={login} className='flex max-w-[300px] p-2 border-2 border-purple-500 flex-col gap-2'>
                    <label htmlFor="" className='flex flex-col'>
                        <span>Email:</span>
                        <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" className='border-2'/>
                    </label>
                    <label htmlFor="" className='flex flex-col'>
                        <span>Senha:</span>
                        <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" className='border-2'/>
                    </label>
                    <button className='bg-purple-500 h-8 text-white'>Login</button>
                    <p className='text-center'>Caso não tenha uma conta na Academic News, informe à sua unidade escolar para criar uma </p>
                    {message && <button className={`${error && 'bg-red-500'} ${!error && 'bg-green-500'} text-white h-8`}>{message}</button>}
                </form>
            </div> 
        </>
    
      )
}
