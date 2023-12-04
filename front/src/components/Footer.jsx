import React from 'react'
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='flex items-center flex-col justify-center'>
        <div className='py-2 gap-1 flex flex-col w-full px-20 border-y-2 border-purple-500'>
            <h1 className='text-purple-500 text-xl font-semibold'>Academic News</h1>
            <h2 className='opacity-60'>Integrando instituições de ensino por meio de nóticias</h2> 
            <div className="grid grid-cols-3">
                <div className="blog">
                    <h1 className='font-bold'>Blog</h1>
                    <p>Quem somos?</p>
                    <p>Parceria</p>
                    <p>Sugestões</p>
                    <p>Contato</p>
                </div>
                <div className="blog">
                    <h1 className='font-bold'>Suporte</h1>
                    <p>Ajuda</p>
                    <p>Termos de privacidade</p>
                    <p>Termos de contato e responsabilidade</p>
                    <p>Termos de uso</p>
                </div>
                <div className="blog">
                    <h1 className='font-bold'>Contato</h1>
                    <div className='flex items-center gap-1'>
                        <FaWhatsapp className='text-3xl'/>
                        <p>(99) 99999 - 9999</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaInstagram className='text-3xl'/>
                        <p>@Academic News</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaFacebook className='text-3xl'/>
                        <p>@Academic News</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaYoutube className='text-3xl'/>
                        <p>Academic News</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-2'>
            Cleverson Cristian (Cris Dev) & Davi Vieira - 2023
        </div>
    </footer>
  )
}
