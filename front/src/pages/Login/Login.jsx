import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../../components/NavBar'
import FormLoginStudent from './FormLoginStudent'
import FormLoginAdministrator from './FormLoginAdministrator'
import { IoChevronBackCircle } from "react-icons/io5";

export default function Login() {

  const [selectTypeUser, setSelectTypeUser] = useState(null)
 
  return (
    <>
    <NavBar/>
     <section className='flex mont flex-col justify-center items-center h-[calc(100vh-64px)]'>
        {selectTypeUser === null && 
        <>
        <p>Qual o seu tipo de conta?</p>
        <div className='flex gap-4'>
          <button className='border-purple-500 border-2 px-6 py-1' onClick={() => setSelectTypeUser('student')}>Aluno</button>
          <button className='border-purple-500 border-2 px-6 py-1' onClick={() => setSelectTypeUser('professor')}>Agente Escolar</button>
        </div>
        </>}
        {selectTypeUser === 'student' && <FormLoginStudent/>}
        {selectTypeUser === 'professor' && <FormLoginAdministrator/>}
        <div className='flex justify-center items-center mt-2'>
          {selectTypeUser !== null && <button className=' flex items-center' onClick={() => setSelectTypeUser(null)}><p>Voltar</p><IoChevronBackCircle className='text-3xl'/></button>}
        </div>
    </section>   
    </>

  )
}
