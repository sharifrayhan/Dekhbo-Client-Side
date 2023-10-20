import React, { Component } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { Context } from "../context/AllContext";

const TopNews = () => {

    const {theme} = useContext(Context);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
        <div className={`p-10 ${theme == "dark" ? "bg-[#0D1117]" : "bg-white"}`}>
            <center className="mb-5"><h1 className={`${theme == "dark" ? "text-slate-200" : "text-[#162028]"} font-bold `}><span className=" text-2xl">Top News</span></h1></center>
            <div className="">
                <Slider  {...settings}>
                    <div >
                        <div className={`card card-side  shadow-xl ${theme == "dark" ? "bg-[#162028]" : "bg-slate-200"}`}>
                            <figure><img className=" h-[390px]" src="https://i.ibb.co/FBhdGDJ/casino-news.jpg" alt="Movie"/></figure>
                            <div className="card-body">
                            <h1 className=" text-[#D29C0D]">JAMES BOND 007: DANIEL CRAIG (2023)</h1>
                                <h2 className={`card-title ${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>Director Accidentally Offered Casino Royale, Details James Bond Movie Near-Miss That Got Daniel Craig The Role</h2>
                                <p className={`${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>The renowned director of the Kingsman series was accidentally offered to helm Casino Royale, which introduced Daniel Craig as the famous 007.

</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary"><a href="https://screenrant.com/casino-royale-james-bond-director-offer-daniel-craig-role-matthew-vaughn/">Details</a></button>
                                </div>
                            </div>
                            </div>
                        </div>

                    <div >
                    <div className={`card card-side  shadow-xl ${theme == "dark" ? "bg-[#162028]" : "bg-slate-200"}`}>
  <figure><img className=" h-[390px]" src="https://i.ibb.co/q7CRmh6/hunger-games-news.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h1 className=" text-[#D29C0D]">THE HUNGER GAMES: THE BALLAD OF SONGBIRDS AND SNAKES (2023)</h1>
    <h2 className={`card-title ${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>Hunger Games: Songbirds & Snakes Extended Trailer Unpacks Rachel Zegler’s “Anti-Katniss”</h2>
    <p className={`${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>A new trailer for The Hunger Games: The Ballad of Songbirds and Snakes reveals more about the movie, including about Rachel Zegler’s Lucy Gray.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href="https://screenrant.com/hunger-games-ballad-songbirds-snakes-movie-trailer-extended/">Details</a></button>
    </div>
  </div>
</div>
                    </div>

                    <div>
                        
                    <div className={`card card-side  shadow-xl ${theme == "dark" ? "bg-[#162028]" : "bg-slate-200"}`}>
  <figure><img className=" h-[390px]" src="https://i.ibb.co/gt0Kknz/netflix-news.jpg" alt="Movie"/></figure>
  <div className="card-body">
  <h1 className=" text-[#D29C0D]">NETFLIX (2023)</h1>
    <h2 className={`card-title ${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>Netflix Raises Prices Of Subscription Plans, Maximum Is Now $22.99 A Month</h2>
    <p className={`${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>Netflix raises the prices for two different subscription plans in the US, reflecting an ongoing trend for streaming service price hikes.

</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href="https://screenrant.com/netflix-subscription-plans-cost-price-raise-us/"></a>Details</button>
    </div>
  </div>
</div>

                    </div>


                </Slider>
            </div>
        </div>
    );
};

export default TopNews;