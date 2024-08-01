import Link from "next/link"

const HeroService = ({ nameService, colorService, descriptiveTitle }) => {
  return (
    <div className='w-[100vw] bg-[#191919]'>

      <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 mx-auto max-w-7xl'>
        <div className='relative'>
          <span className={` ${colorService} text-white absolute -top-20  py-3 px-6 text-lg leading-7 font-medium rounded-full`} >{nameService}</span>
          <h3 className='text-white font-bold text-center text-4xl tracking-tight md:text-5xl lg:text-6xl space-y-2'>
            {descriptiveTitle}
          </h3>
          <div className='mt-5 mx-auto flex-col md:flex-row md:max-w-md flex justify-center items-center md:mt-8 lg:px-2'>
          <Link href={'/get-a-quote'}>
          <button className={'bg-white w-full hover:bg-gray-300 text-black m-1 text-lg font-semibold py-3 px-6 rounded-md transform hover:scale-105 transition duration-300 ease-in-out'}>Empezar hoy</button>
          </Link>
            <button className={'bg-transparent w-full border-2 text-white m-1 text-lg font-semibold py-3 px-6 rounded-md transform hover:scale-105 transition duration-300 ease-in-out'}>Conocer más</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroService