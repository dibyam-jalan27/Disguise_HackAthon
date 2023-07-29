import React from 'react'
import Navbar from '../components/Navbar'
// //import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import Destinations from '../components/Destinations';
import Destiny from '../components/Destiny';


const Home = () => {
  return (
    <>
    <Slider />
    <Destiny />
    <Destinations />
    </>
  )
}

export default Home