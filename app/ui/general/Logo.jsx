import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo600x150.svg'

const Logo = () => {
    return (
        <div className='md:w-1/3 lg:w-1/5 z-20'>
            <Link href={'/'} passHref legacyBehavior>
            <Image src={logo} alt='logo Mucho Marketing'/>
            </Link>
        </div>
    )
}

export default Logo