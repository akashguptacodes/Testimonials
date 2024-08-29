import React,{useState} from 'react';
import Card from './Card';
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


const Testimonials = (props) => {
    let reviews = props.reviews;
    const[index,setIndex] = useState(0);
    

    function leftShiftHandler(index) {
        if(index -1 < 0) {
            index = 4;
            setIndex(index);

        }
        else{
            index--;
            setIndex(index);
            
        }
        console.log(index);
    }
    function rightShiftHandler(index) {
        if(index + 1 > 4) {
            index = 0;
            setIndex(index);
            

        }
        else{
            index++;
            setIndex(index);
            
        }
        console.log(index);

    }
    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
  return (
    <div className='testimonial'>
        <Card review = {reviews[index]}/>
        <div>
            <div className='slidebtnDiv'>
                <button className='slideBtn' onClick={() => leftShiftHandler(index)}>
                    <FiChevronLeft/>
                </button>
                <button className='slideBtn' onClick={() => rightShiftHandler(index)}>
                <FiChevronRight/>
                </button>
            </div>
            <div className='surpriseDiv'>
                <button  onClick={surpriseHandler} className='surprisebtn'>
                    Surprise Me
                </button>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;