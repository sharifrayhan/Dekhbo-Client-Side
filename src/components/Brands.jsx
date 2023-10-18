import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {

    const [brands, setBrands] = useState([])

useEffect(()=>{
    fetch('brands.json')
    .then(res => res.json())
    .then(data => setBrands(data))

},[])
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-6 mx-2 md:mx-10 lg:mx-24">
            {
                brands.map(brand =>(
                    <Brand key={brand?.key} brand={brand}></Brand>

                ))
            }
        </div>
    );
};

export default Brands;

