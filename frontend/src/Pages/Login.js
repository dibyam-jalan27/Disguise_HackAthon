import React, { useEffect, useState } from 'react'
import {FcGoogle} from "react-icons/fc";
import {IoLogoFacebook} from "react-icons/io" ;
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from '@mui/material';
import "./login.css"

const Login = ({setLogin}) => {

    const navigate = useNavigate();
    const [email , setEmail ] = useState("");
    const [password , setPassword ] = useState("");
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    const handleforgetPassword = async () => {
        navigate("/otp");
    }

    const loginUser = async () => {
      const data = {
        email,
        password
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios.post("/api/v1/login", data, config).then((res) => {
        setLoadingSpinner(false);
        toast.success("Successfully Registered", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLogin(true);
        navigate("/");
      }
      ).catch((err) => {
        setLoadingSpinner(false);
          const error = err.response ? err.response.data.message : err.message;
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      })
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
          <ToastContainer />
      <div className="bg-gray-200 p-8 shadow-md rounded-md w-96"> 
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div> 

        <div >
          <div className='flex justify-between items-center' ><span>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={() => {
              loginUser();
            }}
          >
           {loadingSpinner ? (
              <CircularProgress size={"23px"} style={{ color: "white" }} />
            ) : (
              "Login"
            )}
          </button>
          </span>
          <a
            className="text-blue-500 font-semibold hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-300 hover:cursor-pointer"
            onClick={handleforgetPassword}
          >
            Forgot Password?
          </a>
          </div>
          <div className='signUpButton'>
            <Link to="/signup">
              sign up
            </Link>
          </div>
         {/* {
            otpCol && !otpInp && ( <div className="flex justify-center items-center">
            <button
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={handleOtpInp}
          >
            Get OTP
          </button>
          </div>)
         }
         {
            otpInp && ( <div className="flex justify-center items-center">
            <button
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={handleOtpInp}
          >
           Verify
          </button>
          </div>)
         } */}

        </div>
      </div>
    </div>
    )
  }
  
  export default Login
