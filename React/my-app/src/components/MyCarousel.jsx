// import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../assets/4.jpg";
const MyCarousel = () => {
  return (
    <>
      <Carousel infiniteLoop="true">
        <div className="h-96">
          <img src="assets/1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div className="h-96">
          <img src="assets/2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div className="h-96">
          <img src="assets/3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div className="h-96">
          <img src={image} />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    </>
  );
};

export default MyCarousel;
