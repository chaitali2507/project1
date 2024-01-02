import Container from "react-bootstrap/esm/Container"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

const Sponsor =() =>{
    return(

        <div className="info">
            <Container>
            <Slider {...settings} >
         <div>
          <img src={require('../image/asset 38.png')} ></img> 
          </div>
            <div>
          <img src={require('../image/asset 39.png')} ></img> 
          </div>
          <div>                 
          <img src={require('../image/asset 40.png')} ></img> 
          </div>
          <div>      
          <img src={require('../image/asset 41.png')} ></img>
          </div>
          <div>
          <img src={require('../image/asset 42.png')} ></img> 
          </div>                   
        </Slider>
            </Container>
        </div>
    )
}
export default Sponsor