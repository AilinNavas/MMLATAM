"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../general/Logo'
import joel from '@/public/joel.jpg'
import ailin from '@/public/ailin.png'
import southsideEndodontics from '@/public/southsideEndodontics.jpeg'




const NavbarPc = () => {

  return (
    <div className='hidden lg:flex bg-black h-20 items-center px-3 py-12'>
      <Logo />
      <div className='flex justify-around items-center cursor-pointer lg:w-3/5' >
        <FlyoutLink href='#' FlyoutContent={ServicesOptions}>
          <span className='flex items-center text-lg font-medium leading-6 text-gray-200  hover:text-white'>What we offer?
            <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 ml-1" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </span>
        </FlyoutLink>
        <FlyoutLink href='/about-us' FlyoutContent={AboutUs} >
          <span className='flex items-center text-lg font-medium  text-gray-200  hover:text-white'>About Us
          </span>
        </FlyoutLink>
        <FlyoutLink href='/blog' FlyoutContent={Blog}  >
          <span className='flex items-center text-lg font-medium  text-gray-200  hover:text-white'>Blog
          </span>
        </FlyoutLink>

        <FlyoutLink href='/case-study' FlyoutContent={CaseStudy}  >
          <span className='flex items-center text-lg font-medium  text-gray-200  hover:text-white'>Case Study
          </span>
        </FlyoutLink>

      </div>
    </div>
  )
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {

  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative h-fit w-fit z-50'
    >
      <Link href={href} className='relative text-white'>
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)"
          }}
          className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-violet-500 transition-transform duration-300 ease-out'
        />
      </Link>

      <AnimatePresence>
        {showFlyout &&
          (<motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute -inset-x-16 top-12 bg-black text-white'>
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent'
            />
            <FlyoutContent />
          </motion.div>
          )}
      </AnimatePresence>

    </div>

  );
};

const ServicesOptions = () => {
  return (
    <div className='w-[1000px] flex items-center h-40 bg-black p-6 cursor-pointer'>

      <div className='group flex flex-col w-1/4 mx-auto'>
        <h4 className='font-bold flex items-center  text-white space-x-2'>
          <span className='left-0 w-1 h-8 rounded-full bg-lime-500 group-hover:bg-lime-300' />
          <Link href="/service/seo-local">Local SEO</Link>
        </h4>
        <p className='p-2 font-light text-sm'>Dominate Local Search Results with Expert Local SEO for Dental Practices</p>
      </div>

      <div className='group flex flex-col w-1/4 mx-auto'>
        <h4 className='font-bold flex items-center text-white space-x-2'>
          <span className='left-0 w-1 h-8 rounded-full bg-[#C30BB1] group-hover:bg-[#d874ce]' />
          <Link href="/service/web-design">Web Design</Link>
        </h4>
        <p className='p-2 font-light text-sm'>Elevate your dental practice with a website that attracts, engages, and converts</p>
      </div>

      <div className='group flex flex-col w-1/4 mx-auto '>
        <h4 className='font-bold flex items-center text-white space-x-2'>
          <span className='left-0 w-1 h-8 rounded-full bg-[#2B0CEA] group-hover:bg-[#6d92f7]' />
          <Link href="/service/email-marketing">Email Marketing</Link>
        </h4>
        <p className='p-2 font-light text-sm'>Transform Your Dental Practice with Proven Email Marketing Strategies </p>
      </div>

      <div className='group flex flex-col w-1/4 mx-auto '>
        <h4 className='font-bold flex items-center text-white space-x-2'>
          <span className='left-0 w-1 h-8 rounded-full bg-[#FF7A00] group-hover:bg-[#f8b06c]' />
          <Link href="/service/branding">Branding</Link>
        </h4>
        <p className='p-2 font-light text-sm '>
        Transform your dental practice with a powerful, memorable brand</p>
      </div>

    </div>


  )
}

const AboutUs = () => {
  return (
    <div className='w-[500px] flex h-40 bg-black p-6 cursor-pointer'>
      <Link href="/about-us" className='flex'>
        <div className='group relative flex justify-center items-center w-1/3'>
          <Image src={joel} className='w-20 h-20 rounded-full' alt='Joel MuchoMarketing' />
          <Image src={ailin} className='w-20 h-20 -ml-4 rounded-full' alt='Ailin MuchoMarketing' />
        </div>
        <div className='group flex flex-col justify-center ml-4 mx-auto w-2/3'>
          <h5 className='font-bold'>Our Founders</h5>
          <p className='py-2 font-light'>We believe that every dental practice deserves to shine online</p>
        </div>
      </Link>
    </div>
  )
}
const Blog = () => {
  return (
    <div className='w-[600px] flex h-40 bg-black p-6 cursor-pointer'>
      <Link href={'/blog'}>
      <div className='group relative flex flex-col w-full'>
        <h5 className='font-bold'>Latest Blog Posts</h5>
        <p className='pt-2 font-light hover:font-medium'>Mejorando la Visibilidad de tu Clínica Dental en Búsquedas Locales</p>
        <p className='pt-2 font-light hover:font-medium'>Diseño Web para Clínicas Dentales: Claves del Éxito</p>
        <p className='pt-2 font-light hover:font-medium'>Estrategias de Email Marketing para Dentistas</p>
      </div>
      </Link>
    </div>
  )
}

const CaseStudy = () => {
  return (
    <div className='w-[380px] flex h-40 bg-black p-6 cursor-pointer'>
      <Link href={'/case-study'}>
        <div className='group relative flex w-full items-center justify-center'>
        <Image src={southsideEndodontics} className='w-28 rounded-lg' alt='Ailin MuchoMarketing' />
    
          <p className='px-4 font-light'>Discover how we helped Southside Endodontics transform its online presence</p>
        </div>
      </Link>
    </div>
  )
}


export default NavbarPc


