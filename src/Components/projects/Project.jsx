import React, { useEffect } from 'react'
import FancyProjectCard from './FancyProjectCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaCode, FaReact, FaDatabase, FaPaintBrush, FaTools } from 'react-icons/fa';
import { TbWindowMinimize } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export const Project = () => {
  // ====== slider variables =======//
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
       
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      // ========== offer card variables ======
      const services = [
        {
          title: 'Front-End Design',
          description: 'Using HTML5, CSS3, and Vanilla JS to create responsive and visually appealing designs.',
          icon: <FaPaintBrush />,
          hoverColor: 'hover:bg-yellow-100',
          borderColor: 'border-yellow-400',
          textColor: 'text-yellow-500',
        },
        {
          title: 'Front-End Development',
          description: 'Building dynamic and interactive user interfaces with React and Tailwind CSS.',
          icon: <FaReact />,
          hoverColor: 'hover:bg-blue-100',
          borderColor: 'border-blue-400',
          textColor: 'text-blue-500',
        },
        {
          title: 'Back-End Development',
          description: 'Developing scalable and secure back-end systems using Firebase.',
          icon: <FaDatabase />,
          hoverColor: 'hover:bg-green-100',
          borderColor: 'border-green-400',
          textColor: 'text-green-500',
        },
        {
          title: 'Customize Websites',
          description: 'Tailoring websites to meet specific client needs and preferences.',
          icon: <FaCode />,
          hoverColor: 'hover:bg-purple-100',
          borderColor: 'border-purple-400',
          textColor: 'text-purple-500',
        },
        {
          title: 'Website Maintenance',
          description: 'Providing ongoing support and updates to keep websites running smoothly.',
          icon: <FaTools />,
          hoverColor: 'hover:bg-red-100',
          borderColor: 'border-red-400',
          textColor: 'text-red-500',
        },
        {
          title: 'Responsive Design',
          description: 'Responsive design ensures a seamless user experience on all devices.',
          icon:<TbWindowMinimize />,
          hoverColor: 'hover:bg-teal-100',
          borderColor: 'border-teal-400',
          textColor: 'text-teal-500',
        },
      ];
      // ======== aos animation variables ==========//
      useEffect(() => {
        Aos.init({ duration: 1000 });
        Aos.refresh();
      }, []);
      
  return (
    <>
    <div className="container">
        <div className="div">
            <div className="mt-[60px] mb-[60px] ">
                <div className="flex items-center gap-[10px] mb-7 ">
                   <h3 className="text-[25px] text-black font-semibold  ">New Projects </h3>
                   <div className="md:w-[120px] w-[50px] h-[1px] bg-black  "></div>
                </div>
                {/* ======= slider part ====== */}
                <div className="" >
                   <Slider {...settings}>
                      <div data-aos="zoom-in">
                        <FancyProjectCard link="https://news-pro-rho.vercel.app/" image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                      <div  data-aos="zoom-in">
                        <FancyProjectCard link="https://chatting-u9sf6ig4a-nasrinnizams-projects.vercel.app" image='images/chat.png' title='Chatify' description='A chatting Website'/>
                      </div>
                      <div  data-aos="zoom-in">
                        <FancyProjectCard link="https://web-hosting-eosin.vercel.app/" image='images/web.png' title='Hosting Website' description='Premium Web Hosting for Your Website'/>
                      </div>
                      <div  data-aos="zoom-in">
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                      <div  data-aos="zoom-in">
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                    </Slider>
                </div>
            </div>
            {/* ======== what I offer part ======= */}
            <div className="mb-[60px] ">
                <div className="flex items-center gap-[10px] mb-7 ">
                   <h3 className="text-[25px] text-black font-semibold  ">What I Offer </h3>
                   <div className="md:w-[120px] w-[50px] h-[1px] bg-black  "></div>
                </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
             {services.map((service, index) => (
              <div  data-aos="zoom-in-up" key={index} className={`bg-white border-l-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-6 ${service.hoverColor} ${service.borderColor}`}>
                <div className="flex items-center mb-4">
                  <span className={`text-3xl ${service.textColor}`}>
                    {service.icon}
                  </span>
                  <h3 className="ml-3 text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
         </div>
            {/* ======= my projects part ======== */}
            <div className="div">
            <div className="flex items-center gap-[10px] mb-7 ">
                   <h3 className="text-[25px] text-black font-semibold  ">Projects </h3>
                   <div className="md:w-[120px] w-[50px] h-[1px] bg-black  "></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  <ProjectCard lnk='https://nasrinnizam.github.io/Wallet-money-transaction/' img={<img className="w-full h-48 object-cover" src="images/bank.png" alt="Project"/>} title='Wallet' brief={'This is a simple money transaction application. '} />
                  <ProjectCard lnk='https://nasrinnizam.github.io/TOBOLO/' img={<img className="w-full h-48 object-cover" src="images/tobolo.png" alt="Project"/>} title='TOBOLO , the guessing game' brief={'This is a number guessing game. '} />
                  <ProjectCard lnk='https://nasrinnizam.github.io/to-do-new/' img={<img className="w-full h-48 object-cover" src="images/todo.png" alt="Project"/>} title='To-Do List' brief={'This is a to-do list application. '} />
                  <ProjectCard lnk='https://nasrinnizam.github.io/number-multiplication-table/' img={<img className="w-full h-48 object-cover" src="images/number.png" alt="Project"/>} title='Number Multiplication Table' brief={'This is a number multiplication table. Fun to use and also helpful '} />
                  <ProjectCard lnk='https://nasrinnizam.github.io/Number_counter/' img={<img className="w-full h-48 object-cover" src="images/counter.png" alt="Project"/>} title='Number Counter' brief={"This is a Number counter. It can count from zero to infinity. "} />
                </div>
            </div>               
        </div>
     </div>
    </>
  )
}
