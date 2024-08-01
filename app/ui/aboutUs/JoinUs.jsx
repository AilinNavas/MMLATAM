import React from 'react'
import ConctactUs from '../home/ConctactUs'

const JoinUs = () => {
    return (
        <section className='bg-white '>
            <div className='mx-auto max-w-7xl px-4 pt-20 pb-12 lg:pb-0 flex flex-col justify-center'>
                <header>
                    <h2 className='text-[#060606] font-semibold pb-12 text-3/5xl text-center'>Únete a nosotros en nuestro viaje
                    </h2>
                </header>

                <div className='space-y-4'>
                    <p className='text-[#060606]'>En MUCHO <strong>MARKETING</strong> nos apasiona ayudar a empresas a prosperar en el mundo digital, y garantizamos resultados sobresalientes que generen un impacto real. Te invitamos a unirte a nosotros en este viaje y descubrir cómo podemos ayudar a que tu empresa alcance nuevas alturas.
                    </p>
                   
                    <p>Permítenos ayudarte a crear una potente presencia en línea que atraiga, fidelice y retenga a más clientes.
</p>
                </div>
          
      

            </div>
            <ConctactUs />


        </section>
    )
}

export default JoinUs