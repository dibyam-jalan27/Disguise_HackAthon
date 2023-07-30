import React, { useEffect, useState } from 'react';
import Card4 from '../components/Card4';
import axios from 'axios';

const ItineraryPage = ({}) => {

  const [ keyword, setKeyword ] = useState("");
  const [data,setData] = useState([]);
  const [arr , setArr] = useState([]);
  // console.log(data);
  useEffect(()=>{
    axios.get(`/api/v1/city?keyword=${keyword}`).then((res)=>{
      setData(res.data.cities);
      console.log(res.data.cities);

      
      
    }).catch((err)=>{
      console.log(err);
    })
  },[]);

  
  useEffect(() => {
    for (let index = 0 ; index < data.length ; index++) {

      const element = data[index];
      const obj = { name : element.name , isSelected : false};
      setArr(arr => [...arr , obj]);
      console.log("heo");
    }
    // console.log("arr " , arr);
  } , [data])
  
  const handleSelect = async () => {

  }
  return (
    <div className='bg-slate-400 '>
      <div className='p-10'>
      <input
              className=" rounded-full mt-10 p-4 text-black w-[300px] md:w-[400px] font-serif focus:outline-none my-1 "
              type="text"
              placeholder="Search Destination..."
              onChange={(e) => setKeyword(e.target.value)}
            />
      </div>
      <div className='grid p-4 text-sm mt-5 grid-cols-3 mx-auto md:grid-cols-4'>
          {data.map((city , index) => {
      
            return(
               <Card4 id={city._id} img={city?.images} title={city.name} description={city.description} rating={city.rating} arr={arr} setArr={setArr} index={index} />
               )
              }
            
          )}
      </div>
    </div>

  );
};

export default ItineraryPage;
