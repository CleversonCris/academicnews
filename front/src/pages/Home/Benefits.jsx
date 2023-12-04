import React from 'react'
import { IoMdAirplane } from "react-icons/io";
import { MdOutlineTouchApp } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";

export default function Benefits() {
  return (
    <section className='flex py-24 items-center gap-4 flex-col justify-center'>
        <h1 className='text-2xl'>Vantagens da <span className='text-purple-500'>Plataforma</span></h1>
        <div className="grid p-6 border-purple-500 border-2 rounded-xl grid-cols-3 max-w-7xl gap-12">
            <div className="card gap-1 flex flex-col justify-center items-center">
                <IoMdAirplane className='text-7xl text-purple-500'/>
                <h1 className='text-xl font-bold'>Desempenho</h1>
                <p>Mazimize o desempenho do seu site de notícias com nossa plataforma ágil e otimizada, oferecendo carregamento rápido, escalabilidade e análises robustas para manter seu público envolvido</p>
            </div>
            <div className="card gap-1 flex flex-col justify-center items-center">
                <MdOutlineTouchApp className='text-7xl text-purple-500'/>
                <h1 className='text-xl font-bold'>Desempenho</h1>
                <p>Priorizamos a usabilidade, tornando a gestãode conteúdo intuitiva para que os jovens possam focar na criação de notícias de alta qualidade, sem obstáculos técnicos.</p>
            </div>
            <div className="card gap-1 flex flex-col justify-center items-center">
                <BsFillBarChartLineFill className='text-7xl text-purple-500'/>
                <h1 className='text-xl font-bold'>Desempenho</h1>
                <p>Desfrute de um dashboard de gerenciamento de notícias simples e poderosa, projetada para simplificar a publicação, programação  e personalização do conteúdo do seu site de notícias.</p>
            </div>
        </div>
    </section>
  )
}
