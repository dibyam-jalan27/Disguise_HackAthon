import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../asset/1.jpg"
import img2 from "../asset/2.jpg"
import img3 from "../asset/10.jpg"
import img4 from "../asset/4.jpg"
import img5 from "../asset/6.jpg"
import Card from './Card';


const data = [
    { id : 1 ,
    url:"../asset/1.jpg" },
    { id : 2,
    url:"../asset/2.jpg" },
    { id : 3 ,
    url:"../asset/3.jpg" }

]

const Destinations = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] mb:mb-0 p-4">
        <div className="text-2xl font-bold mb-5 ">
            You Might Also Like
        </div>
        <div className="p-4">
        <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true} 
        containerClass="-mx-[10px]"
        itemClass="px-[12px]"
        keyBoardControl={true} >
          
          {
            data.map((item) => {
                return(
                    <Card key={item?.id} data={item.url} />
                )
            })
          }
    </Carousel>
        </div>
        
    </div>
  )
}

export default Destinations