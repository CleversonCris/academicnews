import React from 'react'

export default function LastNotices() {
  return (
    <section className='flex py-24 flex-col justify-center items-center gap-4'>
        <h1 className='text-2xl'>Veja as últimas informações divulgadas na plataforma</h1>
        <div className='grid gap-12 grid-cols-3 max-w-6xl'>
            <div className='card p-4 gap-1 flex justify-between flex-col border-purple-500 border-2'>
                <img className='w-full object-cover h-48' src="/NM - 08 1.png" alt="" />
                <div>
                    <p className='opacity-60'>25 de outubro de 2023 | 15 comentários</p>
                    <p>Contagem regresiva para o ENEM, jovens aguardam a chegada da semana da prova com ansiedade, veja como diminuir a ansiedade e como não perder a prova com as dicas desse post</p>
                </div>
                <button className='bg-purple-500 text-white px-4 h-8 font-regular w-1/2 rounded-md'>Ver nóticia</button>
            </div>
            <div className='card p-4 gap-1 flex justify-between flex-col border-purple-500 border-2'>
                <img className='w-full object-cover h-48' src="/PN - 03 1.png" alt="" />
                <div>
                    <p className='opacity-60'>25 de outubro de 2023 | 15 comentários</p>
                    <p>Contagem regresiva para o ENEM, jovens aguardam a chegada da semana da prova com ansiedade, veja como diminuir a ansiedade e como não perder a prova com as dicas desse post</p>
                </div>
                <button className='bg-purple-500 text-white px-4 h-8 font-regular w-1/2 rounded-md'>Ver nóticia</button>
            </div>
            <div className='card p-4 gap-1 flex justify-between flex-col border-purple-500 border-2'>
                <img className='w-full object-cover h-48' src="/Categoria - Administração 1.png" alt="" />
                <div>
                    <p className='opacity-60'>25 de outubro de 2023 | 15 comentários</p>
                    <p>Contagem regresiva para o ENEM, jovens aguardam a chegada da semana da prova com ansiedade, veja como diminuir a ansiedade e como não perder a prova com as dicas desse post</p>
                </div>
                <button className='bg-purple-500 text-white px-4 h-8 font-regular w-1/2 rounded-md'>Ver nóticia</button>
            </div>
        </div>
    </section>
  )
}
