import React, { useEffect } from 'react'
import '../portfolio/portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { SkillItem } from './SkillItem'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma,FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { Card } from './Card'
import { FaRegSmile, FaProjectDiagram, FaUserTie } from 'react-icons/fa';
import { SiFirebase } from "react-icons/si";

export const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <>
     <section className="pt-[60px] ">
        <div className="container">
            <div className="flex justify-between lg:justify-around mb-[80px]">
                <div className="hidden md:block">
                  <div data-aos="fade-down-right" className="lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] ">
                    <img className="w-full h-full rounded-full " src="images/98.jpg" alt="nasrin" />
                  </div>
                  <div data-aos="zoom-in" className="text-center mt-5">
                     <h1 className="lg:text-3xl  font-bold text-black lg:mb-3 animate-fadeInDown">Nasrin Sultana</h1>
                     <p className="lg:text-xl text-sm text-black animate-fadeInUp">React Developer</p>
                  </div>
                </div>
                <div data-aos="zoom-in-left" className="w-[500px] flex justify-center items-center ">
                  <h1 className="lg:text-[25px] text-center font-sev font-semibold ">Experienced React developer with over 3 years of expertise in building high-performance, scalable web applications. I specialize in delivering clean, maintainable code and seamless user experiences. Proficient in modern front-end technologies, including React, React-Redux, I focus on efficient, detail-oriented solutions that exceed client expectations.</h1>
                </div>
            </div>
            <div className=" mx-auto  overflow-hidden animate-fadeIn">
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <h2 className="text-[30px] mb-2 font-semibold font-sans "> Skills</h2>
                <div className="w-[120px] h-[2px] bg-black "></div>
              </div>
              <ul className="max-w-4xl grid grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-9  p-10">
                <li data-aos="zoom-in" ><SkillItem icon={FaHtml5} skillName="HTML5" /></li>
                <li data-aos="zoom-in" ><SkillItem icon={FaCss3Alt} skillName="CSS3" /></li>
                <li data-aos="zoom-in" ><SkillItem icon={FaJs} skillName="JavaScript" /></li>
                <li data-aos="zoom-in" > <SkillItem icon={SiTailwindcss} skillName="Tailwind CSS" /></li>
                <li data-aos="zoom-in" ><SkillItem icon={FaReact} skillName="React JS" /></li>
                <li data-aos="zoom-in" ><SkillItem icon={FaFigma} skillName="Figma" /></li>
                <li data-aos="zoom-in" ><SkillItem icon={SiFirebase} skillName="Firebase" /></li>
                <li data-aos="zoom-in" ><SkillItem icon={FaBootstrap} skillName="Bootstrap" /></li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="flex flex-col lg:flex-row items-center gap-5 mb-5">
                <h2 className="text-[30px]  font-semibold font-sans ">Education</h2>
                <div className="w-[120px] h-[2px] bg-black "></div>
               </div>
               <div  data-aos="flip-left"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000" className=" mx-auto text-center">
                      <div className="w-[80px] h-[80px] mx-auto ">
                        <img className="w-full h-full " src="images/logo.svg" alt="logo" />
                      </div>
                  <h3 className="text-2xl font-bold text-black">University of Dhaka</h3>
                  <p className="text-lg text-black">Institute of Health Economics</p>
                  <p className="text-lg text-black">Bachalor of Social Science</p>
                  <p className="text-lg text-black">Session : 2012-2013</p>
                </div>
            </div>
            <div className="mt-10 mb-10">
            <div className="">
            <div className="flex items-center gap-5 mb-5">
              <h2 className="text-[30px]  font-semibold font-sans ">Statistics</h2>
              <div className="w-[120px] h-[2px] bg-gray-500 "></div>
            </div>
          <div data-aos="zoom-in" className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-5 bg-blue-950">
            <Card icon={<FaUserTie size={50} className="text-blue-900" />} title="3+ Years of Experience" description="Over three years of solid professional experience in the industry." bgColor="bg-blue-100" hoverColor="hover:bg-purple-600" />
            <Card icon={<FaProjectDiagram size={50} className="text-green-800" />} title="100+ Projects" description="Successfully delivered more than 100 projects across various domains."  bgColor="bg-green-100" hoverColor="hover:bg-green-400" />
            <Card icon={<FaRegSmile size={50} className="text-yellow-600" />} title="90+ Happy Clients" description="Proud to have 90+ clients satisfied with our exceptional services." bgColor="bg-yellow-100" hoverColor="hover:bg-yellow-500" />
          </div>
          </div>
            </div>
        </div>
    </section>

   </>
  )
}
