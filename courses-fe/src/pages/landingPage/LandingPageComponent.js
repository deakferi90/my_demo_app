import React from 'react';
import './style.scss';
import renderSlides from './helper';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const LandingPage = () => {

  return (
    <div className="App">
      <div className='first-box'>
        <div className='title-description'>
          <h1>Dezvoltati potentialul de programator</h1>
          <h3>De pe acest site poti invata foarte multe lucruri noi si interesante pe care le poti folosi in viitorul apropiat, si sunt chestii chiar practice.</h3>
        </div>
        <div className='button-contaner'>
          <button><a href='/register'>Register</a></button>
          <button><a href='/login'>Login</a></button>
        </div>
        <div className='title-description'>
          <img alt='' src='http://mintwebtuts.surge.sh/static/media/herobg.92d52237.jpg'/>
        </div>
      </div>
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
