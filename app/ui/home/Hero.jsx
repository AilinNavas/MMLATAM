'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../general/Button';
import Link from 'next/link';

// Componente de texto animado
const AnimatedText = ({ text, finalColor, delay }) => {
  const letters = text.split(""); // Divide la palabra en letras

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05, // Retraso entre letras
        delayChildren: delay, // Retraso antes de empezar
      },
    },
  };

  const letterVariants = {
    initial: { opacity: 0, y: 50 }, // Aparece desde abajo
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      className="font-bold text-5xl lg:text-7xl"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{ color: finalColor }} // Aplica el color final al texto
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  // Variantes de animación para el párrafo y el botón
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 3.6 } // Aparece después de 3.6 segundos
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 4.2 } // Aparece después de 4.2 segundos
    },
  };

  return (
    <div className="bg-[#191919]">
      <div className="py-16 px-4 xl:py-32 mx-auto">
        <div className="max-w-7xl lg:px-4 mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-center md:space-y-4">
            <AnimatedText
              text="Creatividad."
              finalColor="#C30BB1"
              delay={0}
            />
            <AnimatedText
              text="Innovación."
              finalColor="#FFFFFF"
              delay={1}
            />
            <AnimatedText
              text="Eficacia."
              finalColor="#9391F4"
              delay={2}
            />
          </div>
          <div className="md:w-1/2 hidden md:flex justify-center items-center"></div>
        </div>

        <div className="max-w-7xl mx-auto lg:px-4">
          <motion.p
            className="text-white py-4 text-2xl"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            Diseños web personalizados, sin plantillas, desarrollados para
            comunicar y vender, pensados para que te diferencies de tu
            competencia.
          </motion.p>
          <Link href={'/get-a-quote'}>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <Button text={'Cotizar proyecto'} especif={'rounded-md my-4'} />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

