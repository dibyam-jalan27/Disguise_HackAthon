import React from 'react';
import {BsSearch} from "react-icons/bs"
const Navbar = () => {
  return (
    <nav className="bg-gray-400 p-4 flex items-center justify-between">
      
      <div className="flex items-center justify-center">
        <img
          src="/path/to/your/logo.png"
          alt="Logo"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="text-white font-semibold text-lg">Your Logo</span>
      </div>
        {/* Search Bar */}
      <div className="flex items-center ">
        <button className='mx-2'>
          <BsSearch />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200 w-96 "
        />
        
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-4 mr-16 gap-6 font-semibold ">
        <li>
          <a href="/" className="text-white hover:text-black/[0.6] ">Home</a>
        </li>
        <li>
          <a href="/about" className="text-white  hover:text-black/[0.6] ">About Us</a>
        </li>
      </ul>

      
    </nav>
  );
};

export default Navbar;
