import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function MyCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="caroDes container"
      fade
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <ExampleCarouselImage  image={props.image1} text="First slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage image={props.image2} text="Second slide" />
       
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage image={props.image3} text="Third slide" />
      
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage image={props.image4} text="Third slide" />
      
      </Carousel.Item>
   

    </Carousel>
  );
}

export default MyCarousel;
