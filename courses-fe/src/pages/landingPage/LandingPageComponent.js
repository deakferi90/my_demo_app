import React from 'react';
import Slider from "react-slick";
import renderSlides from './helper';
import LandingHeader from '../../shared/LandingHeader';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';

export const LandingPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div className="App">
      <div><LandingHeader /></div>
      <div className='hero-container'>
        <div className='hero-side'>
          <div className='hero-text'>
            <div className='title-description-text'>
              <h1>Dezvolta-ti potentialul de programator</h1>
              <h2>De pe acest site poti invata foarte multe lucruri noi si interesante pe care le poti folosi in viitorul apropiat, si sunt chestii chiar practice.</h2>
              <div className='button-container'>
                <a className='register-btn' href='/register'>Register</a>
                <a className='login-btn' href='/login'>Login</a>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-side hero-image'><div className='image-cover'></div></div>
      </div>
      <Slider {...settings}>
          {renderSlides()}
        </Slider>
      {/* <Slider
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={false}
        backgroundColor={'blue'}
      >
        {renderSlides()}
      </Slider> */}
    </div>
  );
}

export default LandingPage;
