import React from 'react'
import NavBar from './NavBar'
export default function DoLogin() {
  return (
    <>
        <NavBar/>
        <section className='h-[calc(100vh-64px)] flex justify-center items-center'>
            <h1 className='text-3xl'>Por favor, faça login para ter acesso a essa página</h1>
        </section>
    </>
  )
}
