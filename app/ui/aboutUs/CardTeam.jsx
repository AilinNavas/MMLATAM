import React from "react"
import Image from 'next/image'
import InfiniteCarousel from "./InfiniteCarousel"

  

const CardTeam = ({ imageUrl, title, name, description, borderColor, techIcons }) => {
    return (
        <div className={`mx-auto flex flex-col items-center space-y-2 w-[100%] bg-[#18181B] rounded-md p-4 border-b-2 ${borderColor}`} >
            <div className='w-[200px]'>
                <Image src={imageUrl} className='w-full rounded-full' alt={name} />
            </div>
            <h4 className='text-white font-semibold text-xl text-center'>{title}</h4>
            <span className='text-gray-300'>{name}</span>
            <p className="text-gray-200 px-2">{description}</p>
            <div className="w-full h-full py-4 flex items-end">
            <InfiniteCarousel logos= {techIcons} />
            </div>
        </div>
    )
}

export default CardTeam