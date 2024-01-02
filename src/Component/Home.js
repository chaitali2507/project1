import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Container from 'react-bootstrap/esm/Container';
import Feature from './Feature';
import Information from './Information';
import Product from './Product';
import Counting from './Counting';
import Offer from './Offer';
import Testimonial from './Testimonial';
import Blogsection from './Blogsection';
import Sponsor from './sponsor';
import FarmGallery from './Farmgallery';

const banneropt={
    items:1,
    loop:true,
    margin:10,
    nav:true
}

const Home=()=>{
    return(
        <>
        <OwlCarousel className='owl-theme'{...banneropt} >
    <div class='item'>
            <img src={require('../image/asset 4.jpeg')}  height={600} className='backcolor'></img>
    
        <div className='content'>
            <h3>Agricul Farm</h3>
            <div className='title'>
                Fresh Oraganic Fruits For Your Health.
            </div>
            <div className='disc'>
                Dynamically supply web-enabled portals for high standards income Completely productivate optimal sources strategic.
            </div>
                    <center>
                        <a href='#' className='lab-btn'>
                            <span>Shop Now</span>
                        </a>
                    </center>
                </div> 
     </div>
    <div class='item'>
    <img src={require('../image/asset 5.jpeg')}  height={600} className='backcolor'></img>
    <div className='content'>
            <h3>Agricul Farm</h3>
            <div className='title'>
                Fresh Oraganic Fruits For Your Health.
            </div>
            <div className='disc'>
                Dynamically supply web-enabled portals for high standards income Completely productivate optimal sources strategic.
            </div>
                    <center>
                        <a href='#' className='lab-btn'>
                            <span>Shop Now</span>
                        </a>
                    </center>
                </div> 
    </div>
    <div class='item'>
    <img src={require('../image/asset 3.jpeg')} height={600} className='backcolor'></img>
    <div className='content'>
            <h3>Agricul Farm</h3>
            <div className='title'>
                Fresh Oraganic Fruits For Your Health.
            </div>
            <div className='disc'>
                Dynamically supply web-enabled portals for high standards income Completely productivate optimal sources strategic.
            </div>
                    <center>
                        <a href='#' className='lab-btn'>
                            <span>Shop Now</span>
                        </a>
                    </center>
                </div> 
    </div> 
</OwlCarousel>
        <Feature> </Feature>
        <Information></Information>
        <Product></Product>
        <Counting></Counting>
        <FarmGallery></FarmGallery>
        <Offer></Offer>
        <Testimonial></Testimonial>
        <Blogsection></Blogsection>
        <Sponsor></Sponsor>

</>

    )
}
export default Home;