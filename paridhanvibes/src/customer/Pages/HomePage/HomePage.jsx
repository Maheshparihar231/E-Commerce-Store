import React from 'react'
import Carousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousal/HomeSectionCarousel';

const HomePage =()=>{
    return (
        <div>
            <Carousel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
            </div>
        </div>
    )
}

export default HomePage;