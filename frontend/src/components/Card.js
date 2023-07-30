import React from 'react'
import "./Card.css"
//import "./Card.css"
import img1 from "../asset/1.jpg"
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/products/${item.id}`}>
          {<Fade>
          <div className='card'>
          <div className='image'>
                {item.isNew && <span>Top Rated</span>}
                <img src={item.img} alt="card" className='mainimg'/>
                <img src={item.img} alt= "card" className='secondaryimg'/>
          </div>
          <h2>{item.title}</h2>
          <div className='prices'>
            <span className='price'> ${item.price}</span>
            <span className='oldPrice'> ${item.oldPrice}</span>  
          </div>
          </div>
          </Fade>}
    </Link>
  
  )
}

export default Card