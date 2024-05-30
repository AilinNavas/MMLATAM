import React from 'react';

const painPoints = [
  {
    title: 'Low patient engagement:',
    description: 'Many dental practices struggle with low open rates and engagement in their email communications. We use proven strategies to craft compelling content that your patients and potential referrals want to read.',
  },
  {
    title: 'Inconsistent patient flow:',
    description: 'Our targeted email campaigns ensure a steady stream of patients, helping you avoid the highs and lows of fluctuating appointment schedules.',
  },
  {
    title: 'Lack of referral growth:',
    description: 'For specialists, building a robust referral network is essential. We design campaigns that make it easy for referring dentists to choose your practice, boosting your referral numbers significantly.',
  },
];

const PainPointsService = () => {
  return (
    <section className="bg-[#202024] py-20">
      <div className="text-white max-w-7xl mx-auto">
        <div className="">
          <h2 className="text-3/5xl text-center font-semibold mb-1">
            Pain Points We Address
          </h2>

          <div className="max-w-2xl mx-auto mt-14 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`text-left lg:block lg:text-left ${
                  index < painPoints.length - 1 ? 'lg:border-r lg:border-white' : ''
                }`}
              >
                <div className="mt-3 lg:mt-3 lg:ml-0 h-full flex flex-col justify-start px-4 mx-auto">
                  <h3 className="text-lg leading-5 font-semibold mb-4">{point.title}</h3>
                  <p className="mt-2 text-lg leading-7 font-normal font-archivo">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsService;





// import React from 'react'

// const PainPointsService = () => {
//   return (
//     <section className='bg-[#202024] py-20'>
//       <div class="bg-gray-1 text-white">
//         <div class="dh-content">
//           <h2 class="text-[2.125rem] text-center font-semibold leading-[3.375rem] mb-1">Pain Points We Address</h2>

//           <div class="max-w-2xl mx-auto mt-14 px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
//             <div class="text-center lg:block lg:text-center">

//               <div class="mt-3 lg:mt-3 lg:ml-0">
//                 <h3 class="text-base leading-5 font-semibold mb-4">Low patient engagement:</h3>
//                 <p class="mt-2 text-base leading-7 font-normal font-archivo">Many dental practices struggle with low open rates and engagement in their email communications. We use proven strategies to craft compelling content that your patients and potential referrals want to read.</p>
//               </div>
//             </div>
//             <div class="text-center lg:block lg:text-center">

//               <div class="mt-3 lg:mt-3 lg:ml-0"><h3 class="text-base leading-5 font-semibold mb-4">Inconsistent patient flow:</h3><p class="mt-2 text-base leading-7 font-normal font-archivo">Our targeted email campaigns ensure a steady stream of patients, helping you avoid the highs and lows of fluctuating appointment schedules.
//               </p>
//               </div>
//             </div>
//             <div class="text-center lg:block lg:text-center">

//               <div class="mt-3 lg:mt-3 lg:ml-0">
//                 <h3 class="text-base leading-5 font-semibold mb-4">Lack of referral growth:</h3>
//                 <p class="mt-2 text-base leading-7 font-normal font-archivo">For specialists, building a robust referral network is essential. We design campaigns that make it easy for referring dentists to choose your practice, boosting your referral numbers significantly.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </section>
//   )
// }

// export default PainPointsService