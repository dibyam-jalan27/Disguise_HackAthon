import React, { useEffect, useState } from 'react'
import {FcGoogle} from "react-icons/fc";
import {IoLogoFacebook} from "react-icons/io" ;
import { Link } from 'react-router-dom';    

const Login = () => {

    const [email , setEmail ] = useState("");
    const [ otpCol , setOtpCol ] = useState(false);
    const [ otpInp , setOtpInp  ] = useState(false);
    const handleforgetPassword = async () => {
        setOtpCol(true);
    }
    const handleOtpInp = async () => {
        setOtpInp(true);
    }
    const [loading , setLoading] = useState(false);
    const handleClick = async () =>{
        setLoading(true);
    }

    const handleSubmit = async (e) =>{
            console.log(e);
    }

    const signInWithGoogle = async () => {
        console.log("google sign");
    }
    const signInWithFacebook = async () => {
        console.log("facebook sign");
    }
    

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gray-200 p-8 shadow-md rounded-md w-96"> 
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
       
         <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div> 

        <div >
          <div className='flex justify-between items-center' ><span>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={() => {
              // Handle login logic here
            }}
          >
            Login
          </button>
          </span>
          <a
            href='/otp'
            className="text-blue-500 font-semibold hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-300 hover:cursor-pointer"
            onClick={handleforgetPassword}
          >
            Forgot Password?
          </a>
          </div>
         

        </div>
      </div>
    </div>
    )
  }
  
  export default Login
