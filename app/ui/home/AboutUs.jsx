import React from 'react'

const AboutUs = () => {
  return (
    <section className='bg-[#0F0F11]'>
      <div className='mx-auto max-w-7xl py-12 px-4 flex flex-col justify-center'>
        <header>
          <h2 className='text-[#F7F7FA] font-semibold pb-12 text-3/5xl text-center'>Conocé Mucho Marketing</h2>
        </header>

        <div className='rounded-2xl overflow-hidden aspect-video'>
        <iframe src="https://www.loom.com/embed/d8e96ab640674dd5a489d08c88c00baa?sid=c8087434-05f9-45a8-8592-f271c1205708"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  referrerPolicy="strict-origin-when-cross-origin" className='w-full h-full'></iframe>
          {/* <iframe className='w-full h-full' src="https://www.youtube.com/embed/mkEf-1pXdaM?si=5jtglqSduojJk5H1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen illow-src="https://www.youtube.com/embed/mkEf-1pXdaM?si=5jtglqSduojJk5H1"></iframe> */}
        </div>
      </div>
    </section>
  )
}

export default AboutUs