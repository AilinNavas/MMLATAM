import React from 'react'

const IntroductionService = ({nameService, serviceIntroduction}) => {
    return (
        <section className='bg-[#0F0F11] py-20'>

            <div className='mx-auto max-w-7xl px-4 flex flex-col space-y-4 justify-start items-left'>
            <h2 className='text-white text-3/5xl font-semibold text-center leading-[54px] mb-2'>Saber más sobre {nameService}</h2>
                <div>
                    <p className='text-white'>{serviceIntroduction[0]}
                    </p>
                </div>


                <div>
                    <p className='text-white '> {serviceIntroduction[1]}

                    </p>
                </div>
            </div>
        </section>
    )
}

export default IntroductionService