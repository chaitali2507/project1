import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import React, { Component } from "react";
import Slider from "react-slick";
import Form from 'react-bootstrap/Form';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const Shop =() =>{
    return(
        <>
        <div className="page_header info">
                {/* <div className="overlay"></div> */}
                <Container>
                    <div className="page_header-content">
                    <h4 class="ph_title">Agricul Farm About us</h4>
                    <ul className="agri_ul flex justify-center ">
                        <li ><a href="#" className="text-white"> Home</a></li>
                        <li><a href="#" className="active ms-2">/Product Single</a></li>
                    </ul>
                    </div>
                </Container>
        </div>
        <div className="shop_single feature">
            <Container>
                <Row className="flex counter">
                    <Col className="shop_col">
                    <div className="product_detail">
                    <Row className="align-item">
                    <Col className="col-6">
                        <div className="product_thumb">

                        <Slider {...settings}>
          <div data-hash="1" >
          <img src={require('../image/asset 34.png')} width={450}></img>
          </div>
          <div data-hash="2" >
          <img src={require('../image/asset 20.jpeg')} ></img>
          </div>
          <div data-hash="3">
          <img src={require('../image/asset 2.jpeg')} ></img>
          </div>
          <div data-hash="4">
          <img src={require('../image/asset 19.jpeg')} ></img>
          </div>
          <div data-hash="5">
          <img src={require('../image/asset 1.jpeg')} ></img>
          </div>
        
        </Slider>
        <center class="thumnail mt-5">
        <a href="#1" > <img src={require('../image/asset 34.png')} width={80}  alt=""/></a>
        <a href="#2" > <img src={require('../image/asset 20.jpeg')} width={80} alt=""/></a>
        <a href="#3" > <img src={require('../image/asset 2.jpeg')} width={80} alt=""/></a>
        <a href="#4" > <img src={require('../image/asset 19.jpeg')} width={80} alt=""/></a>
        <a href="#5" > <img src={require('../image/asset 1.jpeg')} width={80} alt=""/></a>
    </center>
                        </div>
                    </Col>
                    <Col className="bg">
                    <div className="post_content py-0 text-start">
                    <h4>Product Text here</h4>
                    <div className="text-start">
                    <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
                    </div>
                    <h4>$ 340.00 </h4>
                     <h5>  Product Description</h5>
                    <p className="fs-5"> Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging 	psd template communities. </p>
                    </div>
                    <form className="flex ">
                        <div className="select_product  me-2">
                        <select>
                            <option>Select Size</option>
                            <option>SM</option>
                            <option>MD</option>
                            <option>LG</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        </div>
                        <div className="select_product">
                        <select>
                            <option>Select Color</option>
                            <option>Pink</option>
                            <option>Ash</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Blue</option>
                        </select>
                        </div>
                        <div className="cart_plus flex ">
                          <ul className="flex">
                            <li className="des">-</li>
                            <li className="des">1</li>
                            <li className="des">+</li>
                          </ul>
                          <input type="text " className=" discount" placeholder="Enter Discount" ></input>
                        </div>
                        <button type="submit" className="submit">Add To Cart</button>

                    </form>
                    </Col>
                    </Row>
                    </div>
                    </Col>
                </Row>
                <div className="review">
            <ul className="agri_ul flex comment">
                <li className="rev_des "> Description</li>
                <li className="rev_des bg-warning text-white fs-6 "> Reviews 4</li>
            </ul>
            <div className="contact_show ">
                <div className="reviwe_show  ">
                    <ul className="agri-ul content2 flex">
                        <li>
                            <div className="shop_thumb ">
                            <img src={require('../image/asset 36.jpeg')} width={100}></img>
                            </div>
                            <div className="post-content ">
                                <div className="entry_meta flex">
                                    <div className="post_on flex">
                                    <a href="#">Britney Doe</a>
                                    <p className="ms-4">Posted on December 25, 2017 at 6:57 am</p>
                                    </div>
                                    <div className="rate ">
                    <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
                    </div>
                                </div>
                                <div className="entry_content ">
                            <p >Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                            </div>
                            </div>  
                        </li>
                        <li>
                            <div className="shop_thumb ">
                            <img src={require('../image/asset 37.jpeg')} width={100}></img>
                            </div>
                            <div className="post-content ">
                                <div className="entry_meta flex">
                                    <div className="post_on flex">
                                    <a href="#">Jonathan Doe</a>
                                    <p className="ms-4">Posted on December 25, 2017 at 6:57 am</p>
                                    </div>
                                    <div className="rate ">
                    <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
                    </div>
                                </div>
                                <div className="entry_content ">
                            <p >Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                            </div>
                            </div>  
                        </li>
                        <li>
                            <div className="shop_thumb ">
                            <img src={require('../image/asset 35.jpeg')} width={100}></img>
                            </div>
                            <div className="post-content ">
                                <div className="entry_meta flex">
                                    <div className="post_on flex">
                                    <a href="#">Mack Zucky</a>
                                    <p className="ms-4">Posted on December 25, 2017 at 6:57 am</p>
                                    </div>
                                    <div className="rate ">
                    <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
                    </div>
                                </div>
                                <div className="entry_content ">
                            <p >Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                            </div>
                            </div>  
                        </li>
                        <li>
                            <div className="shop_thumb ">
                            <img src={require('../image/shop.jpg')} width={100}></img>   
                            </div>
                            <div className="post-content ">
                                <div className="entry_meta flex">
                                    <div className="post_on flex">
                                    <a href="#">Jordi Albae</a>
                                    <p className="ms-4">Posted on December 25, 2017 at 6:57 am</p>
                                    </div>
                                    <div className="rate ">
                    <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
                    </div>
                                </div>
                                <div className="entry_content ">
                            <p >Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                            </div>
                            </div>  
                        </li>
                    </ul>
                    <div className="client_view p-4">
                        <div className="review_form">
                            <div className="review_title">
                            <h5>Add a Review</h5>
                            </div>
                            <Form className="row flex">
                                <div className="c_col col-4">
                                <Form.Control placeholder="Full Name" className="name" />
                                </div>
                                <div className="c_col col-4">
                                <Form.Control placeholder="Email Address" className="name" />
                                </div>
                                <div className="c_col col-4">
                                <div className="text-start text-warning fs-5 ms-2">
                                    Your Rating:
                    <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
                    </div>
                                </div>
                                <div className="col-12">
                                <Form.Control  as="textarea"  placeholder="Type Here Message" style={{ height: '300px' }}  />
                                </div>
                                <div className="col-12">
                                <button type="submit" className="submit2">Submit Review</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Container>
        </div>
        <div className="newsletters_section">
            <Container>
                <Row className="newsletters_row">
                 <Col className="col-6">
                    <div className="newsletters_title">
                    <h4 className="text-white fs-2  fw-bold">Subscribe Our Newsletter</h4>
                    </div>
                </Col>
                 <Col className="col-6">
                    <div className="newsletters_form">
                    <Form className="flex">
                    <InputGroup className="mb-3">
      {/* <InputGroup.Text className="text-white border  border-none"></InputGroup.Text> */}
      
      <Form.Control aria-label="First name" placeholder="Enter Your Email"  className="border-none"/>
      <Button className="btn ms-5 fs-5"><span>Subscribe</span></Button>
    </InputGroup>

                    </Form>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
        
        </>
        
    )
}
export default Shop