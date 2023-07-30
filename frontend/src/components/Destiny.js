import React, { useEffect, useState } from 'react'
import backgroundImage from '../asset/img.jpg';
import img3 from "../asset/3.jpg"
import img4 from "../asset/4.jpg"
import Card3 from './Card3';
import axios from 'axios';


const Destiny = ({keyword,page}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [data,setData] = useState([]);

    useEffect(()=>{
      axios.get(`/api/v1/city?keyword=${keyword}&page=${page}`).then((res)=>{
        setData(res.data.cities);
      }).catch((err)=>{
        console.log(err);
      })
    },[])
    
    return (
      <div className='grid p-4 text-sm mt-5 grid-cols-3 mx-auto md:grid-cols-4'>
          {data.map((city) => {
            return(<Card3 id={city._id} img={city?.images} title={city.name} description={city.description} rating={city.rating}  />)
            
          })}
      </div>
       );
  };
  export default Destiny ;