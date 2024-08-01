import React from 'react'
import Accordion from './Accordion.jsx'


const OfferServices = ({introductionOffer, tactics}) => {
  return (
    <section id='why-section'  className='bg-white py-20 px-4 '>
      <div className='lg:w-10/12 lg:m-auto'>
        <header>
          <h2 className='text-black text-3/5xl font-bold text-center'>¿Qué ofrecemos?</h2>
          <div className='text-lg text-black lg:text-xl font-normal text-center w-full mt-5'>
            <p>{introductionOffer}</p>
          </div>
        </header>
      </div>
      <Accordion items={tactics} />

    </section>
  )
}

export default OfferServices