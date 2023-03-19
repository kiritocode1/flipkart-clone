import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import banner_1 from './assets/banner-1.jpg'
import banner_2 from './assets/banner-2.jpg'
import banner_3 from './assets/banner-3.jpg'
import banner_4 from './assets/banner-4.jpg'
import banner_5 from './assets/banner-5.jpg'
import banner_6 from './assets/banner-6.jpg'




const CategoryBar = () => {
    return (
        <Carousel infiniteLoop={true}  showArrows={false} useKeyboardArrows swipeable emulateTouch labels dynamicHeight={true} >
            <div>
                <img src={ banner_1 } alt="one" />
            </div>

            <div>
                <img src={ banner_2 } alt="two" />
            </div>

            <div>
                <img src={ banner_3 } alt="three" />
            </div>

            <div>
                <img src={ banner_4 } alt="four" />
            </div>

            <div>
                <img src={ banner_5 } alt="five" />
            </div>

            <div>
                <img src={ banner_6 } alt="six" />
            </div>
        </Carousel>

    )
};
export default CategoryBar; 
