import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (newValue) => {
    onChange(newValue);
  };

  const handleMouseEnter = (newValue) => {
    setHoverValue(newValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center">
      {stars.map((starValue) => {
        const filled = starValue <= (hoverValue || value);
        const halfFilled = !filled && starValue - 0.5 === hoverValue;
        return (
          <span
            key={starValue}
            className="cursor-pointer"
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          >
            {filled ? (
              <FaStar className="text-yellow-500" />
            ) : halfFilled ? (
              <FaStarHalfAlt className="text-yellow-500" />
            ) : (
              <FaRegStar className="text-yellow-500" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;