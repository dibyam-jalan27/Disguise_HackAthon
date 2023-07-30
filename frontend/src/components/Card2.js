import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import img1 from "../asset/1.jpg"
import { Fade } from 'react-awesome-reveal'
const Card2 = ({item , key}) => {
  return (
    <Link className='link' to={`/place/${item._id}`}>
          <Fade>
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

export default Card2