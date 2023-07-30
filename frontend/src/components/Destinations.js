<<<<<<< HEAD
// import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import img1 from "../asset/1.jpg"
// import img2 from "../asset/2.jpg"
// import img3 from "../asset/10.jpg"
// import img4 from "../asset/4.jpg"
// import img5 from "../asset/6.jpg"
// import Card from './Card';
=======
import React from 'react'
//import "./FeaturedProducts.css"
//import picF from "../images/picF.jpg";
import Card from './Card';
//import { Fade } from "react-awesome-reveal";
//import { Zoom } from 'react-awesome-reveal';
>>>>>>> 493aa3957636e0e87e858f58b8ec526448533265

const FeaturedProducts = ({type}) => {

<<<<<<< HEAD
// const data = [
//     { id : 1 ,
//     url:"../asset/1.jpg" },
//     { id : 2,
//     url:"../asset/2.jpg" },
//     { id : 3 ,
//     url:"../asset/3.jpg" }

// ]

// const Destinations = () => {
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1023, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
//   return (
//     <div className="mt-[50px] md:mt-[100px] mb-[100px] mb:mb-0 p-4">
//         <div className="text-2xl font-bold mb-5 ">
//             You Might Also Like
//         </div>
//         <div className="p-4">
//         <Carousel
//         responsive={responsive}
//         infinite={true}
//         autoPlay={true} 
//         containerClass="-mx-[10px]"
//         itemClass="px-[12px]"
//         keyBoardControl={true} >
          
//           {
//             data.map((item) => {
//                 return(
//                     <Card key={item?.id} data={item.url} />
//                 )
//             })
//           }
//     </Carousel>
//         </div>
        
//     </div>
//   )
// }

// export default Destinations
=======
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
>>>>>>> 493aa3957636e0e87e858f58b8ec526448533265
