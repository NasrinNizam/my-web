import React from 'react'
import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
export const SkillItem = ({icon: Icon, skillName}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
       <div
         className={`w-44 h-44 flex flex-col items-center justify-center rounded-3xl shadow-2xl transform transition-all duration-500
         ${isHovered ? 'bg-[#FFEAD9] text-black scale-105' : 'bg-blue-100 text-black'}`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
         <Icon size={50} className={`mb-4 transition-transform duration-500 ${isHovered ? 'rotate-12 scale-105' : 'rotate-0'}`} />
         <p className="text-lg font-semibold ">{skillName}</p>
       </div>
    </>
  )
}
