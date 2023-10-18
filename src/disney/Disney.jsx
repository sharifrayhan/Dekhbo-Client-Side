import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";


import Slider from "react-slick";
import Navbar from "../components/Navbar";

const Disney = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('disney.json')
        .then(res => res.json())
        .then(data => setItems(data))

    },[])

    var settings = {
        dots: true,
        arrows: true,
       
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2500,
      };

    return (
        <div>
            <Navbar></Navbar>
            <Slider  {...settings}>

                <div>
                    <img src="https://i.ibb.co/6b0rTJY/Disney-1.jpg" alt="" />
                </div>

                <div>
                    <img src="https://i.ibb.co/vd0W3gZ/Disney-2.jpg" alt="" />
                </div>

                <div>
                    <img src="https://i.ibb.co/ckFV9L3/disney-3.jpg" alt="" />
                </div>

            </Slider>

            <center className=" text-2xl font-bold mt-8">Our Packages</center>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-8 mx-2 md:mx-12 lg:mx-24">
                
                {
                    items.map(item=>(
                        
                        <div key={item?.id} className=" rounded-md p-5 glass bg-[#162028]">
                            <img className=" h-[300px] rounded-md" src={item?.image} alt="" />
                            <div className="text-center">
                                <h1 className=" font-semibold text-lg text-white">{item?.name}</h1>
                                <p className=" text-white" >{item?.price}</p>
                                <p className=" text-white">Rating: {item?.rating}</p>
                            </div>
                            <div className="flex gap-2 items-center justify-center mt-2">
                                <button className=" p-2 text-gray-100 glass rounded-md">Details</button>
                                <button className=" p-2 text-gray-100 glass rounded-md">Update</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Disney;