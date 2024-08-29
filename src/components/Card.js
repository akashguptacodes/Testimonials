import React from 'react';
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa";


const Card = (props) => {
    let review = props.review;
  return (
    <div className='Card'>
        <div className='imgDiv'>
            <img className='image'src = {review.image}></img>
            <div className='imgBack'></div>
        </div>

        <div className='nameDiv'>
            <p className='name'>{review.name}</p>
        </div>

        <div className='jobDiv'>
            <p className='job'>{review.job}</p>
        </div>

        <div className='icon'>
            <FaQuoteLeft/>
        </div> 

        <div className='review'>
            {review.text}
        </div>

        <div className='icon'>
            <FaQuoteRight/>
        </div> 

    </div>
  )
}

export default Card