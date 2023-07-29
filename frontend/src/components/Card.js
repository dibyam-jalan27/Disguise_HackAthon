import React from 'react'
//import "./Card.css"
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import img1 from "../asset/1.jpg"
import { Fade } from 'react-awesome-reveal'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/place/${item.id}`}>
          <Fade>
=======
//import picF from "../images/picF.jpg"
//import slider5 from "../images/slider5.jpg"
//import { Fade } from 'react-awesome-reveal'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/products/${item.id}`}>
          {/* <Fade>
>>>>>>> 493aa3957636e0e87e858f58b8ec526448533265
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
          </Fade> */}
    </Link>
  
  )
}

export default Card