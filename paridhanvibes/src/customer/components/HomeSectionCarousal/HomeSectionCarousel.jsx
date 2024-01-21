import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function HomeSectionCarousel() {

    const [activeIndex,setActiceIndex]=useState(0);
    const responsiveItems = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev=()=>{setActiceIndex(activeIndex-1)}
    const slideNext=()=>{setActiceIndex(activeIndex+1)}

    const syncActiveIndex=({item})=>setActiceIndex(item);

    const items = [1,1,1,1, 1, 1, 1, 1].map((item) =>
        <HomeSectionCard />
    )

    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative p-5'>
                <Button 
                    onClick={slideNext}
                    hide
                    className='z-50 bg-white' variant='contained'
                    sx={{
                        position: 'absolute', bgcolor: "white", top: '8rem', left: '0rem',
                        transform: 'translateX(-50%) rotate(90deg)'
                    }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                </Button>
                <AliceCarousel
                    infinite
                    disableButtonsControls
                    items={items}
                    disableDotsControls
                    responsive={responsiveItems}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                <Button onClick={slidePrev} className='z-50 bg-white' variant='contained'
                    sx={{
                        position: 'absolute', bgcolor: "white", top: '8rem', right: '0rem',
                        transform: 'translateX(50%) rotate(90deg)'
                    }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>


            </div>

        </div>
    )
}

export default HomeSectionCarousel