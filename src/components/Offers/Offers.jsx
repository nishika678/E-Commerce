import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Deals</h1>
            <h1>Offers For You</h1>
            <p>Unbeatable Savings Await!</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers