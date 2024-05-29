import React from 'react';
import InfoPersonal from './InfoPersonal';
import foundersData from '../data/foundersData';


const OurTeam = () => {
    return (
        <section className='bg-[#09090A] py-20'>

            <div className='mx-auto md:p-8 max-w-7xl'>
                <div className='grid md:grid-flow-row space-y-20 mx-auto'>
                    {foundersData.map((founder, index) => (
                        <InfoPersonal 
                            key={index}
                            title={founder.title}
                            description={founder.description}
                            values={founder.values}
                            imageUrl={founder.imageUrl}
                            altText={founder.altText}
                            color={founder.color}
                            specificStyles={founder.specificStyles}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam