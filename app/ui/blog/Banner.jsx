import React from 'react'
import Logo from '../general/Logo'

const Banner = ({text}) => {
  return (
    <div className='bg-black'>
        <div className='flex flex-col justify-center items-center min-h-[200px] max-h-[340px] text-center'>
        <Logo/>
        <p className='max-w-[600px] mt-7 mx-auto text-center text-xl text-white'>{text}</p>
        </div>
    </div>
  )
}

export default Banner