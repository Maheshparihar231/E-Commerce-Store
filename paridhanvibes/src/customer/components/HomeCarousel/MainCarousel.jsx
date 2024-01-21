import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';



const Carousel = () => {
const items = HomeCarouselData.map((item)=>
        <img src={item.image} 
            alt="" 
            className='cursor-pointer' 
            role='presentation'
        />
    )
    return(
        <div>
           <AliceCarousel
            autoHeight  
            infinite
            mouseTracking
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            items={items}
        /> 
        </div>        
    )
}

export default Carousel;