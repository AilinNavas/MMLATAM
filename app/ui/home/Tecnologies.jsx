 import React from 'react';
 import InfiniteCarousel from '../aboutUs/InfiniteCarousel';
 import tecnologiesData from '../data/tecnologiesData';

 const Tecnologies = () => {
   return (
     <section className='bg-white'>
       <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center'>
       <header>
           <h2 className='text-[#09090A] text-3/5xl font-bold text-center leading-9'>Potenciamos tu empresa con las mejores tecnologías</h2>
           <div className='text-lg lg:text-2xl font-normal text-center w-full mt-5'>
             <p>Las herramientas que utilizamos van a marcar la diferencia en tus resultados.</p>
           </div>
         </header>

         <div className=''>
             <InfiniteCarousel logos={tecnologiesData} />
      
         </div>
       </div>
     </section>
   )
 }

 export default Tecnologies

