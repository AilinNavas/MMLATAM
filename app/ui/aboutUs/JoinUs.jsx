import React from 'react'
import ConctactUs from '../home/ConctactUs'

const JoinUs = () => {
    return (
        <section className='bg-white '>
            <div className='mx-auto max-w-7xl px-4 py-20 flex flex-col justify-center'>
                <header>
                    <h2 className='text-[#060606] font-semibold pb-12 text-3/5xl text-center'>Join Us on Our Journey
                    </h2>
                </header>

                <div className='space-y-4'>
                    <p className='text-[#060606]'>At MUCHO <strong>MARKETING</strong> we are passionate about helping dental practices thrive in the digital world. Our founders’ combined expertise in SEO and web design ensures that we deliver outstanding results that make a real impact. We invite you to join us on this journey and discover how we can help your practice reach new heights.
                    </p>
                   
                    <p>Let us help you create a powerful online presence that attracts, engages and retains patients.
</p>
                </div>
          
      

            </div>
            <ConctactUs />


        </section>
    )
}

export default JoinUs