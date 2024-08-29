import React from 'react';
import { Link } from 'react-router-dom';

const FancyProjectCard = ({ title, description, image }) => {
  return (
        <div className="container">
          <div className="relative lg:w-[340px] lg:h-[300px] sm:w-[150px] sm:h-[200px] rounded-lg overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-[1px] hover:border-gray-400 ">
              <div className="overflow-hidden">
                <img className="w-full h-[150px] object-cover transition-transform duration-500 transform hover:scale-110 hover:rotate-3" src={image} alt={title}/>
              </div>
              <div className="p-3  text-black">
                <h5 className="mb-2 lg:text-2xl lg:block hidden font-bold">{title}</h5>
                <p className="mb-4 hidden lg:block text-sm">{description}</p>
                <Link to="#" className="px-4 py-2 bg-white shadow-2xl text-black lg:text-lg sm:text-[15px] font-semibold rounded-md hover:bg-gray-300 transition-colors text-[10px] lg:text-[16px] duration-300">Live Preview</Link>
              </div>
            </div>
        </div>


          );
        };

export default FancyProjectCard;
