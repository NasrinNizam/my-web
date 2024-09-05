import React from 'react'

export const InfoCard = ({ icon, title, content, hoverColor }) => {
  return (
    <div>
        <div className={`flex items-center md:p-6 p-3 md:flex-row text-center md:text-left flex-col bg-white rounded-lg shadow-md transform transition-all duration-300 ${hoverColor} hover:scale-105 hover:shadow-lg`}>
          <div className="mr-4">{icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
            <p className="text-gray-600">{content}</p>
         </div>
    </div>
        
    </div>
  )
}
