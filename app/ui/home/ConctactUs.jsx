import React from 'react'
import Button from '../general/Button'
import Link from 'next/link'

const ConctactUs = () => {
  return (
    <div className="flex justify-center w-full lg:py-20">
      <Link href={'/contact'} passHref legacyBehavior>
     <Button bg={'bg-violet-500'} bgHover={'hover:bg-violet-900'} text={"¡Hablemos!"} textColor={'text-white'} especif={'rounded-none w-full lg:max-w-40 lg:rounded-md'} />
     </Link>
      </div>
  )
}

export default ConctactUs