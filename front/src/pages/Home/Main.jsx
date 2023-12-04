import React from 'react'

export default function Main() {
  return (
    <section className='h-[calc(100vh-64px)] flex items-center px-20'>
        <div className='max-w-xl flex flex-col gap-2'>
            <h1 className='text-3xl font-bold'>Transformando a educação no país</h1>
            <p>Dê à sua escola a voz que ela merece, inscreva-se agora e capacite sua instituição para liderar a narrativa educacional, transforme sua escola em um farol de conhecimento. Inscreva-se hoje e ilumine o caminho da educação</p>
            <div className='actions gap-4 flex'>
                <button className='text-purple-500 border-2 bg-white border-purple-500 p-2'>Cadastre a sua escola</button>
                <button className='text-green-500 border-2 bg-white border-green-500 p-2'>Se cadastre</button>
            </div>
        </div>
    </section>
  )
}
