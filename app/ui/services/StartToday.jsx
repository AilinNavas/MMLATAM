import React from 'react'
import Button from '../general/Button'

const StartToday = ({ goals, startToday }) => {
  return (
    <section className='bg-white pt-20 '>

      <div className='mx-auto max-w-7xl px-4'>
        <header>
          <h2 className='text-black text-3/5xl font-bold text-center'>Achieve Your Goals</h2>
          <div className='text-lg leading-8 font-normal text-left w-full mt-5'>
            <p>{goals}</p>
          </div>
        </header>

        <div className='pt-20'>
          <h2 className='text-black text-3/5xl font-bold text-center'>Start Today</h2>
          <div className='text-lg leading-8 font-normal text-left w-full mt-5'>
            <p>{startToday}</p>
          </div>
          {/* <div className='flex items-center justify-center mt-20'> */}
          {/* <button className='bg-lime-500 px-6 py-3 font-semibold rounded-md hover:bg-lime-600'> Get Your Free Consultation</button> */}

        </div>



      </div>
      <div className="flex justify-center items-end w-full pt-16 md:pb-20">
        <Button bg={'bg-lime-500'} bgHover={'hover:bg-lime-600'} text={"Get Your Free Consultation"} textColor={'text-white'} especif={'rounded-none lg:max-w-80 lg:rounded-md'} />
      </div>


    </section>
  )
}

export default StartToday