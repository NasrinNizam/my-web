import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaStar, FaStarHalfAlt, FaQuoteLeft ,  } from 'react-icons/fa';


export const ReviewCard = ({ name, rating, comment, date, avatar  }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <>
   <div className="max-w-md bg-white shadow-xl rounded-2xl p-8 mb-8 transition-transform transform hover:scale-105 hover:bg-blue-50 hover:shadow-2xl">
      <div data-aos="zoom-out-down" className="flex items-center mb-6">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-gray-200 mr-4"/>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div data-aos="zoom-out-up" className="flex items-center mb-4">
        <div className="flex text-yellow-500">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <FaStar key={i} />
          ))}
          {rating % 1 !== 0 && <FaStarHalfAlt />}
        </div>
        <span className="ml-2 text-gray-600">{rating} out of 5</span>
      </div>
      <p data-aos="zoom-out-up" className="text-gray-700 italic mb-4">
        <FaQuoteLeft className="text-gray-400 mr-2 inline-block" />
        {comment}

      </p>
    </div>
    </>
  )
}
