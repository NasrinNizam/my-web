import React from 'react'
import FancyProjectCard from './FancyProjectCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { OfferCard } from './OfferCard';
import { FaHtml5, FaReact, FaCogs, FaTools } from 'react-icons/fa';
import { StateCard } from './StateCard';
import { FaRegSmile, FaProjectDiagram, FaAward } from 'react-icons/fa';
import { SiFirebase } from "react-icons/si";

export const Project = () => {
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <OfferCard title="Front-End Design" description="HTML5, CSS, and Vanilla JS" icon={<FaHtml5 />}/>
                <OfferCard title="Front-End Development" description="React and Tailwind CSS"  icon={<FaReact />}/>
                <OfferCard title="Back-End Development" description="Firebase"  icon={<SiFirebase  />}/>
                <OfferCard title="Customizing Websites" description="Tailored solutions to fit your needs" icon={<FaCogs />}/>
                <OfferCard title="Website Maintenance" description="Keep your site running smoothly" icon={<FaTools />} />
                <OfferCard title="Website Maintenance" description="Keep your site running smoothly" icon={<FaTools />} />
              </div>
            </div>
            {/* ======= my profile part ======== */}
            
        </div>
     </div>
    </>
  )
}
