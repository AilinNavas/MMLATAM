import React from 'react'
import ConctactUs from '../home/ConctactUs'

const JoinUs = () => {
    return (
        <section className='bg-white '>
            <div className='mx-auto max-w-7xl px-4 py-20 flex flex-col justify-center'>
                <header>
                    <h2 className='text-[#060606] font-semibold pb-12 text-3/5xl text-center'>Únase a nosotros en nuestro viaje
                    </h2>
                </header>

                <div className='space-y-4'>
                    <p className='text-[#060606]'>En MUCHO <strong>MARKETING</strong> nos apasiona ayudar a los consultorios dentales a prosperar en el mundo digital. La experiencia combinada de nuestros fundadores en SEO y diseño web garantiza que entreguemos resultados sobresalientes que generen un impacto real. Lo invitamos a unirse a nosotros en este viaje y descubrir cómo podemos ayudar a que su práctica alcance nuevas alturas.
                    </p>
                   
                    <p>Permitanos que lo ayudemos a crear una poderosa presencia en línea que atraiga, involucre y retenga a los pacientes.
</p>
                </div>
          
      

            </div>
            <ConctactUs />


        </section>
    )
}

export default JoinUs