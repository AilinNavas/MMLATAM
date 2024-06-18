import React from 'react'
import Link from 'next/link';
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] })

const Logo = () => {
    return (
        <div className='w-1/2 md:w-1/3 lg:w-1/5 text-center px-4 z-20 '>
            <Link href={'/'}>
            <h3 className={`${nunito_sans.className} text-white`}>
                <span className='font-medium text-xl'>MUCHO</span>
                <span className='font-extrabold text-xl'>MARKETING</span>
            </h3>
            </Link>
        </div>
    )
}

export default Logo