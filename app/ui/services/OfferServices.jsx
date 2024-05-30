import React from 'react'

import Accordion from './Accordion.jsx'

const services = [
  {
    title: 'Custom Email Campaigns',
    content: 'Our email marketing services include personalized email campaigns tailored to your specific needs. Whether it is promoting a new service, sending appointment reminders, or sharing educational content, we create emails that resonate with your audience.'
  },
  {
    title: 'Referral Development',
    content: 'For specialists, we focus on developing and strengthening referral relationships. Our campaigns highlight your expertise and success stories, making it easy for general dentists to refer patients to you with confidence.'
  },
  {
    title: 'Patient Retention Strategies',
    content: 'We help you stay connected with your patients through regular newsletters, follow-up emails, and special promotions. Keeping your practice top-of-mind ensures patients return for their routine visits and choose your services for any new dental needs.'
  },
  {
    title: 'Performance Analytics',
    content: 'Track the success of your email campaigns with detailed analytics. We provide insights on open rates, click-through rates, and conversions, allowing you to see the real impact on your practice’s growth.'
  },
];


const OfferServices = () => {
  return (
    <section className='bg-white py-20 px-4 '>
      <div className='lg:w-10/12 lg:m-auto'>
        <header>
          <h2 className='text-black text-3/5xl font-bold text-center'>What We Offer?</h2>
          <div className='text-lg text-black lg:text-xl font-normal text-center w-full mt-5'>
            <p>Transform your practice with the power of email marketing.</p>
          </div>
        </header>
      </div>
      <Accordion items={services} />

    </section>
  )
}

export default OfferServices