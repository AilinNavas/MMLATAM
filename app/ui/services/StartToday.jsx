import React from 'react'
import Button from '../general/Button'

const StartToday = ({ goals, startToday }) => {
  return (
    <section className='bg-white pt-20 '>

      <div className='mx-auto max-w-7xl px-4'>
        <header>
          <h2 className='text-black text-3/5xl font-bold text-center'>Tus objetivos son nuestros objetivos</h2>
          <div className='text-lg leading-8 font-normal text-left w-full mt-5'>
            <p>{goals}</p>
          </div>
        </header>

        <div className='pt-20'>
          <h2 className='text-black text-3/5xl font-bold text-center'>Comenzar hoy</h2>
          <div className='text-lg leading-8 font-normal text-left w-full mt-5'>
            <p>{startToday}</p>
          </div>

        </div>

      </div>
      <div className="flex justify-center items-end w-full pt-16 lg:pb-20">
        <Button  text={"Obtener una consulta gratuita"} especif={'rounded-none w-full lg:max-w-96 lg:rounded-md px-0'} />
      </div>


    </section>
  )
}

export default StartToday