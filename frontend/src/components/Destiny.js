import React, { useState } from 'react'
import backgroundImage from '../asset/img.jpg';

const Destiny = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-between text-white cursor-pointer"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-2">Title Line 1</h2>
          <h2 className="text-2xl font-semibold mb-4">Title Line 2</h2>
          <div className="flex items-center mb-2">
            <span className="mr-2">Rating:</span>
            <span>4.5</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2">Review:</span>
            <span>Excellent</span>
          </div>
        </div>
  
     <div className={`hover:${isHovered}`}>
       { isHovered && (   <div className="p-6 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg absolute right-6 bottom-6">
            {/* Small image */}
            <img src="/path/to/small-image.jpg" alt="Small" className="w-16 h-16 mb-2 rounded" />
            {/* Additional text */}
            <p className="text-sm mb-2">Additional text and information</p>
            {/* Rating */}
            <div className="flex items-center">
              <span className="mr-2">Rating:</span>
              <span>4.8</span>
            </div>
          </div>)
       }
     </div>
  
      </div>
    );
  };
  export default Destiny ;