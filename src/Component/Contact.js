import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const Contact =() =>{
    return(
        <>
        <div className="page_header info">
            {/* <div className="overlay"></div> */}
            <Container>
                <div className="page_header-content">
                <h4 class="ph_title">Agricul Farm About us</h4>
                <ul className="agri_ul flex justify-center ">
                    <li ><a href="#" className="text-white"> Home</a></li>
                    <li><a href="#" className="active ms-2">/Contact Us</a></li>
                </ul>
                </div>
            </Container>
    </div>
    {/* contact start */}
    <div className="contact_section feature">
        <Container>
            <div className="contac_top">
                <Row className="flex counter">
                    <Col className="col-4">
                        <div className="contac_item flex">
                            <div className="contac_icon">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            </div>
                            <div className="contac_details">
                            <p>Sector # 48,123 Street,Melbourn City Australia.</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-4">
                        <div className="contac_item flex">
                            <div className="contac_icon">
                            <i class="fa-solid fa-phone bg-warning"></i>
                            </div>
                            <div className="contac_details">
                            <p>+88978-658-125, 0078-98-954 012-859-6510003</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-4">
                        <div className="contac_item flex">
                            <div className="contac_icon">
                            <i class="fa-solid fa-envelope bg-info"></i>
                            </div>
                            <div className="contac_details">
                            <p>Chashi@gmail.com<br></br>www.chashi@gmail.com</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="contac_bottom mt-5">
                    <Row className="flex counter">
                        <Col className="col-6">
                            <div className="location_map">
                                <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2275990947564!2d90.3869883144556!3d23.739261895119842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c740f17d1%3A0xdd3daab8c90eb11f!2sCodexCoder!5e0!3m2!1sen!2sbd!4v1572866170296!5m2!1sen!2sbd" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-6"> 
                            <div className="contac_form" >
                                <Form className="comment_form flex" >
                                <div className="c_col col-6">
                                <Form.Control placeholder="Name*" className="name1" />
                                </div>
                                <div className="c_col col-6 ">
                                <Form.Control placeholder="Email*"   className="name1" />
                                </div>
                                <div className="c_col col-12">
                                <Form.Control placeholder="Subject*" className="name" />
                                </div>
                                <div className="col-12">
                                <Form.Control  as="textarea"  placeholder="Message*" style={{ height: '300px' }}  />
                                </div>
                                <div className="c_col col-12 py-3 ">
                                <Button className="btn w-100"><span>Submit Now</span></Button>
                                </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
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
export default Contact