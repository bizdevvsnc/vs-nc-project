import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

function Carousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: false,
    autoplaySpeed: 7000,
    fade: true,
    pauseOnHover: true,
    className: "center",
    centerMode: true
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='card'>
            <img className='carouselImg' src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;