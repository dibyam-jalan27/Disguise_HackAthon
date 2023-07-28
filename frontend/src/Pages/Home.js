import React from 'react'
import Navbar from '../components/Navbar'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative  text-[20px] w-full max-w-[1360px] mx-auto px-0 md:px-0 ">
    <Carousel 
                autoPlay={true} 
                infiniteLoop={true} 
                showStatus={false} 
                showThumbs={false}
                showIndicators={false}
                useKeyboardArrows={true}>
          <div>
                 <img src="/imgs/img1.jpg" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <Link  href="/" className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-zinc-200 ">
                        Travel Now</Link>
                    
                </div>
                <div>
                <img src="/imgs/img1.jpg" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <Link  href="/" className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-zinc-200 ">
                        Travel Now</Link>
                    
                </div>
                <div>
                <img src="/imgs/img1.jpg" className="aspect-[16/10] md:aspect-auto object-cover" />
                    <Link  href="/" className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-zinc-200 ">
                        Travel Now</Link>
                    
                </div>
                
            </Carousel>
    </div>
  
  )
}

export default Home