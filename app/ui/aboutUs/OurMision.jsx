import React from 'react'
import Image from 'next/image'
import juntos from '@/public/juntos.jpg'

const OurMision = () => {
  return (
   <section className='bg-[#18181B] py-20'>
         
         <div className='mx-auto max-w-7xl  px-4 flex flex-col justify-center'>
                <header>
                    <h2 className='text-[#F7F7FA] font-semibold pb-12 text-3/5xl text-center'>Our Mission
</h2>
                </header>

                <div className='text-white space-y-4'>
                    <p >Founded on the belief that dental practices deserve better, MUCHO<strong>MARKETING</strong> aims to revolutionize the dental marketing industry. We provide personalized, high-quality services that help our clients achieve their goals and grow their practices. </p>
                    <p>By combining Joel’s SEO expertise and Ailin’s web design prowess, we offer a holistic approach to online marketing that delivers real, tangible results.</p>
                </div>
                <Image src={juntos} alt='Team Mucho Marketing' className='py-8'/>
            </div>

   </section>
  )
}

export default OurMision