import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Counting from "./Counting"
import Button from 'react-bootstrap/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Sponsor from './sponsor';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3 ,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

const About =() =>{
    return(
        <>
    <div className="page_header info">
            {/* <div className="overlay"></div> */}
            <Container>
                <div className="page_header-content">
                <h4 class="ph_title">Agricul Farm About us</h4>
                <ul className="agri_ul flex justify-center ">
                    <li ><a href="#" className="text-white"> Home</a></li>
                    <li><a href="#" className="active ms-2">/About</a></li>
                </ul>
                </div>
            </Container>
    </div>
    {/* about section */}
    <div className="about_page info">
        <Container>
            <Row className="align-item-center">
                <Col className="col-6">
                    <div className="about_thumb">
                    <img src={require('../image/01.png')} ></img>
                    </div>
                </Col>
                <Col className="col-6">
                    <div className="section_wrapper">
                    <h3 className="fs-1 fw-bold">We are Best Organic Products for Your Health.</h3>
                    <h5 className="mt-4 fs-4 fw-1 lh-5">Powerful tool for your customer to help user find solution for build something great.</h5>
                    <p className="about_pra">Conveniently customize proactive web services for leveraged interfaces without globally continually aggregate frictionlent without globally wellies richard.</p>
                    <p className="about_pra">Authoritatively plagiarize synergistic total linkage before cost effective leadership skills. Proactively innovate distributed be practices through seamless deliverables. Uniquely maximize granular benefits before exceptional deliverables.</p>
                    </div>
                    <Button className="btn  mt-5"><span>About Us</span></Button>

                </Col>
            </Row>
        </Container>
    </div>
    <Counting></Counting>
    <div className="history_section info">
        <Container>
            <div className="section_header text-start">
            <h3>History</h3>
            <h3>25 Years Agricul Farm Traditions</h3>
            </div>
            <div className="section-wrapper">
                <div className="history_item">
                    <div className="history_inner">
                        <div className="history_thumb">
                        <img src={require('../image/01.jpg')} width={1300} ></img>
                        </div>
                        <div className="history_content d-flex ">
                            <div className="hc_left">
                            <h3>Since</h3>
                            <h2 className="text-warning fs-1">1995</h2>
                            </div>
                            <div className="hc_right ms-3 mt-2 fs-5">
                            <p>Continually productize compelling elated them setting up to website with all theme imperdienttmolestieo continually productiz compellin quality for packedq for packed with all elated themes setting up to website and creating pages compellin  quality for packed with all elated themes setting website.Continually productize compelling quality elated them website with all them imp creating pages compelling quality for packed with all elated themes setting up to website .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    <div className="testimonial_section info">
        <Container>
            <div className="section_header">
            <h3>What Client Say Our Agricul Farm</h3>
            </div>
            <div className="section_wrapper">
            <div>
      
        <Slider {...settings} >
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
              <i class="fa-solid fa-quote-left quto2"></i>
            <p>Continually Onceptualizef Technically invs Professionally monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize Technically initiatives.</p>
            <p className="quto"><i class="fa-solid fa-quote-right "></i></p>
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
            <i class="fa-solid fa-quote-left quto2"></i>
            <p>Continually Onceptualizef Technically invs Professionally monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize Technically initiatives.</p>
            <p className="quto"><i class="fa-solid fa-quote-right "></i></p>
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
            <i class="fa-solid fa-quote-left quto2"></i>
            <p>Continually Onceptualizef Technically invs Professionally monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize Technically initiatives.</p>
            <p className="quto"><i class="fa-solid fa-quote-right "></i></p>
            </div>
           </div>
          </div>
        
        </Slider>
      </div>
            </div>
        </Container>
    </div>
    <Sponsor></Sponsor>
    
    </>
    )
}
export default About