import React from 'react';
import Image from 'next/image';
import email from '@/public/email.jpg'

const HeroService = () => {
  return (
    <div className='w-[100vw] bg-black'>

      <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 mx-auto'>
        <div className='relative'>
          <span className='bg-[#2B0CEA] text-white absolute -top-20  p-2 text-md font-semibold rounded-full'>Email Marketing</span>
          <h3 className='text-white font-bold text-center text-4xl tracking-tight md:text-5xl lg:text-6xl space-y-2'>
            Transform Your Dental Practice with Proven Email Marketing Strategies
          </h3>
          <div className='mt-5 max-w-sm mx-auto flex-col space-y-4 md:flex-row flex justify-center items-center md:mt-8 lg:px-4 md:space-x-4 md:space-y-0'>
            <button className='bg-white text-black font-semibold py-2 px-4 rounded-full w-full'>Contratar</button>
            <button className='bg-transparent text-white border-2 border-white font-semibold py-2 px-4 rounded-full w-full'>Ver Beneficios</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroService