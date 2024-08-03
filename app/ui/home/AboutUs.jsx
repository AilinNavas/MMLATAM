'use client';

import { motion } from 'framer-motion';

const AboutUs = () => {
  // Variantes para la animación del texto
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="aboutMM" className="py-16 gradientAnimation">
      <div className="mx-auto max-w-7xl px-4 flex flex-col justify-center">
        <motion.header initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <motion.h1
            className="text-[#F7F7FA] font-semibold pb-12 text-3/5xl text-center"
            variants={textVariants}
          >
            Especialistas en Diseño y Desarrollo Web
          </motion.h1>
        </motion.header>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <motion.p
            className="text-[#F7F7FA] text-lg lg:text-2xl"
            variants={textVariants}
          >
            Somos creadores de soluciones digitales personalizadas que destacan en el competitivo
            mercado actual. Utilizamos tecnologías de vanguardia y estrategias innovadoras para
            garantizar que tu sitio web no solo sea atractivo, sino también altamente funcional y
            optimizado para motores de búsqueda.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

