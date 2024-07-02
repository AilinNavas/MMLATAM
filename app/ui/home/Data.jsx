
"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Data = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const limit1 = 50;
  const limit2 = 20;

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCount1(0);
      setCount2(0);

      const counter1 = setInterval(() => {
        setCount1((prevCount) => {
          const nextCount = prevCount + 10;
          return nextCount >= limit1 ? limit1 : nextCount;
        });
      }, 50);

      const counter2 = setInterval(() => {
        setCount2((prevCount) => {
          const nextCount = prevCount + 1;
          return nextCount >= limit2 ? limit2 : nextCount;
        });
      }, 100);

      return () => {
        clearInterval(counter1);
        clearInterval(counter2);
      };
    }
  }, [inView]);

  return (
    <section ref={ref} className='bg-[#202024] text-white'>
      <div className='mx-auto max-w-7xl py-12 px-4'>
        <div className='grid md:flex md:flex-wrap md:justify-center font-bold text-center gap-9 md:gap-0'>
          <div className='justify-center self-center flex flex-col text-center md:w-1/2 md:p-8 odd:border-none md:border-l-4 border-white lg:items-center'>
            <div className='whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-6xl leading-[5.25rem] font-normal break-words lg:text-5xl lg:font-bold lg:leading-[4.375rem] 3xl:text-[5rem] 3xl:leading-[7.625rem]'>
              +{count1}%
            </div>
            <span className='text-sm font-bold leading-5 pt-4 text-center text-athensGray inline-block lg:font-normal lg:text-xl lg:leading-8 lg:h-16 lg:w-64'>
              <p>de visitas y conversiones en tu sitio web.</p>
            </span>
          </div>
          <div className='justify-center self-center flex flex-col text-center md:w-1/2 md:p-8 odd:border-none md:border-l-4 border-white lg:items-center'>
            <div className='whitespace-nowrap overflow-hidden text-ellipsis max-w-full text-6xl leading-[5.25rem] font-normal break-words lg:text-5xl lg:font-bold lg:leading-[4.375rem] 3xl:text-[5rem] 3xl:leading-[7.625rem]'>
              +{count2}
            </div>
            <span className='text-sm font-bold leading-5 pt-4 text-center text-athensGray inline-block lg:font-normal lg:text-xl lg:leading-8 lg:h-16 lg:w-64'>
              <p>lugares en posicionamiento local.</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Data;
