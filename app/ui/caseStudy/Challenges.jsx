import React from 'react'
import Image from 'next/image'
import neutral from '@/public/arrow.svg'

const challenges = [
    { title: "Baja visibilidad online::", description: "Southside Endodontics no aparecía en la primera página de resultados de búsqueda de Google para consultas locales relevantes, lo que provocaba la pérdida de tráfico de pacientes potenciales." },
    { title: "Uso limitado de palabras clave locales: ", description: "El sitio web de la consulta carecía de contenido optimizado para palabras clave locales específicas, lo que dificultaba que los motores de búsqueda reconocieran su relevancia para los buscadores locales." },
    { title: "Estructura del sitio web obsoleta:", description: "La estructura y la navegación de su sitio web no estaban optimizadas para los motores de búsqueda ni para la experiencia del usuario, lo que provocaba altas tasas de rebote y clasificaciones más bajas." },
    { title: "Mala optimización de Google My Busines:", description: "Su perfil de Google My Business (GMB) estaba incompleto y no estaba optimizado, por lo que se perdía una oportunidad clave para atraer a los buscadores locales." },
]

const Challenges = () => {
    return (
        <section className='bg-[#09090A] text-[#FCFCFE]'>
            <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center'>
                <header>
                    <h4 className='font-semibold pb-12 text-3/5xl text-center'>Desafíos</h4>
                </header>

                <div className=' space-y-4 text-lg'>
                    {challenges.map((challenge, index) => (
                        <div key={index}>
                            <div className='flex items-center h-12 '>
                            <Image src={neutral} alt='icon-arrow' className='h-8 w-8 mr-2' unoptimized/>
                            <h5 className='font-bold text-xl'>{challenge.title}</h5></div>
                            <p className='my-2'>
                                {challenge.description}
                            </p>
                        </div>
                    ))}


                </div>

            </div>
        </section>
    )
}

export default Challenges