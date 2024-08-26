import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { SocialButton } from './SocialButton';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import '../Home/home.css'
import { MegaButton } from './MegaButton';
export const Home = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
     <div className="pt-10 ">
       <div className="container flex justify-around items-center flex-col md:flex-row">
        <div data-aos="fade-right"
             data-aos-offset="300"
             data-aos-duration="1000"
             data-aos-easing="ease-in-sine" className=" relative">
          <div className="w-[90px] h-[90px] bg-[#FFB647] rounded-full opacity-50 absolute top-[-30px] z-[1] "></div>
          <div className="div flex gap-[10px] justify-start items-center ">
            <div className="w-[30px] h-[2px] bg-orange-700"></div>
            <h2 className="text-[25px] font-semibold z-20 ">Hello, I Am</h2>
          </div>
          <h1 className="text-[50px] font-bold z-[200] "> Nasrin Sultana</h1>
          <h2 className="text-[25px] font-semibold mb-3 ">React Developer</h2>
          <a href="/images/my-resume.pdf" download='nasrin.pdf' className=" mb-5 relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-orange-500 rounded-full overflow-hidden transition duration-500 ease-in-out group hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300">
            <span className="absolute inset-0 w-0 bg-white opacity-30 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10">Download CV</span>
            <span className="absolute right-0 w-8 h-8 transform rotate-45 translate-x-full translate-y-full bg-white opacity-50 transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
          </a>
          <div className="flex gap-5"> 
            <SocialButton hoverBg='hover:bg-blue-800' color='text-blue-800' icons= {<FaFacebookF size={20} />} social="https://www.facebook.com/profile.php?id=61557964826146"/>
            <SocialButton hoverBg='hover:bg-blue-800' color="text-blue-800" icons= {<FaLinkedinIn size={20} />} social="https://www.linkedin.com/in/nasrin-sultana-5a59b9301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
            <SocialButton hoverBg='hover:bg-black' color="text-black" icons= { <FaGithub size={20} />} social="https://github.com/NasrinNizam"/>
          </div>
        </div>
        <div className="h-[400px] relative ">
          <img  data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="300"
          data-aos-duration="1000" className=" h-full " src="/images/me-removebg.png" alt="nasrin" />
          <div className="w-[90px] h-[90px] border-[#FFB647] border-[10px]  rounded-full opacity-50 absolute top-5 right-0 z-[1] "></div>
          <div className="absolute bottom-0 right-4 "><MegaButton /></div>
        </div>
       </div>
     </div>
    </>
  )
}
