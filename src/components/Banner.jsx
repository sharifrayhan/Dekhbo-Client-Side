import { useContext } from "react";
import { Context } from "../context/AllContext";

const Banner = () => {
    const {theme} = useContext(Context);

    return (
        // h-[755px] ${theme == "dark" ? "bg-[url(https://i.ibb.co/QJvhVNG/black.png)]" : "bg-[url(https://i.ibb.co/4j7pHsB/white.png)]"}
        <div className={`mt-0 md:-mt-24 lg:-mt-24 z-0 h-max  bg-cover `}>
            {theme=="dark"?
             (
             <div >
                <img  src="https://i.ibb.co/hcJhBbc/BLACK-4.png" alt="" />
             </div>
             )
             :   (
                <div >
                   <img  src="https://i.ibb.co/1GpVTgb/WHITE-4.png" alt="" />
                </div>
                )
             }
        </div>
    );
}; 

export default Banner;