import React from 'react'
//import "./Card.css"
import { Link } from 'react-router-dom'
//import picF from "../images/picF.jpg"
//import slider5 from "../images/slider5.jpg"
//import { Fade } from 'react-awesome-reveal'
const Card = ({item}) => {
  return (
    <Link className='link' to={`/products/${item.id}`}>
          {/* <Fade>
          <div className='card'>
          <div className='image'>
                {item.isNew && <span>NEW ARRIVAL</span>}
                <img src={picF} alt="card" className='mainimg'/>
                <img src={slider5} alt= "card" className='secondaryimg'/>
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