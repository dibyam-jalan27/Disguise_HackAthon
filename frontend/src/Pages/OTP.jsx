import React, { useState } from 'react';

const OTP = () => {
  const [otp, setOtp] = useState('');
  const [otpCol , setOtpCol ] = useState(false);
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const handleOtpCol =  async () => {
    setOtpCol(true);
  };
  const [ email , setEmail] = useState(null);
  const handleEmailChange = async (e) => {
        setEmail(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for verifying the OTP here
    console.log('OTP entered:', otp);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
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
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleOtpCol}
            >
              Get OTP
            </button>
          </div> )
          }
          
        </form>
      </div>
    </div>
  );
};

export default OTP;
