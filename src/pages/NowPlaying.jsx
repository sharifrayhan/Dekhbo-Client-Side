import React, { Component } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { Context } from "../context/AllContext";

const NowPlaying = () => {

    const {theme} = useContext(Context);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        <div className={`p-10 ${theme == "dark" ? "bg-[#0D1117]" : "bg-slate-200"}`}>
            <center className="mb-5"><h1 className={`${theme == "dark" ? "text-slate-200" : "text-[#162028]"} font-bold `}><span className=" text-[12px] md:text-[20px] lg:text-[30px]">Now Playing</span> <br /><span className=" text-[10px] md:text-[14px] lg:text-[16px]">On Your Favorite Streaming Platforms</span></h1></center>
            <div className="">
                <Slider  {...settings}>
                    <div >
                        <img className=" h-[490px]  md:h-[350px] lg:h-[590px] rounded-md" src="https://i.ibb.co/MprrGh7/dui-diner-dunia.jpg" alt="" />
                    </div>

                    <div >
                        <img className="h-[490px]  md:h-[350px] lg:h-[590px] rounded-md" src="https://i.ibb.co/xmccmzS/heart-of-stone.jpg" alt="" />
                    </div>

                    <div>
                        <img className="h-[490px] md:h-[350px] lg:h-[590px]  rounded-md" src="https://i.ibb.co/7N5fRzR/last-of-us.jpg" alt="" />
                    </div>

                    <div>
                        <img className="h-[490px] md:h-[350px] lg:h-[590px] rounded-md" src="https://i.ibb.co/52rtCWj/lie.jpg" alt="" />
                    </div>

                    <div>
                        <img className="h-[490px] md:h-[350px] lg:h-[590px] rounded-md" src="https://i.ibb.co/Tb72ssF/loki.jpg" alt="" />
                    </div>

                    <div>
                        <img className="h-[490px] md:h-[350px] lg:h-[590px] rounded-md" src="https://i.ibb.co/G7LsPRQ/prey.jpg" alt="" />
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default NowPlaying;