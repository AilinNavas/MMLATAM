import React from 'react'

const Button = ({ text, especif, href }) => {
  return (

    <button
      className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg font-semibold py-3 px-6 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out ${especif}`}
    >
      <a href={href}>
      {text}
      </a>
    </button>
  )
}

export default Button
