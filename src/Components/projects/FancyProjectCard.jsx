import React from 'react';
import { Link } from 'react-router-dom';

const FancyProjectCard = ({ title, description, image }) => {
  return (
        <div className="container">
          <div className="relative lg:w-[340px] lg:h-[300px] w-[170px] h-[150px] rounded-lg overflow-hidden shadow-2xl transform transition duration-500 hover:shadow-xl hover:border-[1px] hover:border-gray-400 border-[1px] border-transparent ">
              <div className="overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 transform " src={image} alt={title}/>
              <div className="p-3  text-black ">
                <h5 className="mb-2 lg:text-2xl lg:block hidden font-bold">{title}</h5>
                <p className="mb-4 hidden lg:block text-sm">{description}</p>
                <button class="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden lg:px-8 lg:py-2 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
                  <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                  <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
                  <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
                  <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
                  <p class="z-10 text-[10px] lg:text-[16px] ">Live Preview</p>
              </button>
              </div>
              </div>
            </div>
        </div>


          );
        };

export default FancyProjectCard;
