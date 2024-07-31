import React from 'react';
import Button from '../general/Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='w-[100vw] bg-[#191919]'>

      <div className='px-4 py-16 sm:px-6 xl:py-32 lg:px-8 mx-auto'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row'>
          <div className='md:w-1/2 flex flex-col justify-center md:space-y-4'>
            <span className='text-[#C30BB1] font-bold text-4xl md:text-5xl lg:text-7xl'>Creatividad.</span>
            <span className='text-white font-bold text-4xl md:text-5xl lg:text-7xl'>Innovación.</span>
            <span className='text-[#9391F4] font-bold text-4xl md:text-5xl lg:text-7xl'>Performance.</span>

          </div>
          <div className='md:w-1/2 hidden md:flex justify-center items-center'>
     
          </div>

        </div>

        <div className='max-w-7xl mx-auto'>
          <p className='text-white py-4 px-2 text-2xl'>Diseños web personalizados, sin plantillas, desarrollados para comunicar y vender, pensados para que te diferencies de tu competencia.</p>
          <Link href={'/get-a-quote'}>
          <Button text={'Cotizar proyecto'} especif={'rounded-md mx-2 my-4'} />
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Hero