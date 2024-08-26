import React from 'react';

const FancyProjectCard = ({ title, description, image }) => {
  return (
<div className="relative w-[350px] h-[300px] rounded-lg overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-[1px] hover:border-gray-400 ">
      <div className="overflow-hidden">
        <img className="w-full h-[150px] object-cover transition-transform duration-500 transform hover:scale-110 hover:rotate-3" src={image} alt={title}/>
      </div>
      <div className="p-3  text-black">
        <h5 className="mb-2 text-2xl font-bold">{title}</h5>
        <p className="mb-4 text-sm">{description}</p>
        <button className="px-4 py-2 bg-white shadow-2xl text-black font-semibold rounded-md hover:bg-gray-300 transition-colors duration-300"> View Project </button>
      </div>
    </div>


  );
};

export default FancyProjectCard;
