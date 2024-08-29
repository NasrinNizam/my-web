import React from 'react'

export const Section = ({ title, children }) => {
  return (
    <div>
        <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {children}
  </div>
    </div>
  )
}
