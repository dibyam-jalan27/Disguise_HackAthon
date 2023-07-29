import React from 'react';
import beachVid from '../asset/beachVid.mp4';
import {BiSearchAlt2} from "react-icons/bi" ;

const Slider = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' autoPlay muted loop>
        <source type="video/mp4" src={beachVid} />
      </video>
      <div className='absolute w-full h-full top-0 left-0 bg-gray-500/40'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-2 font-bold text-3xl '>
        <h1>Travel Your Dream Place</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, provident?</h3>
        <form  className='flex justify-between items-center max-w-[700px] mx-auto w-full border px-6 py-1 rounded-full text-black bg-gray-100/50 font-normal'> 
          <div>
            <input className='bg-transparent text-black w-[300px] md:w-[400px] font-serif focus:outline-none my-1 ' type='text' placeholder='Search Destination...' />
          </div>
          <span>
            <button><BiSearchAlt2 size={20} /></button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Slider;
