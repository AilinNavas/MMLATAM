"use client";
import React from 'react';
import { Roboto } from "next/font/google";
import Image from 'next/image';
import Neal from '../../../public/Neal.jpeg';
import Noel from '../../../public/Noel.jpg';
import man2 from '../../../public/man2.jpg'


 const roboto = Roboto({ subsets: ["latin"], weight:['400'] });

const Testimonials = () => {

    
  return (
    <div className='bg-[#18181B]'>
      <div className='mx-auto max-w-7xl py-12 lg:py-20 px-4 relative'>
        <div className='relative'>
          {/* Left background card */}
          <div className='absolute left-[10%] h-full w-1/2 lg:max-w-[500px] bg-[#202024] rounded-lg transform rotate-[-5deg] blur-sm opacity-80 cursor-none border  border-sky-500'>
          <div className="w-full py-10 px-6 text-center">
              <span className="absolute left-0 top-5 inline-flex items-center px-4 py-3 rounded-r-xl text-sm font-medium text-white capitalize bg-[#0a66c2]">Owner</span>
              <div className="space-y-6 xl:space-y-10">
                <div className="mx-auto relative h-28 w-28">
                  <span className="box-border block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 absolute inset-0 rounded-full">
                    <Image src={Noel} className='h-full' alt='Maria Noel Abalos' />
                  </span>
                </div>
                <div className="xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className={` ${roboto.className} text-white text-xl pb-2`}>Maria Noel Abalos</h3>
                    <h4 className={` ${roboto.className} text-[#0a66c2]`}>Designer</h4>
                    <div className="text-sm pt-5 text-white font-archivo">
                      <p className={`${roboto.className} hidden md:block`}>
                        “Joel is very professional in dealing with you. As a mentor, I advise myself so that my business improves, I achieve goals and objectives. Regarding marketing, I provide appropriate advice to optimize my professional achievements. Thank you very much Joel for all your excellent quality service.”
                      </p>
                    </div>
                  </div>
                </div>
                <div className='hidden md:flex lg:max-w-[360px] mx-auto  flex-col w-44 lg:flex-row overflow-hidden items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2 lg:w-[100%]'>
                 <button className='bg-white w-full h-10 rounded-md font-medium p-2 text-violet-500 cursor-grab'>
                    <span>Case Study</span>
                  </button> 
             



                  <button className="group w-full cursor-none relative bg-[#0a66c2] rounded text-neutral-50 duration-500 font-medium flex justify-start gap-2 items-center p-2">
                    <svg className="w-6 h-6 fill-neutral-50" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                      <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                    </svg>
                    <span className="border-l-2 px-1">On LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right background card */}
          <div className='absolute right-[10%] w-1/2 h-full lg:max-w-[500px] blur-sm rounded-lg transform  bg-[#202024] rotate-[5deg] opacity-90 cursor-none border border-sky-500'>
          <div className="w-full py-10 px-6 text-center">
              <span className="absolute left-0 top-5 inline-flex items-center px-4 py-3 rounded-r-xl text-sm font-medium text-white capitalize bg-[#0a66c2]">Owner</span>
              <div className="space-y-6 xl:space-y-10">
                <div className="mx-auto relative h-28 w-28">
                  <span className="box-border block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 absolute inset-0 rounded-full">
                    <Image src={man2} className='h-full' alt='Neal Horn'/>
                  </span>
                </div>
                <div className="xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className={` ${roboto.className} text-white text-xl pb-2`}>Neal Horn</h3>
                    <h4 className={` ${roboto.className} text-[#0a66c2] `}>Southside Endodontics</h4>
                    <div className="text-sm pt-5 text-white font-archivo">
                      <p className={`${roboto.className} hidden md:block cursor-none`}>
                        “Joel has been a valuable asset to my endodontic practice. He skills with SEO have constantly positioned my practice at the top of the search results. He always has unique and creative ideas about how to more effectively market my practice, and we’ve seen results by implementing his strategies. I would not hesitate to recommend Joel to anyone looking to better position their practice through digital marketing.”
                      </p>
                    </div>
                  </div>
                </div>
                <div className='hidden lg:max-w-[360px] mx-auto md:flex flex-col w-44 lg:flex-row overflow-hidden items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2 lg:w-[100%]'>
                  <button className='bg-white w-full h-10 rounded-md font-medium p-2 text-violet-300 hover:bg-purple-200'>
                    <span>Case Study</span>
                  </button>
                  <button className="group w-full cursor-grab relative bg-[#0a66c2] rounded text-neutral-50 duration-500 font-medium flex justify-start gap-2 items-center p-2">
                    <svg className="w-6 h-6 fill-neutral-50" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                      <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                    </svg>
                    <span className="border-l-2 px-1">On LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main testimonial card */}
          <div className='relative h-full flex flex-col justify-center bg-[#202024] max-w-[288px] lg:max-w-[500px] mx-auto border border-sky-500 rounded-lg'>
            <div className="w-full py-10 px-6 text-center">
              <span className="absolute left-0 top-5 inline-flex items-center px-4 py-3 rounded-r-xl text-sm font-medium text-white capitalize bg-[#0a66c2]">Owner</span>
              <div className="space-y-6 xl:space-y-10">
                <div className="mx-auto relative h-28 w-28">
                  <span className="box-border block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 absolute inset-0 rounded-full">
                    <Image src={Neal} className='h-full' alt='Neal Horn'/>
                  </span>
                </div>
                <div className="xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className={` ${roboto.className} text-white text-xl pb-2`}>Neal Horn</h3>
                    <h4 className={` ${roboto.className} text-[#0a66c2]`}>Southside Endodontics</h4>
                    <div className="text-sm pt-5 text-white font-archivo">
                      <p className={`${roboto.className}`}>
                        “Joel has been a valuable asset to my endodontic practice. He skills with SEO have constantly positioned my practice at the top of the search results. He always has unique and creative ideas about how to more effectively market my practice, and we’ve seen results by implementing his strategies. I would not hesitate to recommend Joel to anyone looking to better position their practice through digital marketing.”
                      </p>
                    </div>
                  </div>
                </div>
                <div className='lg:max-w-[360px] mx-auto flex flex-col w-44 lg:flex-row overflow-hidden items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2 lg:w-[100%]'>
                 <button className='bg-white w-full h-10 rounded-md font-medium p-2 text-violet-500 hover:bg-purple-200'>
                    <span>Case Study</span>
                  </button> 

              






                  <button className="group w-full hover:bg-blue-900 relative bg-[#0a66c2] rounded text-neutral-50 duration-500 font-medium flex justify-start gap-2 items-center p-2">
                    <svg className="w-6 h-6 fill-neutral-50" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                      <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                    </svg>
                    <span className="border-l-2 px-1">On LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
