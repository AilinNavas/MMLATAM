import React from 'react'
import Image from 'next/image'
import neutral from '@/public/arrow.svg'

const challenges = [
    { title: "Low Online Visibility:", description: "Southside Endodontics was not appearing on the first page of Google search results for relevant local queries, resulting in lost potential patient traffic." },
    { title: "Limited Local Keyword Usage: ", description: "The practice’s website lacked content optimized for specific local keywords, making it difficult for search engines to recognize their relevance to local searchers." },
    { title: "Outdated Website Structure:", description: "Their website’s structure and navigation were not optimized for search engines or user experience, leading to high bounce rates and lower rankings." },
    { title: "Poor Google My Business Optimization: ", description: "Their Google My Business (GMB) profile was incomplete and not optimized, missing out on a key opportunity to attract local searchers." },
]

const Challenges = () => {
    return (
        <section className='bg-[#09090A] text-[#FCFCFE]'>
            <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center'>
                <header>
                    <h4 className='font-semibold pb-12 text-3/5xl text-center'>Challenges</h4>
                </header>

                <div className=' space-y-4 text-lg'>
                    {challenges.map((challenge, index) => (
                        <div key={index}>
                            <div className='flex items-center h-12 '>
                            <Image src={neutral} alt='icon-arrow' className='h-8 w-8 mr-2' unoptimized/>
                            <h5 className='font-bold text-xl'>{challenge.title}</h5></div>
                            <p className='my-2'>
                                {challenge.description}
                            </p>
                        </div>
                    ))}


                </div>

            </div>
        </section>
    )
}

export default Challenges