import React from 'react'
import FancyProjectCard from './FancyProjectCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { OfferCard } from './OfferCard';
import { FaHtml5, FaReact, FaCogs, FaTools } from 'react-icons/fa';
import { StateCard } from './StateCard';
import { FaRegSmile, FaProjectDiagram, FaAward } from 'react-icons/fa';

export const Project = () => {
    var settings = {
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
                <div className="slider-container" >
                   <Slider {...settings}>
                      <div>
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                      <div>
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                      <div>
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                      <div>
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                      <div>
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                      <div>
                        <FancyProjectCard image='images/news.png' title='NewsPro' description='An e-news Platform'/>
                      </div>
                    </Slider>
                </div>
            </div>
            {/* ======== what I offer part ======= */}
            <div className="mb-[60px] ">
                <div className="flex items-center gap-4 mb-5 ">
                    <h2 className="text-[25px] text-black font-semibold  ">What I Offer</h2>
                    <div className="w-[120px] h-[1px] bg-black "></div>
                </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <OfferCard title="Front-End Design" description="HTML5, CSS, and Vanilla JS" icon={<FaHtml5 />}/>
                <OfferCard title="Front-End Development" description="React and Tailwind CSS"  icon={<FaReact />}/>
                <OfferCard title="Customizing Websites" description="Tailored solutions to fit your needs" icon={<FaCogs />}/>
                <OfferCard title="Website Maintenance" description="Keep your site running smoothly" icon={<FaTools />} />
              </div>
            </div>
            {/* ======= my profile part ======== */}
            <section className="mt-6 mb-8 bg-gray-500 p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StateCard title="Years of Experience" value="03+" icon={<FaAward />} bgColor="bg-purple-400" glowColor="text-indigo-300" />
              <StateCard title="Projects Completed" value="100+" icon={<FaProjectDiagram />} bgColor="bg-teal-700" glowColor="text-teal-300"/>
              <StateCard title="Happy Clients" value="90+" icon={<FaRegSmile />} bgColor="bg-red-700" glowColor="text-white"/>
            </div>
          </section>
        </div>
     </div>
    </>
  )
}
