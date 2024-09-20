// import React from 'react'
import Slider from "react-slick";
const SlickCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src="assets/1.jpg" alt="" />
        </div>
        <div>
          <img src="assets/2.jpg" alt="" />
        </div>
        <div>
          <img src="assets/3.jpg" alt="" />
        </div>
        <div>
          <img src="assets/4.jpg" alt="" />
        </div>
        <div>
          <img src="assets/1.jpg" alt="" />
        </div>
        <div>
          <img src="assets/2.jpg" alt="" />
        </div>
        <div>
          <img src="assets/3.jpg" alt="" />
        </div>
        <div>
          <img src="assets/4.jpg" alt="" />
        </div>
      </Slider>
    </>
  );
};

export default SlickCarousel;
