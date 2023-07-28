
import React from 'react'

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
    <img src='loader.svg' className='w-5 h-5' alt="loader" />
    </div>
  )
}

export default Loader