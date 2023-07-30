import React from 'react';
import StarRating from './StarRating';

const Rating = ({myRating}) => {

  return (
    <div className='absolute top-52 left-16 text-[20px] font-medium'>
      <h2>Rating:-</h2>
      <StarRating value={myRating} />
      
    </div>
  );
};

export default Rating;