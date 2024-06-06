import React from 'react';
import Button from '../general/Button';

const HeroService = ({ nameService, colorService, descriptiveTitle}) => {
  return (
    <div className='w-[100vw] bg-black'>

      <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 mx-auto max-w-7xl'>
        <div className='relative'>
          <span className={` ${colorService} text-white absolute -top-20  py-3 px-6 text-lg leading-7 font-medium rounded-full`} >{nameService}</span>
          <h3 className='text-white font-bold text-center text-4xl tracking-tight md:text-5xl lg:text-6xl space-y-2'>
          {descriptiveTitle}
          </h3>
          {/* <div className='mt-5 max-w-sm mx-auto flex-col space-y-4 md:flex-row flex justify-center items-center md:mt-8 lg:px-4 md:space-x-4 md:space-y-0'>
            <Button />
            <Button />
            {/* <button className='bg-white text-base leading-5 text-black font-semibold py-3 px-6 rounded-md w-full'>Hire Now</button>
            <button className='bg-transparent leading-5 text-base text-white border-2 border-white font-semibold py-3 px-6 rounded-md w-full'>Know more</button> */}
          {/* </div> */} 
          <div className='mt-5 max-w-sm mx-auto flex-col md:flex-row flex justify-center items-center md:mt-8 lg:px-2'>
            <Button bg={'bg-white'} bgHover={'hover:bg-gray-300'} text={'Empezar hoy'} textColor={'text-black'} especif={'m-1 px-0'} />
            <Button bg={'bg-transparent'}text={'Conocer más'} textColor={'text-white'} especif={'m-1 border-2 border-white px-0'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroService