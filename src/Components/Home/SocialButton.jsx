import React from 'react'
import { Link } from 'react-router-dom';

export const SocialButton = ({social , icons , color, hoverBg}) => {
  return (
    <div>
      <Link to={social}  className={`flex items-center justify-center md:w-12 md:h-12 w-10 h-10  bg-white ${color}  rounded-full shadow-lg transition-all duration-300 ease-in-out transform ${hoverBg} hover:-translate-y-1 hover:scale-110 hover:rotate-6 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50 active:bg-orange-700`}>
      {icons}
    </Link>
    </div>
  )
}
