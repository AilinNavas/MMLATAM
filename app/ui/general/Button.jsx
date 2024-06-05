import React from 'react'

const Button = ({ bg, bgHover, textColor, text , especif, href }) => {
  return (
    <button
      className={`cursor-pointer ${bg} ${bgHover} ${especif} flex w-full items-center justify-center rounded-md border-transparent font-medium text-lg py-4 px-6 transition-all duration-200`}
    >
      <a
        href={href}
        className={`w-full h-full flex items-center justify-center ${textColor}`}
      >
        {text}
      </a>
    </button>
  )
}

export default Button
