import React from 'react'

export const ProjectCard = ({title , description}) => {
  return (
    <div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105">
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
  </div>
  )
}
