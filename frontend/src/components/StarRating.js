import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ value }) => {
  const [hoverValue, setHoverValue] = useState(0);



  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const renderStars = () => {
    return stars.map((starValue) => {
      const filled = starValue <= (hoverValue || value);
      const halfFilled = !filled && starValue - 0.5 <= (hoverValue || value);
      return (
        <span
          key={starValue}
          className="cursor-pointer"

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
    });
  };

  return <div className="flex items-center">{renderStars()}</div>;
};

export default StarRating;
