import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OTP = () => {
  const navi = useNavigate();
  const [otp, setOtp] = useState('');
  const [ email , setEmail] = useState("");
  const [otpCol , setOtpCol ] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const handleOtpCol =  async () => {
    const data = {
      email : email
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/v1/sendotp', data, config).then((res) => {
      setLoadingSpinner(false);
        toast.success("OTP send successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      setOtpCol(true);
    }).catch((err) => {
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

  };
  const handleEmailChange = async (e) => {
        setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(otpCol){
    const data = {
      email : email,
      otp : otp
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    axios.post('/api/v1/verifyotp', data, config).then((res) => {
      toast.success("OTP verified successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navi(`/password/reset/${res.data.token}`);
    }).catch((err) => {
      const error = err.response ? err.response.data.message : err.message;
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
  }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <ToastContainer />
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-bold mb-6">Forget Password?</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          { otpCol && (<div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="otp">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>) }
          {
            otpCol ? (<div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Verify OTP
            </button>
          </div>) : (<div className="flex justify-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleOtpCol}
            >{loadingSpinner ? (
              <CircularProgress size={"23px"} style={{ color: "white" }} />
            ) : (
              "Send OTP"
            )}
            </button>
          </div> )
          }
          
        </form>
      </div>
    </div>
  );
};

export default OTP;
