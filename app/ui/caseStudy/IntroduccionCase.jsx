import React from 'react'
import Image from 'next/image'
import southsideEndodontics from '@/public/southsideEndodontics.jpeg'

const IntroduccionCase = () => {
    return (
        <section className='bg-[#0F0F11]'>
            <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center'>
                <header>
                    <h4 className='text-[#F7F7FA] font-semibold pb-12 text-3/5xl text-center'>Transformación de la presencia en línea de Southside Endodontics</h4>
                </header>

                <div className='flex flex-col lg:flex-row justify-center text-lg'>
                    <div className='lg:w-2/3 text-white leading-7 flex flex-col items-center  lg:mr-20 space-y-4'>
                        <p >Soutside Endodontics, una reputada clínica dental situada en el corazón de Fort Worth, se enfrentaba a importantes retos a la hora de atraer a nuevos pacientes.</p>
                        <p>A pesar de sus servicios de alta calidad y su excelente atención al paciente, su presencia en línea era limitada y les costaba aparecer en los resultados de búsqueda locales. </p>
                        <p>Se asociaron con MUCHO<strong>MARKETING</strong> para mejorar su SEO Local y aumentar su visibilidad entre los pacientes potenciales de la zona.</p>
                    </div>
                    <div className='mt-6 lg:mt-0 lg:w-1/3'>
                        <Image src={southsideEndodontics} alt='Southside endodontics team' className='rounded-md' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default IntroduccionCase