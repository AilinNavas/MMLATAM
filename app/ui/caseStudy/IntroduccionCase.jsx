import React from 'react'
import Image from 'next/image'
import southsideEndodontics from '@/public/southsideEndodontics.jpeg'

const IntroduccionCase = () => {
    return (
        <section className='bg-[#0F0F11]'>
            <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center'>
                <header>
                    <h4 className='text-[#F7F7FA] font-semibold pb-12 text-3/5xl text-center'>Transforming Southside Endodontics’s Online Presence</h4>
                </header>

                <div className='flex flex-col lg:flex-row justify-center text-lg'>
                    <div className='lg:w-2/3 text-white leading-7 flex flex-col items-center  lg:mr-20 space-y-4'>
                        <p >Soutside Endodontics a reputable dental practice located in the heart of Fort Worth, faced significant challenges in attracting new patients.</p>
                        <p> Despite their high-quality services and excellent patient care, their online presence was limited, and they were struggling to appear in local search results.</p>
                        <p>They partnered with MUCHO<strong>MARKETING</strong> to improve their Local SEO and enhance their visibility among potential patients in the area.</p>
                    </div>
                    <div className='mt-6 lg:mt-0 lg:w-1/3'>
                        <Image src={southsideEndodontics} alt='Southside endodontics team' className='rounded-md' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default IntroduccionCase