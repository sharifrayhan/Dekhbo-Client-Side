import { useContext} from 'react';
import Navbar from '../components/Navbar';
import {  Link, useNavigate } from "react-router-dom";
import { Context } from '../context/AllContext';

const Register = () => {

  const { handleRegister, registerError, termsError, googleSignIn} = useContext(Context)

  const navigate = useNavigate()
 
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result=>{
        console.log(result.user)
    
    })
    .catch(error=>{
        console.error(error)
    })
  }
  
    return (
<div className="  max-h-auto pb-10  bg-[url(https://i.ibb.co/gvq2whv/black.jpg)] bg-cover ">
            <div className=""><Navbar></Navbar></div>
            <div className="mx-auto lg:ml-8 mt-2 rounded-md  mb-9  max-w-[570px] max-h-[750px] glass p-12">
        <center className=" my-3"><h1 className=" text-white text-2xl font-bold">Register your account</h1></center>
        <hr className=" my-3" />
        <form onSubmit={(e)=>handleRegister(e, navigate)}  className="flex flex-col gap-4">
        <div>
            <h1 className=" mb-2 text-slate-200 font-semibold" >Your Name</h1>
            <input className=" glass placeholder-slate-200 w-full py-3 px-3" required type="text" id="name" name="name" placeholder="Enter your name" />
          </div>

          <div>
            <h1 className=" mb-2 text-slate-200 font-semibold" >Email</h1>
            <input className=" glass w-full placeholder-slate-200 py-3 px-3" required type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <h1 className=" mb-2 text-slate-200 font-semibold">Password</h1>
            <input className=" glass w-full placeholder-slate-200 py-3 px-3" required type="password" id="password" name="password" placeholder="Enter your password" />
             <p className=' text-red-600 '>{registerError}</p>
          </div>
          <div >
            <div className="flex gap-2">
            <input type="checkbox" id='checkbox' name='checkbox'/> <p className=' text-white '>Accept Term & Conditions</p>
            </div>
            <p className=' text-red-600 '>{termsError}</p>
          </div>
          
          <button className=" glass text-white py-3 bg-[#403F3F]" type="submit">Register</button>
        </form>
        <center><p className=" text-white mt-4">Already have an account? <Link className=" text-red-600" to="/Login">Login</Link> </p></center>
        <center><button onClick={handleGoogleSignIn} className='mt-2 text-white text-sm flex mb-2 items-center gap-1 rounded-md px-5 pl-2 py-2  border-[0.1px] border-white'><img className="w-5 ml-3 rounded-full avatar" src="https://i.ibb.co/wMJtbrm/google-icon.png" alt="" /></button></center>
      </div>
        </div>
    );
};

export default Register