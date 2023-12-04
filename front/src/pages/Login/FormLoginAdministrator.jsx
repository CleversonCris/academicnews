import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function FormLoginAdministrator() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(false)
    const [error, setError] = useState(null)
  
    const login = async(e) => {
      e.preventDefault()
      await axios.post('http://localhost:3008/loginadministrator', {
          email,
          password
      }).then(response => {
        if(response.data.token){
            localStorage.setItem('auth_token', response.data.token)
            setError(false)
        } else {
            setError(true)
        }
        setMessage(response.data.msg)
        
      })

    }
    return (
        <>
         <h1 className='text-2xl'>Login (Agente Escolar)</h1>
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
                {error !== null && error === true && <button className='bg-red-500 text-white h-8'>{message}</button>}
                {error !== null && error === false && <button className='bg-green-500 text-white h-8'>{message}</button>}
            </form>
        </>
    
      )
}
