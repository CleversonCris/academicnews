import React from 'react'

export default function Options() {
  return (
    <nav className='flex w-96 py-12 gap-8 flex-col px-12 border-r-2 h-[calc(100vh-64px)] border-purple-500'>
    <div className="profile flex items-center gap-4">
      <img className='w-14 h-14 rounded-full border-2' src="" alt="" />
      <h1 className='text-xl'>My Name is</h1>
    </div>
    <ul className='options w-full flex items-center flex-col gap-4 text-[18px] text-white'>
      <li className='w-full'>
        <button className='bg-purple-500 w-full h-10 rounded-lg'>
          Minhas notícias
        </button>
      </li>
      <li className='w-full'>
        <button className='bg-purple-500 w-full h-10 rounded-lg'>
          Notícias da minha escola
        </button>
      </li>
      <li className='w-full'>
        <button className='bg-purple-500 w-full h-10 rounded-lg'>
          Criar notícias
        </button>
      </li>
      <li className='w-full'>
        <button className='bg-purple-500 w-full h-10 rounded-lg'>
          Configurações
        </button>
      </li>
    </ul>
</nav>
  )
}
