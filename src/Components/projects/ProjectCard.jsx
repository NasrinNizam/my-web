import React from 'react';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
