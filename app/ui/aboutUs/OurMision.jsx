import React from 'react'
import Image from 'next/image'
import juntos from '@/public/juntos.jpg'

const OurMision = () => {
  return (
   <section className='bg-[#18181B] py-20'>
         
         <div className='mx-auto max-w-7xl  px-4 flex flex-col justify-center'>
                <header>
                    <h2 className='text-[#F7F7FA] font-semibold pb-12 text-3/5xl text-center'>Nuestra misión
</h2>
                </header>

                <div>
                    <p className='text-white'>Fundada en la creencia de que las prácticas dentales merecen algo mejor, MUCHO <strong>MARKETING</strong> tiene como objetivo revolucionar la industria del marketing dental. Brindamos servicios personalizados y de alta calidad que ayudan a nuestros clientes a lograr sus objetivos y hacer crecer sus prácticas. Al combinar la experiencia en SEO de Joel y la destreza en diseño web de Ailin, ofrecemos un enfoque holístico del marketing online que ofrece resultados reales y tangibles
                    </p>
          
                </div>
                <Image src={juntos} alt='Team Mucho Marketing' className='py-8'/>
            </div>

   </section>
  )
}

export default OurMision