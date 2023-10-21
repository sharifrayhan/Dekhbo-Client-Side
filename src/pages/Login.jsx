import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { Context } from "../context/AllContext";

const Login = () => {

    const { handleLogin, handleGoogleSignIn, handleFacebookSignIn} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
  
    return (
        <div className=" h-screen max-h-full max-width-full w-screen  bg-[url(https://i.ibb.co/2MYfNMW/white.jpg)] bg-cover ">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className=" mx-auto lg:ml-8 mb-12 rounded-md mt-12 max-w-[570px] bg-[#18B5C8] max-h-[550px] glass p-12">
        <center className=" my-5">
          <h1 className=" text-2xl text-white font-bold">
            Login To Your Account
          </h1>
        </center>
        <hr className=" my-3" />
        <form
          onSubmit={(e) => handleLogin(e, navigate, location)}
          className="flex flex-col gap-4"
        >
          <div>
            <h1 className=" mb-2 text-slate-200 font-semibold">Email</h1>
            <input
              className=" glass placeholder-slate-200 rounded-sm w-full py-3 px-3"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <h1 className=" mb-2 text-slate-200 font-semibold">Password</h1>
            <input
              className=" glass  placeholder-slate-200 rounded-sm w-full py-3 px-3"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className=" glass text-white  py-3 bg-[#403F3F]"
            type="submit"
          >
            Login
          </button>
        </form>
        <center>
          <p className=" text-white mt-4">
            Dont have an account?{" "}
            <Link className=" text-red-600" to="/Register">
              Register
            </Link>{" "}
          </p>
        </center>
        <center>
          <button
            onClick={()=>handleGoogleSignIn( navigate, location)}
            className="mt-2 text-white text-sm flex mb-2 items-center gap-1 rounded-md px-12 py-2 w-[270px] border-[0.1px] border-white"
          >
            <img
              className="w-5 ml-3 rounded-full avatar"
              src="https://i.ibb.co/wMJtbrm/google-icon.png"
              alt=""
            />
            Login with Google
          </button>

          <button
            onClick={()=>handleFacebookSignIn( navigate, location)}
            className="mt-2 text-white text-sm flex mb-2 items-center gap-1 rounded-md px-12 py-2 w-[270px] border-[0.1px] border-white"
          >
            <img
              className="w-5 ml-3 rounded-full avatar"
              src="https://i.ibb.co/nz5QPSH/fb-circle-icon.png"
              alt=""
            />
            Login with Facebook
          </button>
        </center>
      </div>
    </div>
    );
};

export default Login;