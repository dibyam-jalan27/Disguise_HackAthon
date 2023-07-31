import React, { useEffect, useState } from 'react'
import Card3 from '../components/Card3';
import axios from 'axios';


const WishlistPage = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [data,setData] = useState([]);

    useEffect(()=>{
      axios.get(`/api/v1/city`).then((res)=>{
        setData(res.data.cities);
        console.log(res.data.cities);
      }).catch((err)=>{
        console.log(err);
      })

    },[])
    
    return (
      <div className='grid pt-10 text-sm mt-5 grid-cols-3 mx-auto md:grid-cols-4'>
          {data.map((city) => {
            return(<Card3 id={city._id} img={city?.images} title={city.name} description={city.description} rating={city.rating}  />)
            
          })}
      </div>
       );
  };
  export default WishlistPage ;