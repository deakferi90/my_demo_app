import React from 'react';
import './style.scss';
import renderSlides from './names';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const LandingPage = () => {

  return (
    <div className="App">
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={false}
        backgroundColor={'blue'}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}

export default LandingPage;
