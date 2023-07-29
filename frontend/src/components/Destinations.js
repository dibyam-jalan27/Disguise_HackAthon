import React from 'react'
//import "./FeaturedProducts.css"
//import picF from "../images/picF.jpg";
import Card from './Card';
//import { Fade } from "react-awesome-reveal";
//import { Zoom } from 'react-awesome-reveal';

const FeaturedProducts = ({type}) => {

    // const data =[
    //     {
    //         id : 1 ,
    //         img: picF,
    //         title : "Long sleeve T-Shirt",
    //         isNew : true ,
    //         oldPrice : 20 ,
    //         price : 17 
    //     },
    //     {
    //         id : 2 ,
    //         img: picF,
    //         title : "Long sleeve T-Shirt",
    //         isNew : true ,
    //         oldPrice : 20 ,
    //         price : 17 
    //     },
    //     {
    //         id : 3 ,
    //         img: picF,
    //         title : "Long sleeve T-Shirt",
    //         isNew : false ,
    //         oldPrice : 20 ,
    //         price : 17 
    //     },
    //     {
    //         id :  4 ,
    //         img: picF,
    //         title : "Long sleeve T-Shirt",
    //         isNew : false ,
    //         oldPrice : 20 ,
    //         price : 17 
    //     }
    // ]
  return (
    <div className='featuredProducts'>
     
         
       {/* <div className='top'>
            <h2> {type} Products</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure </p>
        </div>
      
        <div className='bottom'>
            {data.map((item) => ( 
                <Card item={item} key={item.id}  />
            ))}
            
        </div> */}
       
     
    </div>
  )
}

export default FeaturedProducts