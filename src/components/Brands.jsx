import { useEffect, useState } from "react";
import Brand from "./Brand";
import { useContext } from "react";
import { Context } from "../context/AllContext";


const Brands = () => {
    const {theme} = useContext(Context);

    const [brands, setBrands] = useState([])

useEffect(()=>{
    fetch('brands.json')
    .then(res => res.json())
    .then(data => setBrands(data))

},[])
    return (
        <div className={` p-1 ${theme == "dark" ? "bg-[#0D1117]" : "bg-white"}`}>
                        <center className="my-5"><h1 className={`${theme == "dark" ? "text-slate-200" : "text-[#162028]"} font-bold text-[12px] md:text-[20px] lg:text-[30px] `}><span>Our Services</span></h1></center>
            <div className="grid glass p-5 rounded-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-6 mx-2 md:mx-10 lg:mx-24">

            {
                brands.map(brand =>(
                    <Brand key={brand?.key} brand={brand}></Brand>

                ))
            }
            </div>
        </div>
    );
};

export default Brands;

