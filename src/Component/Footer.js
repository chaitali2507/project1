import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

const Footer =() =>{
    return(
        <div className="footer_section">
            <Container>
                <div className="footer_top">
                    <Row>
                        <Col className="col-3">
                            <div className="footer_item">
                                <div className="footer_inner">
                                    <div className="footer_logo">
                                    <img src={require('../image/asset 0.png')} ></img>
                                    </div>
                                    <div className="footer_desc">
                                    <p className="text-white">Conveniently customizec web services aggregate frictionle internet withouevs Conveniently customizec.</p>
                                    <p className="text-white">aggregate frictionle without aggregate Conveniently customizec efrictionle.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-3">
                            <div className="footer_item">
                                <div className="footer_inner">
                                    <div className="footer_title">
                                    <h5 className="text-white fs-5 fw-1 ms-4">Keep In Touch</h5>
                                    </div>
                                    <div className="footer_body">
                                        <ul className="agri_ul flex">
                                            <li className="d-flex"><div className="icon2 "><i class="fa-solid fa-location-dot "></i></div>
                                           <div className="details">
                                           <p className="text-white">Sector # 48,123 Vokte Street, Melborn city, Australia</p>
                                            </div> 
                                            </li>
                                            <li className="d-flex"><div className="icon2 "><i class="fa-solid fa-phone"></i></div>
                                           <div className="details">
                                           <p className="text-white">+88978-658-125, 0078-98-954,+1655-456-523</p>
                                            </div> 
                                            </li>
                                            <li className="d-flex"><div className="icon2 "><i class="fa-solid fa-envelope"></i></div>
                                           <div className="details">
                                           <p className="text-white">Chashi@gmail.com</p>
                                            </div> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                         <Col className="col-3">
                        <div className="footer_item">
                            <div className="footer_inner">
                                <div className="footer_title">
                                <h5 className="text-white ms-4">Chashi Product</h5>
                                </div>
                                <div className="footer_body">
                                    <ul className="agri_ul flex">
                                        <li className="d-flex "><div className="thumb " >
                                            <a> <img src={require('../image/asset 4.jpeg')} width={90} ></img></a>
                                            </div>
                                            <div className="details ms-4">
                                            <a><h5 className="text-white fs-5">Fruits &amp;Vegetable</h5></a>
                                            <h6 className="text-white">$24.99</h6>
                                            </div>
                                            </li>
                                            <li className="d-flex "><div className="thumb " >
                                            <a> <img src={require('../image/asset 5.jpeg')} width={90} ></img></a>
                                            </div>
                                            <div className="details ms-4">
                                            <a><h5 className="text-white fs-5">Natural &amp;Honey</h5></a>
                                            <h6 className="text-white">$25.99</h6>
                                            </div>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col className="col-3">
                            <div className="footer_item">
                                <div className="footer_inner">
                                    <div className="footer_title">
                                    <h5 className="text-white">Chashi Product</h5>
                                    </div>
                                    <div className="footer_body">
                                        <ul className="agri_ul flex">
                                            <li><a><img src={require('../image/asset 43.jpeg')} width={70} ></img></a></li>
                                            <li><a><img src={require('../image/asset 44.jpeg')} width={70} ></img></a></li>
                                            <li><a><img src={require('../image/asset 45.jpeg')} width={70} ></img></a></li>
                                            <li><a><img src={require('../image/asset 46.jpeg')} width={70} ></img></a></li>
                                            <li><a><img src={require('../image/asset 47.jpeg')} width={70} ></img></a></li>
                                            <li><a><img src={require('../image/asset 48.jpeg')} width={70} ></img></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="footer_bottom text-center fs-5">
                        <p className="text-white">  © 2021 Chashi All Rights Reserved By LabArtisan</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Footer