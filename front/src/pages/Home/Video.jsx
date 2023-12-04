import React from 'react'

export default function Video() {
  return (
    <section className='flex border-y-2 border-purple-500 py-32 items-center justify-center text-center'>
        <div className='max-w-xl flex flex-col gap-4'>
            <h1 className='text-2xl after:w-full after:h-[2px] after:bg-purple-500 after:absolute relative after:bottom-[0] after:left-0'>Veja como a Academic News pode te ajudar a se informar</h1>
            <iframe className='border-4 rounded-md border-purple-500' width="560" height="315" src="https://www.youtube.com/embed/mvckeBBjEcI?si=oA8Rw58miRrnB-y5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </section>
  )
}
