
import React from 'react'
import "./Destination.css";
import img1 from "../asset/1.jpg"
import img2 from "../asset/2.jpg"
import img3 from "../asset/3.jpg"
import img4 from "../asset/4.jpg"
import Card from './Card';

const Destinations = ({type}) => {

    const data =[
        {
            id : 1 ,
            img: img1,
            title : "Long sleeve T-Shirt",
            isNew : true ,
            oldPrice : 200 ,
            price : 170
        },
        {
            id : 2 ,
            img: img2,
            title : "Long sleeve T-Shirt",
            isNew : true ,
            oldPrice : 250 ,
            price : 180 
        },
        {
            id : 3 ,
            img: img3,
            title : "Long sleeve T-Shirt",
            isNew : false ,
            oldPrice : 300 ,
            price : 183
        },
        {
            id :  4 ,
            img: img4,
            title : "Long sleeve T-Shirt",
            isNew : false ,
            oldPrice : 410 ,
            price : 350
        }
    ]
    return (
    <div className='destination'>
       <div className='top'>
            <h2> Unlock Your Journey: Explore, Plan, Experience! </h2>
            <p>Santorini, Greece - A captivating island gem in the Aegean Sea, Santorini boasts iconic white-washed buildings perched atop majestic cliffs overlooking crystal-clear waters. The breathtaking sunsets, vibrant bougainvillea-laden alleys, and delectable Mediterranean cuisine make it a dream destination. Indulge in luxurious resorts, explore ancient ruins, and savor the charm of this enchanting paradise</p>
        </div>
      
        <div className='bottom'>
            {data.map((item) => ( 
                <Card item={item} key={item.id}  />
            ))}
            
        </div> 
       
     
    </div>
  )
}

export default Destinations