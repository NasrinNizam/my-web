import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({img , title , brief , lnk}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        {img}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <Link
            to={`${lnk}`} target='_blank'
            className="bg-indigo-400 text-white py-2 px-4 rounded-full font-bold text-sm transition duration-300 hover:bg-indigo-600"
          >
            Live Preview
          </Link>
        </div>
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title} </h3>
        <p className="text-gray-700 text-sm">{brief} </p>
      </div>
    </div>
  );
};

export default ProjectCard;
