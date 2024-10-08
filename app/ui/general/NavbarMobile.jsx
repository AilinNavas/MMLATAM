"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import Logo from '../general/Logo';

const NavbarMobile = () => {
    return (
        <div className='lg:hidden'>
            <div className='flex items-center bg-[#191919] justify-between py-2'>
                <Logo />
                <AnimatedHamburgerButton />
            </div>
        </div>
    );
}

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);

    const handleLinkClick = () => {
        setActive(false);
    };

    return (
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className='relative z-30 mr-1'>
                <motion.button
                    initial={false}
                    onClick={() => setActive(pv => !pv)}
                    className='relative z-20 h-14 w-14 rounded-full bg-white/0 transition-colors hover:bg-white/10'
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
                    className="fixed top-0 left-0 right-0 bottom-0 bg-[#191919] z-10 overflow-hidden"
                >
                    <nav className="flex mt-12 flex-col items-start justify-start space-y-4 h-full p-8">
                       
                        <div className='flex'>
                            <span className='w-1 h-8 rounded-full bg-[#C30BB1] mr-2' />
                            <Link href="/service/web-design" className="text-white text-2xl" onClick={handleLinkClick}>Diseño Web</Link>
                        </div>
                        <p className='pl-4 font-light text-white text-sm'>Eleva tu empresa con un diseño web excepcional y 100% funcional </p>
                        <div className='flex'>
                            <span className='w-1 h-8 rounded-full bg-[#FF7A00] mr-2' />
                            <Link href="/service/branding" className="text-white text-2xl" onClick={handleLinkClick}>Branding</Link>
                        </div>
                        <p className='pl-4 font-light text-white text-sm'>Impulsa tu Identidad con una estrategia de marca de alto impacto</p>
                        <div className='flex'>
                            <span className='w-1 h-8 rounded-full bg-lime-500 mr-2' />
                            <Link href="/service/seo-local" className="text-white text-2xl" onClick={handleLinkClick}>SEO Local</Link>
                        </div>
                        <p className='pl-4 font-light text-white text-sm'>Domina los resultados de búsqueda en Google con SEO Local</p>
                        <div className='flex'>
                            <span className='w-1 h-8 rounded-full bg-[#2B0CEA] mr-2' />
                            <Link href="/service/email-marketing" className="text-white text-2xl" onClick={handleLinkClick}>Email Marketing</Link>
                        </div>
                        <p className='pl-4 font-light text-white text-sm'>Transforma tu empresa con estrategias de email marketing probadas</p>
                        <div className='flex'>
                            <span className='w-1 h-8 rounded-full bg-white mr-2' />
                        <Link href="/about-us" className="text-white text-2xl ml-2 pt-1" onClick={handleLinkClick}>Sobre nosotros</Link>
                        </div>
                        <p className='pl-4 font-light text-white text-sm'>Creemos que todas las empresas merecen brillar en linea</p>
                        <div className='flex'>
                        <span className='w-1 h-8 rounded-full bg-white mr-2' />
                        <Link href="/blog" className="text-white text-2xl ml-2" onClick={handleLinkClick}>Blog</Link>
                        </div>
                        <p className='pl-4 font-light text-white text-sm'>Encontra más información en nuestros artículos</p>
                    </nav>
                </motion.div>
            </div>
        </MotionConfig>
    );
}

export default NavbarMobile;
