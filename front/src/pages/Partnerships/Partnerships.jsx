import React from 'react'
import { GiEagleEmblem } from "react-icons/gi";
import { BsFillMouse2Fill } from "react-icons/bs";

export default function Partnerships() {
  return (
    <section className='flex justify-center  py-12'>
        <div className='container justify-center flex flex-col gap-8 items-center'>
            <div className="card max-w-5xl items-center p-4 card border-2 border-orange-400 flex justify-between">
                <div className=' flex flex-col gap-3'>
                    <h1 className='text-4xl text-orange-400 font-bold'>Sua aprovação é a nossa estratégia!</h1>
                    <p>Venha conhecer a plataforma do estratégia vestibulares, com todos os conteúdos necessários para que você tire 100% no vestibular que você deseja</p>
                    <button className='bg-orange-500 h-10 w-1/3 px-2 p-1 text-white rounded-md'>Confira a plataforma</button>
                </div>
                <GiEagleEmblem className='text-[300px]'/>
            </div>
            <div className="card max-w-5xl items-center p-4 card border-2 border-orange-400 flex justify-between">
                <div className=' flex flex-col gap-3'>
                    <h1 className='text-4xl text-purple-400 font-bold'>O melhor curso para os concursos</h1>
                    <p>A melhor plataforma de cursos de concursos. Veja as nossas aulas demonstrativas e consiga a sua classificação, conheça o estratégia concursos.</p>
                    <button className='bg-purple-500 h-10 w-1/3 px-2 p-1 text-white rounded-md'>Confira a plataforma</button>
                </div>
                <GiEagleEmblem className='text-[300px] text-purple-500'/>
            </div>
            <div className="card max-w-5xl items-center p-4 card border-2 border-orange-400 flex justify-between">
                <div className=' flex flex-col gap-3'>
                    <h1 className='text-4xl text-green-700 font-bold'>Líder no que vale, a classificação</h1>
                    <p>O melhor material para os concursos militares, com aulas, apostilas, corretores de redação e muito mais. Confira agora, o estratégia militares e garanta a sua vaga na próxima classificação</p>
                    <button className='bg-green-700 h-10 w-1/3 px-2 p-1 text-white rounded-md'>Confira a plataforma</button>
                </div>
                <GiEagleEmblem className='text-[300px] text-green-700'/>
            </div>
            <div className="card max-w-5xl items-center p-4 card border-2 border-orange-400 flex justify-between">
                <div className=' flex flex-col gap-3'>
                    <h1 className='text-4xl text-blue-500 font-bold'>Secretária Escolar Digital</h1>
                    <p>Retire suas possíveis dúvidas no site da Secretaria Escolar Digital, lembre-se de utilizar o seu RA ou RG e a sua senha escolar ou própria, caso tenha problemas na verificação entre em contato com a sua escola, ela poderá auxília-lo no processo de login na SED.</p>
                    <button className='bg-blue-500 h-10 w-1/3 px-2 p-1 text-white rounded-md'>Confira a plataforma</button>
                </div>
                <BsFillMouse2Fill className='text-[300px] text-blue-500'/>
            </div>
        </div>
    </section>
  )
}
