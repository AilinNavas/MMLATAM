import React from 'react';

const PainPointsService = ({painPoints}) => {
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

