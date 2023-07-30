import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card3 = ({ id , img, title, description,rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
        to={`/location/${id}`}
      className="relative mx-2 border rounded-lg mb-5 overflow-hidden"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt={title} className="w-full h-full object-cover" />

      {isHovered && (
        <div className="absolute inset-0 bg-black p-4 bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
            <p className='flex justify-center items-center'>{rating} <FaStar/></p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Card3;