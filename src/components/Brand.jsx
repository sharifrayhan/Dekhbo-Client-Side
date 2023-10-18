import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    return (
        <Link to={`/${brand?.id}`}>
            <div>
                <img className="h-[250px] rounded-md" src={brand?.image} alt="" />
                <center><h1 className=" font-bold text-xl">{brand?.name}</h1></center>
            </div>
        </Link>
    );
};

export default Brand;