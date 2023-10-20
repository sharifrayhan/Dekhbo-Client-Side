import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/AllContext";

const Navbar = () => {
    const { user, logOut, toggleTheme, theme } = useContext(Context);



    const handleLogOut = () => {
        logOut();
      };

    const navLinks = (
        <>
          <li className={ `${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`} >
            <Link to="/">Home</Link>
          </li>
          <li className={ `${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>
            <Link to="/AddProducts">Add Product</Link>
          </li>
          <li className={ `${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>
            <Link to="/MyCart">My Cart</Link>
          </li>
        </>
      );

    return (
        <div className=" sticky z-20">
        <div className={`navbar p-0  flex items-center px-2 md:px-9 lg:px-10 mx-auto ${theme == "dark" ? "bg-[#162028]" : "bg-slate-200"}`}>
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
  
              <ul
                tabIndex={0}
                className="menu menu-xs dropdown-content  mt-3 z-[1] p-2 shadow glass rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div>
              <img
                className=" h-3 md:h-5 lg:h-7"
                src="https://i.ibb.co/C0726np/logo-blue.png"
                alt=""
              />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end flex gap-2">
            {user ? (
              <button
                onClick={handleLogOut}
                className={`py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#06beb6]  to-[#48b1bf] ${theme == "dark" ? "text-slate-200" : "text-[#162028]"} `}
              >
                Sign Out
              </button>
            ) : (
              <Link to="/Login">
                <button className={`py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#06beb6]  to-[#48b1bf] ${theme == "dark" ? "text-slate-200" : "text-[#162028]"}`}>
                  Log In
                </button>
              </Link>
            )}
            <button onClick={toggleTheme} className=" px-3 py-2 gap-2 rounded-md bg-slate-500 flex hover:bg-gradient-to-r from-[#06beb6]  to-[#162028]"><img className=" h-6  " src="https://i.ibb.co/vXN6Dhz/day.png" alt="" /><img className=" h-5" src="https://i.ibb.co/hM67vHc/night.png" alt="" /></button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;