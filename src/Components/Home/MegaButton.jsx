import React from 'react'
import { SocialButton } from './SocialButton'
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export const MegaButton = () => {
  return (
    <>
   <div className="relative inline-flex items-center justify-between bg-white text-black font-bold py-3 lg:px-10 px-6  shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 active:scale-95 w-full max-w-4xl">
      <h1 className="text-[18px]  "> <span className="text-orange-600 text-[35px] font-bold ">3+ </span>Years of Experience</h1>
      {/* <div className="flex gap-5"> 
            <SocialButton hoverBg='hover:bg-blue-800' color='text-blue-800' icons= {<FaFacebookF size={20} />} social="https://www.facebook.com/profile.php?id=61557964826146"/>
            <SocialButton hoverBg='hover:bg-blue-800' color="text-blue-800" icons= {<FaLinkedinIn size={20} />} social="#"/>
            <SocialButton hoverBg='hover:bg-black' color="text-black" icons= { <FaGithub size={20} />} social="https://github.com/NasrinNizam"/>
          </div> */}
    </div>
    </>
  )
}
