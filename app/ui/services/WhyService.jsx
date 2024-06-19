
import React from 'react';
import Image from 'next/image';

const WhyService = ({ nameService, summaryService, urlImage , serviceBenefits, colorTextService = 'text-white' }) => {
console.log(nameService)
console.log(urlImage)
    return (
        <section className='bg-[#09090A] py-20'>
            <div className='mx-auto max-w-7xl px-4'>

                <div className="flex flex-col py-3 md:items-center md:flex-row  md:justify-evenly lg:max-w-7xl lg:m-auto ">

                    <div className="text-white rounded md:w-[43%] 2xl:w-[51%]">
                        <div className="border-2 text-lg leading-6 border-white rounded-full text-center py-2 w-60">¿Por qué {nameService}?</div>
                        <div className="text-3/5xl leading-9 font-bold pt-5 pb-2 lg:py-4 lg:text-4.5xl lg:leading-15 ">{nameService}</div>
                        <div className="text-md  leading-5 font-medium pb-6 lg:w-full lg:pb-0 ">
                            <p className="mb-6">{summaryService}</p>
                        </div>


                    </div>

                    <div className="flex flex-col items-center lg:pl-4 md:w-[44%] 2xl:pl-24">
                        <Image src={urlImage } className='w-[80%]' priority placeholder='blur'/>
                      
                    </div>


                    <div>
                    </div>
                </div>
                <div className="flex flex-col pt-10 lg:pl-4">
                        {serviceBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-center pb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`${colorTextService} w-6 flex-none mr-[0.375rem] lg:w-10 lg:h-10 lg:mr-4 `}>
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <p className="text-white leading-6 text-lg">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
            </div>


        </section>
    )
}

export default WhyService