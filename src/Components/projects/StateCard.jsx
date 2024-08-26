import React from 'react'

export const StateCard = ({ title, value, icon, bgColor, glowColor }) => {
  return (
    <div>
            <div className={`relative max-w-sm p-6 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl ${bgColor}`}>
      <div className="flex items-center justify-center mb-4 text-white">
        <div className={`text-6xl p-4 rounded-full bg-opacity-50 ${glowColor}`}>
          {icon}
        </div>
      </div>
      <h5 className="mb-2 text-4xl font-extrabold text-white text-center">
        {value}
      </h5>
      <p className="text-lg font-semibold text-white text-center">
        {title}
      </p>
      <div className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-white transition-all duration-500"></div>
      <div className={`absolute inset-0 ${glowColor}-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
    </div>
    </div>
  )
}
