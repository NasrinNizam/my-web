import React from 'react'

export const OfferCard = ({ title, description, icon }) => {
  return (
    <div>
    <div className="relative max-w-sm hover:bg-orange-50 bg-blue-100 border-indigo-200 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl">
      <div className="p-6 text-center">
        <div className="mb-4 text-5xl text-indigo-500">{icon}</div>
        <h5 className="mb-2 text-xl font-bold text-gray-800">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 transition-all duration-500 group-hover:h-2"></div>
    </div>

    </div>
  )
}
