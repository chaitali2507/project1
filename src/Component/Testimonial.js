import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from 'react-bootstrap/esm/Col'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const Testimonial =() =>{
    return(
      <div className="info spacer mt-5">
        <Container>
            <div className="section_wrapper ">
                <Row className="flex testi_part">
                   <Col className="info_part col-6">
                      <div className="testi_slider">
                        <div className="testi_header">
                        <h3>20k+ Customers love Our Fruits &amp; Vegetable Farm</h3>
                        </div>
                        <Slider {...settings}>
          <div>
           <div className="testi_inner">
            <div className="testi_head flex">
              <div className="testi_thumb">
              <img src={require('../image/asset 36.jpeg')} ></img>
              </div>
              <div className="testi_client">
              <a><h5>Jeson Smith</h5></a>
              <p>Founder &amp; Ceo</p>       
                <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
             
              </div>
            </div>
            <div className="testi_body fs-5">
            <p>Continually Onceptualizef Technically invs Professionally monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize Technically initiatives.</p>
            </div>
           </div>
          </div>
          <div>
          <div className="testi_inner">
            <div className="testi_head flex">
              <div className="testi_thumb">
              <img src={require('../image/asset 37.jpeg')} ></img>
              </div>
              <div className="testi_client">
              <a><h5>Rajib Raj</h5></a>
              <p>Founder &amp; Ceo</p>       
                <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
              </div>
            </div>
            <div className="testi_body fs-5">
            <p>Continually Onceptualizef Technically invs Professionally monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize Technically initiatives.</p>
            </div>
           </div>
          </div>
          <div>
          <div className="testi_inner">
            <div className="testi_head flex">
              <div className="testi_thumb">
              <img src={require('../image/asset 35.jpeg')} ></img>
              </div>
              <div className="testi_client">
              <a><h5>Zinat Zaara</h5></a>
              <p>Founder &amp; Ceo</p>       
                <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
                  <i class="fa-solid fa-star " ></i>
             
              </div>
            </div>
            <div className="testi_body fs-5">
            <p>Continually Onceptualizef Technically invs Professionally monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize Technically initiatives.</p>
            </div>
           </div>
          </div>
        </Slider>
                      </div>
                  </Col>
                  <Col className="info_part col-6">
                  <img src={require('../image/asset 16.png')} ></img>
                  </Col>
                </Row>
            </div>
        </Container>
      </div>
    )
}
export default Testimonial