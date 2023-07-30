import React from 'react'
import Navbar from '../components/Navbar'
// //import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import Destinations from '../components/Destinations';
import Destiny from '../components/Destiny';



const Home = () => {
  const [keyword,setKeyword] = React.useState("");
  const [page,setPage] = React.useState(1);
  return (
    <>
    <Slider setKeyword={setKeyword} setPage = {setPage}/>
    <Destiny keyword = {keyword} page = {page}/>
    <Destinations />
    </>
  )
}

export default Home