import React from 'react'

export default function SearchInstitution() {
  return (
    <section className='flex justify-center py-12'>
        <div className='max-w-2xl flex flex-col gap-4 text-center'>
            <h1 className='text-2xl'>Procure a sua escola, universidade ou colégio</h1>
            <p>Busque a instituição de ensino em que você faz parte com o nosso sistema de procura, coloque suas informações nos campos e clique em procurar</p>
            <div className="actions gap-6 grid grid-cols-3 w-full">
                <button className='bg-purple-500 text-white py-2 rounded-md'>Nome da Instituição</button>
                <button className='bg-purple-500 text-white py-2 rounded-md'>Tipo de Instituição</button>
                <button className='bg-purple-500 text-white py-2 rounded-md'>Pesquisar Instituição</button>
            </div>
        </div>
    </section>
  )
}
