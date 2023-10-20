import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/AllContext";


const Brand = ({brand}) => {
    const {theme} = useContext(Context);
    return (
        <Link to={`/${brand?.id}`}>
            <div className=" hover:scale-110">
                <img className="h-[250px] rounded-md" src={brand?.image} alt="" />
                <center><h1 className={`font-bold text-xl ${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>{brand?.name}</h1></center>
            </div>
        </Link>
    );
};

export default Brand;