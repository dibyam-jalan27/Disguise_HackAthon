import React, { useEffect, useState }  from "react";
import Rating from "../components/rating";
import {useParams} from 'react-router-dom';
import axios from "axios";
import HomeSection from "../components/HomeSection";
// import Interativemap from "../components/Map"

const Location = () => {
  const {id} = useParams();
  // const id = "64c51b553936d5188510f8e0";
  const [city, setCity] = useState();

  
  
  useEffect(() => {
    axios
    .get(`/api/v1/city/${id}`)
    .then((res) => {
      setCity(res.data.city);
      console.log(city)
    })
    .catch((err) => {
      console.log(err);
    });
    
  }, []);
  
  console.log(city);
  return (
    <div>
      {city && city.name && (
        <div>
          <img
            src={city.images}
            alt="first img"
            className="w-full h-screen opacity-80 overflow-hidden"
          />
          <div className="absolute top-16 right-16 w-96 h-96 rounded-[20px] bg-gray-300 opacity-60 ">
            <p className="flex justify-center items-center p-3 text-black text-[2rem]">
              Weather
            </p>
            <div className="flex justify-between p-[20px] text-[30px]">
              <div>20°c</div>
              <div>Cloudy</div>
            </div>
            <div className="flex justify-between p-[20px] text-[30px] bottom-5">
              <div>
                <div>Humidity</div>
                <div>icon</div>
              </div>
              <div>
                <div>Pressure</div>
                <div>icon</div>
            </div>
      </div>
    </div>
      <div>
      <p className="absolute top-28 left-16 text-[60px] font-medium">{city.name}</p>
        <Rating myRating={city.rating}/>
      </div>
      <div className="absolute top-[500px] left-16 text-[30px] text-4xl text-center text-yellow-800 font-bold text-shadow-lg">
        {city.description}
      </div>
          <div>
            <HomeSection myarr={city.destination}/>
          </div>
    </div>
  )};
  </div>
  )
}
export default Location;
