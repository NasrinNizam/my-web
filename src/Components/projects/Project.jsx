import React from 'react'
import FancyProjectCard from './FancyProjectCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1
    }    
  return (
    <>
    <div className="container">
        <div className="div">
            <div className="mt-[60px] ">
                <h3 className="text-[25px] text-black font-semibold mb-7 "> New Projects </h3>
                <div className="div">
                   <Slider className=" bg-transparent" {...settings}>
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
        </div>
    </div>
    </>
  )
}
