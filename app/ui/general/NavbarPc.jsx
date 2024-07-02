"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../general/Logo'
import joel from '@/public/joel.jpg'
import ailin from '@/public/ailin.png'




const NavbarPc = () => {

  return (
    <div className='hidden lg:flex bg-[#191919] h-[100px] items-center justify-around px-3'>
      <Logo />
      <div className='flex justify-around items-center cursor-pointer lg:w-3/5' >
        <FlyoutLink href='#' FlyoutContent={ServicesOptions}>
          <span className='flex items-center text-base font-medium leading-6 text-gray-200  hover:text-white'>¿Qué ofrecemos?
            <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 ml-1" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </span>
        </FlyoutLink>
        <FlyoutLink href='/about-us' FlyoutContent={AboutUs} >
          <span className='flex items-center text-base font-medium  text-gray-200  hover:text-white'>Sobre nosotros
          </span>
        </FlyoutLink>
        <FlyoutLink href='/blog' FlyoutContent={Blog}  >
          <span className='flex items-center text-base font-medium  text-gray-200  hover:text-white'>Blog
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
          className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 ease-out'
        />
      </Link>

      <AnimatePresence>
        {showFlyout &&
          (<motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute -inset-x-20 top-10 bg-[#191919] text-white'>
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
    <div className='w-[1000px] flex items-center h-40 bg-[#191919] p-6 cursor-pointer'>

      <div className='group flex flex-col w-1/4 mx-auto'>
        <h4 className='font-bold flex items-center  text-white space-x-2'>
          <span className='left-0 w-1 h-8 rounded-full bg-lime-500 group-hover:bg-lime-300' />
          <Link href="/service/seo-local">SEO Local</Link>
        </h4>
        <p className='p-2 font-light text-sm'>Domina los resultados de búsqueda en Google con SEO Local</p>
      </div>

      <div className='group flex flex-col w-1/4 mx-auto'>
        <h4 className='font-bold flex items-center text-white space-x-2'>
          <span className='left-0 w-1 h-8 rounded-full bg-[#C30BB1] group-hover:bg-[#d874ce]' />
          <Link href="/service/web-design">Diseño Web</Link>
        </h4>
        <p className='p-2 font-light text-sm'>Eleva tu empresa con un diseño web excepcional y 100% funcional </p>
      </div>

      <div className='group flex flex-col w-1/4 mx-auto '>
        <h4 className='font-bold flex items-center text-white space-x-2'>
          <span className='left-0 w-1 h-8 rounded-full bg-[#2B0CEA] group-hover:bg-[#6d92f7]' />
          <Link href="/service/email-marketing">Email Marketing</Link>
        </h4>
        <p className='p-2 font-light text-sm'>Transforma tu empresa con estrategias de email marketing probadas</p>
      </div>

      <div className='group flex flex-col w-1/4 mx-auto '>
        <h4 className='font-bold flex items-center text-white space-x-2'>
          <span className='left-0 w-1 h-8 rounded-full bg-[#FF7A00] group-hover:bg-[#f8b06c]' />
          <Link href="/service/branding">Branding</Link>
        </h4>
        <p className='p-2 font-light text-sm '>Impulsa tu Identidad con una estrategia de marca de alto impacto
       </p>
      </div>

    </div>


  )
}

const AboutUs = () => {
  return (
    <div className='w-[500px] flex h-40 bg-[#191919] p-6 cursor-pointer'>
      <Link href="/about-us" className='flex'>
        <div className='group relative flex justify-center items-center w-1/3'>
          <Image src={joel} className='w-20 h-20 rounded-full' alt='Joel MuchoMarketing' />
          <Image src={ailin} className='w-20 h-20 -ml-4 rounded-full' alt='Ailin MuchoMarketing' />
        </div>
        <div className='group flex flex-col justify-center ml-4 mx-auto w-2/3'>
          <h5 className='font-bold'>Nuestros fundadores</h5>
          <p className='py-2 font-light'>Creemos que todas las empresas merecen brillar en línea</p>
        </div>
      </Link>
    </div>
  )
}
const Blog = () => {
  return (
    <div className='w-[400px] flex h-40 bg-[#191919] p-6 cursor-pointer'>
      <Link href={'/blog'}>
        <div className='group relative flex flex-col w-full boder-2'>
          <h5 className='font-bold mb-2'>Últimos artículos blog</h5>
          <p className=' font-light border-l-4 border-[#C30BB1] px-2 mb-2'>Diseño web 2024: Claves para tu éxito</p>
          <p className=' font-light border-l-4 border-purple-500 px-2 mb-2'>Desarrollo web personalizado vs plantillas</p>
        </div>
      </Link>
    </div>
  )
}



export default NavbarPc


