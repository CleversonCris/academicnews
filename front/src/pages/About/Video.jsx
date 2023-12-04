import React from 'react'

export default function Video() {

  return (
    <section className='flex justify-center py-20'>
        <div className='flex gap-2 flex-col'>
            <h1 className='text-center text-2xl font-medium text-purple-500'>Descubra mais informações sobre o portal</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0xrCPc6TWL4?si=tEckbCKDc-8JVOAp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </section>

  )
}
