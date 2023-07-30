import React, { useState } from 'react';
import StarRating from './StarRating';

const Rating= () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  return (
    <div className="absolute top-52 left-16 text-[60px] text-[20px]">
      <h2 >Rate this item:</h2>
      <StarRating value={rating} onChange={handleRatingChange} />
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default Rating;