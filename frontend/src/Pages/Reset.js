import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reset = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(token)
    // Implement your logic for sending the password reset link here
    axios.post(`/api/v1/resetpassword/${token}`, { password, confirmPassword }).then((res) => {
      toast.success("Successfully Changed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    }
    ).catch((err) => {
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
    }
    )
    
  }
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
