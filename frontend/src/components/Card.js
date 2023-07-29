import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from "../asset/1.jpg";

const Card = ({data}) => {
  
  // console.log("hello")
  return (
    <Link 
    to={"/"}
    className="transform overflow-hidden w-10 h-11 bg-white duration-200 hover:scale-105 cursor-pointer"
>
 <img src={img1} alt="place" width={10}/>
<div className="p-4 text-black/[0.9]">
    <h2 className="text-lg font-semibold leading-tight">Jaipur</h2>
    <div className="flex items-center text-black/[0.8]">
     
        <p className="mr-2 text-lg font-semibold hover:text-black/[0.9]">
            &#8377; 20,000
        </p>
            <>  <p className="text-base  font-medium line-through leading-tight">
                    &#8377;100000
                </p>
               
               <p className="ml-auto text-sm font-medium text-green-500 leading-tight hover:text-green-600">
                  Rating
                </p>
            </>
    
    </div>
</div>
</Link>
  )
}

export default Card