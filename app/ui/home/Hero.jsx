import React from 'react'
import {archivo} from '@/app/layout'
import Image from 'next/image'
import banner from '../../../public/banner.jpeg'
import Button from '../general/Button'

const Hero = () => {
  return (
    <div className='w-[100vw]'>
      
        <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 mx-auto'>
          <div className=''>
          <h1 className='text-white font-bold text-center text-4xl tracking-tight md:text-5xl lg:text-6xl space-y-2'>
            <span className='block'>Never think about marketing</span> 
            <span className='block'>ever again</span> 
            </h1>
          <p className={` ${archivo.className} mt-6 mx-auto text-center text-xl text-white sm:max-w-3xl`}>Estrategias que convierten clics en clientes</p>
          <div className='mt-5 max-w-sm mx-auto flex-col md:flex-row flex justify-center items-center md:mt-8 lg:px-4'>
            <Button bg={'bg-violet-500'} bgHover={'hover:bg-violet-900'} text={'Averiguar'} textColor={'text-white'} especif={'m-1'} />
            <Button bg={'bg-white'} bgHover={'hover:bg-purple-200'} text={'Conocenos'} textColor={'text-violet-500'} especif={'m-1'}/>
          </div>
          </div>
        </div>
        <Image src={banner} alt='banner' quality={100} className='w-full h-full absolute top-12 -z-10 
        ' />
    </div>
  )
}

export default Hero