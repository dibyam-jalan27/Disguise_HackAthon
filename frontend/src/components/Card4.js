import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card4 = ({ id , img, title, description,rating , isSelected , arr , setArr , index }) => {
  const [isHovered, setIsHovered] = useState(false);
//   const [ selectedImage , setSelectedImage] = useState("");

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
//   const handleClick = () => {
//     setSelectedImage()
//   }
    useEffect(()=>{
        console.log(arr)
    },[arr]);

  return (
    <Link
  
  className={`relative mx-2 border rounded-lg mb-5 overflow-hidden ${arr[index]?.isSelected && "bg-black"}`}
  onMouseEnter={handleHover}
  onMouseLeave={handleMouseLeave}
  onClick={() => {
    let temp = arr ;
    temp[index].isSelected = true ;
    setArr(temp);
  }}
>
  <img src={img} alt={title} className={`w-full h-full object-cover ${arr[index]?.isSelected && "opacity-20"} `}/>

  
    <div className="absolute inset-0 bg-black p-4 bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
        <p className='flex justify-center items-center'>{rating} <FaStar/></p>
      </div>
    </div>
  
</Link>
  );
};

export default Card4;