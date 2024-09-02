import React from 'react'

export const Card = ({icon, title, description, bgColor, hoverColor  }) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-md p-6 text-center transform transition-all duration-300 ${hoverColor} hover:scale-105 hover:shadow-lg`} >
    <div className="flex justify-center items-center mb-4">
        <div className="bg-white p-4 rounded-full">{icon}</div>
    </div>
    <h2 className="lg:text-xl font-semibold text-black mb-2 ">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
  )
}
