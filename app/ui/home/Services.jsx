"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import services from '../data/servicesData';



const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % activeService.cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + activeService.cards.length) % activeService.cards.length);
  };

  const handleDotClick = (index) => {
    setCurrentCard(index);
  };

  return (
    <section id='our-services' className='-mb-1 bg-[#09090A] py-20 px-4 lg:px-0 text-[#FCFCFE]'>
      <div className='lg:w-10/12 lg:m-auto'>
        <header>
          <h2 className='text-[#FCFCFE] text-3xl font-bold text-center lg:text-[48px]'>Descubrí cómo podemos acompañarte.</h2>
          <div className='text-lg lg:text-2xl font-normal text-center w-full mt-5'>
            <p>Estrategias de marketing digital 100% personalizadas.</p>
          </div>
        </header>

        <div className='flex justify-center mt-8 flex-grow'>
          <ul className='grid grid-cols-2 lg:inline-flex flex-row bg-[#41414A] p-0.5 rounded m-auto'>
            {services.map((service, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`rounded border border-[#4B5563] min-w-[144px] px-3 min-h-[40px] h-full capitalize w-full text-xs sm:text-base  ${activeService.name === service.name ? service.active : 'bg-[#2C2C31]'
                    }`}
                  onClick={() => { 
                    setActiveService(service);
                    setCurrentCard(0);
                  }}
                >
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex relative items-center justify-center'>
        <button
            className= 'absolute -left-1 md:left-0 md:ml-40 bg-[#4B5563] hover:bg-gray-500 transition-all duration-200 rounded-md text-sm font-medium p-1 md:p-2'
            onClick={handlePrev}
          >
       <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-1 rotate-90" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <AnimatePresence mode= 'wait'>
          <motion.div
              className='relative w-full max-w-[288px] lg:max-w-[500px] h-full my-10'
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              key={currentCard}
            > 
        <article className='rounded-lg overflow-hidden bg-[#202024] h-full min-h-fit'>
                <header className="flex flex-col items-start border-b border-white-1 p-6">
                  <h3 className="font-medium text-lg mb-4 ">{activeService.cards[currentCard].title}</h3>
                  <div className="text-md font-normal">
                    <p className='text-md'>{activeService.cards[currentCard].description}</p>
                  </div>
                  <Link href={activeService.href} target="_self" className="bg-[#4B5563] hover:bg-gray-500 transition-all duration-200 rounded-md text-sm text-center font-medium w-full py-3 px-2 text mt-12">
                    Ver más
                  </Link>
                </header>
                <div className='p-6'>
                  <div className="text-gray-200 font-normal text-md">
                    <ul>
                      <li className='text-white flex items-center'>
                        <Image src={'/check.svg'} width={16} height={20} className='mr-1' alt="Check Icon" />
                        {activeService.cards[currentCard].beneficio1}
                      </li>
                      <li className='text-white flex items-center'>
                        <Image src={'/check.svg'} width={16} height={20} className='mr-1' alt="Check Icon" />
                        {activeService.cards[currentCard].beneficio2}
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </motion.div>
          </AnimatePresence>
          <button
            className='absolute -right-1 md:right-0 md:mr-40 bg-[#4B5563] hover:bg-gray-500 transition-all duration-200 rounded-md text-sm font-medium p-1 md:p-2'
            onClick={handleNext}
          >
           <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-1 -rotate-90" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div className='flex justify-center items-center mt-4'>
          {activeService.cards.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentCard === index ? 'bg-violet-600 border-4 border-violet-400 h-4 w-4' : 'bg-violet-600'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;


