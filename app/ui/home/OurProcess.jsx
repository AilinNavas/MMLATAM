'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import descubir from '@/public/our-process/1.png';
import planificar from '@/public/our-process/2.png';
import revisar from '@/public/our-process/3.png';
import entregar from '@/public/our-process/4.png';

const OurProcess = () => {
  // Variants for animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Variants for the header (optional, you can use the same or different)
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div className='bg-[#F7F7FA]'>
      <div className='mx-auto max-w-7xl py-12 lg:py-20 px-4'>
        {/* Header Section */}
        <motion.header
          className="mb-12 lg:mb-20 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={headerVariants}
        >
          <h2 className='font-semibold text-3/5xl text-center'>Nuestro proceso personalizado</h2>
          <p className="text-left text-xl">
            En MUCHO<strong>MARKETING</strong>, entendemos que cada negocio es único y merece un enfoque personalizado. Nuestro proceso está diseñado para garantizar que cada paso se realice con la máxima atención al detalle y en estrecha colaboración contigo. Con nosotros, no solo obtienes un servicio, sino una verdadera asociación que impulsa tu éxito.
          </p>
        </motion.header>

        <div className='max-w-5xl mx-auto space-y-20'>
          {/* Step 1: Descubrimiento */}
          <motion.div
            className="flex flex-col md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="md:w-1/2">
              <Image src={descubir} alt="Descubrimiento" />
            </div>
            <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
              <h4 className="font-semibold text-2xl">01. Descubrimiento</h4>
              <p className="text-lg">
                En esta primera etapa, nos dedicamos a conocer a fondo tu negocio, tus objetivos y expectativas. Queremos entender tu visión y los desafíos específicos que enfrentas. Este conocimiento profundo nos permite desarrollar una estrategia personalizada que se alinee perfectamente con tus necesidades. Nuestro equipo se toma el tiempo necesario para escucharte, resolver todas tus dudas y asegurarte que estás en buenas manos desde el principio.
              </p>
            </div>
          </motion.div>

          {/* Step 2: Planificación */}
          <motion.div
            className="flex flex-col-reverse md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
              <h4 className="font-semibold text-2xl">02. Planificación</h4>
              <p className="text-lg">
                Una vez que entendemos tu negocio y tus objetivos, procedemos a planificar el diseño del sitio web o la estrategia que mejor se adapte a tus necesidades. Este paso incluye la creación de un plan detallado que abarca todas las fases del proyecto, desde el diseño inicial hasta la implementación final. Nuestra planificación meticulosa asegura que cada detalle sea considerado, y te mantenemos informado durante todo el proceso, para que siempre sepas qué esperar y cuándo.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <Image src={planificar} alt="Planificación" />
            </div>
          </motion.div>

          {/* Step 3: Revisión y Aprobación */}
          <motion.div
            className="flex flex-col md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="md:w-1/2">
              <Image src={revisar} alt="Revisión y Aprobación" />
            </div>
            <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
              <h4 className="font-semibold text-2xl">03. Revisión y aprobación</h4>
              <p className="text-lg">
                En esta etapa, te presentamos el diseño o la estrategia planificada para tu revisión. Este es un proceso colaborativo donde revisamos cada aspecto contigo, asegurándonos de que todo esté alineado con tus expectativas. Nos tomamos en serio tus comentarios y hacemos los ajustes necesarios hasta que estés completamente satisfecho. Nuestro objetivo es que te sientas seguro y emocionado con el resultado antes de pasar a la fase final.
              </p>
            </div>
          </motion.div>

          {/* Step 4: Entrega Final */}
          <motion.div
            className="flex flex-col-reverse md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
              <h4 className="font-semibold text-2xl">04. Entrega final</h4>
              <p className="text-lg">
                Finalmente, una vez que has aprobado todo, procedemos con la entrega final. Nos aseguramos de que el sitio web o la estrategia esté completamente funcional y optimizada, lista para lanzarse. Pero nuestro compromiso no termina ahí; estamos disponibles para brindarte soporte continuo y asegurarnos de que todo funcione a la perfección. Con nosotros, tienes la garantía de que nunca estás solo, incluso después de la entrega.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <Image src={entregar} alt="Entrega Final" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;


