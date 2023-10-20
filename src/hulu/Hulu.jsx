import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../components/Navbar";

const Hulu = () => {

    const items = useLoaderData()
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2500,
      };

    return (
        <div>
            <Navbar></Navbar>
            <Slider  {...settings}>

                <div>
                    <img src="https://i.ibb.co/h97Zvr9/hulu-1.jpg" alt="" />
                </div>

                <div>
                    <img src="https://i.ibb.co/PccfYNc/hulu-2.jpg" alt="" />
                </div>

                <div>
                    <img src="https://i.ibb.co/026fqwC/hulu-3.jpg" alt="" />
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
                                <Link to={`/Details/${item?._id}`}><button className=" p-2 text-gray-100 glass rounded-md">Details</button></Link>
                                <Link to={`/UpdateProducts/${item?._id}`}><button className=" p-2 text-gray-100 glass rounded-md">Update</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Hulu;