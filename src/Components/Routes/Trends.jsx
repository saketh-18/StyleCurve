import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends React.Component {
    render() {
        return (
          <div className='h-screen w-full'>
            <Carousel className='w-full h-full'>
                <div>
                    <img src="banner2.jpg" alt="Slide 1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="banner2.jpg" alt="Slide 2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="banner2.jpg" alt="Slide 3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default DemoCarousel;
