import React from 'react'
//import "./Card.css"
<<<<<<< HEAD
import img1 from "../asset/1.jpg"
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/products/${item.id}`}>
          <Fade>
=======
import { Link } from 'react-router-dom'
//import picF from "../images/picF.jpg"
//import slider5 from "../images/slider5.jpg"
//import { Fade } from 'react-awesome-reveal'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/products/${item.id}`}>
          {/* <Fade>
>>>>>>> 911c357cb9663a6b3a3e794c265935d31f610674
          <div className='card'>
          <div className='image'>
                {item.isNew && <span>Top Rated</span>}
                <img src={item.img} alt="card" className='mainimg'/>
                <img src={img1} alt= "card" className='secondaryimg'/>
          </div>
          <h2>{item.title}</h2>
          <div className='prices'>
            <span className='price'> ${item.price}</span>
            <span className='oldPrice'> ${item.oldPrice}</span>  
          </div>
          </div>
          </Fade>
    </Link>
  
  )
}

export default Card