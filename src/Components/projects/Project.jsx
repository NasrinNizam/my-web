import React, { useEffect } from 'react'
import FancyProjectCard from './FancyProjectCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaCode, FaReact, FaDatabase, FaPaintBrush, FaTools } from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
export const Project = () => {
  // ====== slider variables =======//
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        
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
                   <h3 className="text-[25px] text-black font-semibold  "> My Projects </h3>
                   <div className="w-[120px] h-[1px] bg-black  "></div>
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
                      <div data-aos="zoom-in">
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                    </Slider>
                </div>
            </div>
            {/* ======== what I offer part ======= */}
            <div className="mb-[60px] ">
                <div className="flex items-center gap-[10px] mb-7 ">
                   <h3 className="text-[25px] text-black font-semibold  ">What I Offer </h3>
                   <div className="w-[120px] h-[1px] bg-black  "></div>
                </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
            {/* ======= my profile part ======== */}
               
        </div>
     </div>
    </>
  )
}
