import React from 'react';
import Image from 'next/image';
import strategiesMarketing from '../data/strategiesMarketing';



const Strategy = () => {
    return (
        <section className='-mb-1 py-20 px-4 lg:px-0 text-black'>
            <div className='lg:w-10/12 lg:m-auto'>
                <header>
                    <h3 className='text-3/5xl font-bold text-center lg:text-[48px]'>Strategy and Implementation</h3>
                    <div className='text-lg lg:text-xl font-normal text-center w-full mt-5'>
                        <p className='text-left'>To address these challenges, we developed and executed a comprehensive Local SEO strategy focused on improving their search rankings, online reputation, and overall digital presence. Our approach included:</p>
                    </div>
                </header>

                <div className=' mt-8 grid md:grid-cols-2 gap-10'>

                    {strategiesMarketing.map((strategy, index) => (
                        <div key={index} className='border shadow-xl p-8 space-y-4 bg-white text-black '>
                            <div className='flex justify-between h-16'>
                                <h6 className='font-bold text-xl leading-6 tex-black'>{strategy.strategyName}</h6>
                                <span className='text-xl leading-6 '>{strategy.id}.</span>
                            </div>
                            <div className='flex justify-between items-end '>
                                <p className='leading-5 text-lg lg:pr-10'>{strategy.strategyDescription}</p>
                                <Image src={strategy.srcIcon} alt={strategy.altTextIcon} className='w-12 h-12' />
                            </div>
                        </div>

                    ))}






                    {/* <div className='border-2 p-8 space-y-4 bg-white text-black'>
                        <div className='flex justify-between'>
                            <h6 className='font-bold text-xl leading-6'>On-Page Optimization</h6>
                            <span className='text-xl leading-6'>02.</span>
                        </div>
                        <div className='flex justify-between items-end'>
                            <p className='leading-5 text-lg pr-20'> Optimized website content, meta tags, and headings with relevant local keywords. Created new service pages and blog posts tailored to common local search queries.</p>
                            <Image className='w-12 h-12' />
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default Strategy