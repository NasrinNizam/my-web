import React, { useEffect } from 'react'
import '../portfolio/portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { SkillItem } from './SkillItem'
// import { FaReact } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
export const Portfolio = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div>
     <div className="min-h-screen bg-[#F0F6F6] text-black p-10 font-serif ">
      {/* Header */}
      <header  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-3 animate-fadeInDown">Nasrin Sultana</h1>
        <p className="text-xl text-black animate-fadeInUp">React Developer</p>
      </header>

      {/* Main Container */}
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden animate-fadeIn">
        {/* Inner Container */}
        <div className="p-10 md:p-13">
          
          {/* About Me */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4 border-b-2 border-gray-300 pb-2 transform transition-transform duration-500 hover:scale-105 hover:text-black">
              About Me
            </h2>
            <p className="text-lg text-black leading-relaxed">
              I am a creative and detail-oriented Frontend Developer with over 3 years of experience in building aesthetically pleasing and highly functional web applications. My passion lies in crafting seamless user experiences through clean and efficient code, combined with a strong eye for design.
            </p>
          </section>

          {/* Address */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4 border-b-2 border-gray-300 pb-2 transform transition-transform duration-500 hover:scale-105 hover:text-black">
              Address
            </h2>
            <p className="text-lg text-black">Dhaka, Bangladesh</p>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4 border-b-2 border-gray-300 pb-2 transform transition-transform duration-500 hover:scale-105 hover:text-black">
              Education
            </h2>
            <div className="bg-[#F0F6F6] hover:bg-blue-50 p-6 rounded-md shadow-md transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-black">University of Dhaka</h3>
              <p className="text-lg text-black">Institute of Health Economics</p>
              <p className="text-lg text-black">Graduated in 2016</p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-4 border-b-2 border-gray-300 pb-2 transform transition-transform duration-500 hover:scale-105 hover:text-black">
              Experience
            </h2>
            <div className="bg-[#F0F6F6] hover:bg-orange-50 p-6 rounded-md shadow-md transition-transform duration-500 hover:scale-105 ">
              <h3 className="text-2xl font-bold text-black">React Developer</h3>
              <p className="text-lg text-black">3+ years of experience in web development</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-2 transform transition-transform duration-500 hover:scale-105 text-black">
              Skills
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 p-10">
              <li><SkillItem icon={FaHtml5} skillName="HTML5" /></li>
              <li><SkillItem icon={FaCss3Alt} skillName="CSS3" /></li>
              <li><SkillItem icon={FaJs} skillName="JavaScript" /></li>
              <li> <SkillItem icon={SiTailwindcss} skillName="Tailwind CSS" /></li>
              <li><SkillItem icon={FaReact} skillName="React JS" /></li>
              <li><SkillItem icon={FaFigma} skillName="Figma" /></li>
             </ul>
          </section>
        </div>
      </div>
    </div>
    </div>
  )
}
