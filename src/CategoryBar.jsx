import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const CategoryBar = () => {
    return (
            <Carousel autoPlay showArrows={true} showStatus infiniteLoop swipeable  >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            </Carousel>

    )
}; 

export default CategoryBar; 
