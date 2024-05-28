import React from 'react';
import ailin from '../../../public/ailin.png';
import joel from '../../../public/joel.jpg';
import InfoPersonal from './InfoPersonal';


const OurTeam = () => {
  
    const foundersData = [
        {
            title: "Joel Chavez",
            description: [
                "Con más de 3 años de experiencia en el campo en constante evolución del SEO, Joel tiene un historial comprobado de generar resultados para empresas de todos los tamaños. Su viaje comenzó con una pasión por comprender los algoritmos de búsqueda y un talento para aprovecharlos para aumentar la visibilidad en línea.",
                "A lo largo de los años, ha perfeccionado sus habilidades, manteniéndose a la vanguardia de las tendencias de la industria e implementando estrategias de vanguardia que ofrecen las mejores clasificaciones y un mayor tráfico."
            ],
            values: [
                {
                    title: 'INNOVADOR',
                    detail: 'Siempre a la vanguardia de las tendencias de SEO, Joel aporta soluciones innovadoras a desafíos complejos.'
                },
                {
                    title: 'ESTRATEGA',
                    detail: 'Conocido por su mente analítica, elabora estrategias basadas en datos que producen resultados mensurables.'
                },
                {
                    title: 'CONECTOR',
                    detail: 'Se destaca por cerrar la brecha entre los consultorios dentales y sus públicos objetivo, garantizando una comunicación y un compromiso efectivos entre médicos y pacientes.'
                }
            ],
            imageUrl: joel,
            altText: "joel",
            color: "#04ADEE",
        
          
        },
        {
            title: "Ailin Navas",
            description: [
                "Con buen ojo para la estética y talento para la codificación, Ailin combina el arte y la ciencia del diseño y desarrollo web. Su carrera abarca más de una década, durante la cual ha creado sitios web impresionantes y fáciles de usar que no sólo tienen un aspecto fantástico sino que también funcionan a la perfección.",
                "Su dedicación a la calidad y atención al detalle garantizan que cada sitio web que diseña sea una obra maestra."
            ],
            values: [
                {
                    title: 'VISIONARIA CREATIVA',
                    detail: 'Ailin tiene una capacidad única para traducir la visión de una marca en una presencia digital cautivadora.'
                },
                {
                    title: 'EXPERTA TECNICA',
                    detail: 'Su experiencia en desarrollo web garantiza que cada sitio no solo sea hermoso sino también rápido, seguro y receptivo.'
                },
                {
                    title: 'CENTRADA EN EL CLIENTE',
                    detail: 'Al comprender las necesidades y objetivos de sus clientes, crea soluciones personalizadas que mejoran la experiencia del usuario e impulsan la participación.'
                }
            ],
            imageUrl: ailin,
            altText: "ailin",
            color: "#B365E1",
            specificStyles: {
                textAlign: "",
                flexDirection: "lg:flex-row-reverse",
                justify: "lg::justify-end",
                margin: 'lg:pr-10 lg:pl-0'
            },
        

        }
    ];
    
    return (
        <section className='bg-[#09090A] py-20'>

            <div className='mx-auto md:p-8 max-w-7xl'>
                <div className='grid md:grid-flow-row space-y-20 mx-auto'>
                    {foundersData.map((founder, index) => (
                        <InfoPersonal 
                            key={index}
                            title={founder.title}
                            description={founder.description}
                            values={founder.values}
                            imageUrl={founder.imageUrl}
                            altText={founder.altText}
                            color={founder.color}
                            specificStyles={founder.specificStyles}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam