import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const OurValues = () => {
    const ourValues = [
        {
            title: 'Innovación',
            icon: '',
            detail: 'Nos mantenemos a la vanguardia, evolucionando constantemente nuestras estrategias y técnicas para garantizar que nuestros clientes reciban los mejores resultados posibles.'
        },
        {
            title: 'Calidad',
            icon: '',
            detail: 'Estamos comprometidos a brindar servicios de primer nivel que cumplan con los más altos estándares de excelencia.'
        },
        {
            title: 'Personalizacion',
            icon: '',
            detail: 'Entendemos que cada práctica dental es única y adaptamos nuestros servicios para satisfacer las necesidades y objetivos específicos de cada cliente.'
        }
    ];

    const [inView, setInView] = useState(false);
    const valuesRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            });
        }, { threshold: 0.5 });

        valuesRef.current.forEach((ref) => {
            observer.observe(ref);
        });

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <section className='bg-white'>
            <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center '>
                <header className='mb-3 text-left lg:text-center 3xl:mb-14'>
                    <h2 className='text-[#060606] font-bold pb-12 text-3/5xl text-center'>Our Values</h2>
                </header>
                <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
                    {ourValues.map((value, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col items-center p-4 rounded-md shadow-2xl max-w-xs border-b-2 border-violet-700`}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.5 , delay: index * 0.5 }}
                            ref={(element) => valuesRef.current[index] = element}
                        >
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-2xl text-blue-500">{value.icon}</span>
                                <h6 className="text-xl font-semibold text-[#18181B]">{value.title}</h6>
                            </div>
                            <p className="text-[#18181B] text-center">{value.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;







// import React from 'react'

// const ourValues = [
//     {
//         title: 'Innovación',
//         icon: '',
//         detail: 'Nos mantenemos a la vanguardia, evolucionando constantemente nuestras estrategias y técnicas para garantizar que nuestros clientes reciban los mejores resultados posibles.'
//     },
//     {
//         title: 'Calidad',
//         icon: '',
//         detail: 'Estamos comprometidos a brindar servicios de primer nivel que cumplan con los más altos estándares de excelencia.'
//     },
//     {
//         title: 'Personalizacion',
//         icon: '',
//         detail: 'Entendemos que cada práctica dental es única y adaptamos nuestros servicios para satisfacer las necesidades y objetivos específicos de cada cliente.'
//     }
// ]

// const OurValues = () => {


//     return (
      
//         <section className='bg-white'>

//         <div className='mx-auto max-w-7xl py-12 px-4 flex flex-col justify-center '>

//             <header className='mb-3 text-left lg:mb-12 lg:text-center 3xl:mb-14'>
//                 <h2 className='text-[#060606] font-bold pb-12 text-3/5xl text-center'>Our Values</h2>
//             </header>

//             <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
//             {ourValues.map((value, index) => (
                
//                 <div key={index} className={`flex flex-col items-center p-4 rounded-md shadow-lg max-w-xs border-b-2 border-violet-700`}>
//                     <div className="flex items-center space-x-2 mb-2">
//                         <span className="text-2xl text-blue-500">{value.icon}</span>
//                         <h6 className="text-xl font-semibold text-[#18181B]">{value.title}</h6>
//                     </div>
//                     <p className="text-[#18181B] text-center">{value.detail}</p>
//                 </div>
//             ))}
//         </div>

//         </div>
//         </section>
//     )
// }

// export default OurValues