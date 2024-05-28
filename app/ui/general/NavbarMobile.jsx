"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import Logo from '../general/Logo';

const NavbarMobile = () => {
    return (
        <div className='lg:hidden'>
            <div className='flex items-center h-20 bg-black justify-between px-4'>
                <Logo />
                <AnimatedHamburgerButton />
            </div>
        </div>
    );
}

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);

    return (
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className='relative z-30'>
                <motion.button
                    initial={false}
                    onClick={() => setActive(pv => !pv)}
                    className='relative z-20 h-16 w-16 rounded-full bg-white/0 transition-colors hover:bg-white/20'
                    animate={active ? "open" : "closed"}
                >
                    <motion.span
                        style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
                        className='absolute h-0.5 w-10 bg-white'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
                            closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] }
                        }}
                    />
                    <motion.span
                        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                        className='absolute h-0.5 w-10 bg-white'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "-45deg"] },
                            closed: { rotate: ["-45deg", "0deg", "0deg"] }
                        }}
                    />
                    <motion.span
                        style={{ left: "calc(50% + 10px)", bottom: "35%", x: "-50%", y: "50%" }}
                        className='absolute h-0.5 w-5 bg-white'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "45deg"], left: "50%", bottom: ["35%", "50%", "50%"] },
                            closed: { rotate: ["45deg", "0deg", "0deg"], left: "calc(50% + 10px)", bottom: ["50%", "50%", "35%"] }
                        }}
                    />
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={active ? { opacity: 1, height: '100vh' } : { opacity: 0, height: 0 }}
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black z-10 overflow-hidden"
                >

                    <nav className="flex mt-20 flex-col items-start justify-start space-y-4 h-full p-8">

                        <div className='flex'>
                            <span className=' w-1 h-8 rounded-full bg-lime-500 mr-2 ' />
                            <Link href="/service/seo-local" className="text-white text-xl">SEO local</Link>
                        </div>
                        <p className='pl-4 font-light text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <div className='flex'>
                            <span className=' w-1 h-8 rounded-full bg-[#C30BB1] mr-2' />
                            <Link href="/service/web-design" className="text-white text-xl">Diseño Web</Link>
                        </div>
                        <p className=' pl-4 font-light text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <div className='flex'>
                            <span className='w-1 h-8 rounded-full bg-[#2B0CEA] mr-2 ' />
                            <Link href="/service/email-marketing" className="text-white text-xl">Email Marketing</Link>
                        </div>
                        <p className=' pl-4 font-light text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <div className='flex'>
                            <span className=' w-1 h-8 rounded-full bg-[#FF7A00] mr-2' />
                            <Link href="/service/consultancy" className="text-white text-xl">Consultoria</Link>
                        </div>
                        <p className='pl-4 font-light text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <Link href="/aboutUs" className="text-white text-xl ml-2">Acerca de nosotros</Link>
                        <Link href="/blog" className="text-white text-xl ml-2">Blog</Link>

                    </nav>
                </motion.div>
            </div>
        </MotionConfig>
    );
}

export default NavbarMobile;

