import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Gallery =() =>{
    return(
        <>
        <div className="product_section">
            <Container>
                <div className="section_wrapper">
                    <Row className="counter">
                        <Col className="col-6">
                        <div className="product_item">
                            <div className="product_inner">
                                <div className="product_thumb">
                                <img src={require('../image/01 (1).jpg')} width={630}></img>
                                </div>
                                {/* <div className="product_content">
                                <a href="#" class="product_name">Fruits</a>
                                </div> */}
                            </div>
                        </div>
                        </Col>
                        <Col className="col-6">
                        <div className="product_item">
                            <div className="product_inner">
                                <div className="product_thumb">
                                <img src={require('../image/02.jpg')} width={630}></img>
                                </div>
                                {/* <div className="product_content">
                                <a href="#" class="product_name">Fruits</a>
                                </div> */}
                            </div>
                        </div>
                        </Col>
                        <Col className="col-6">
                        <div className="product_item">
                            <div className="product_inner">
                                <div className="product_thumb">
                                <img src={require('../image/03.jpg')} width={630}></img>
                                </div>
                                {/* <div className="product_content">
                                <a href="#" class="product_name">Fruits</a>
                                </div> */}
                            </div>
                        </div>
                        </Col>
                        <Col className="col-6">
                        <div className="product_item">
                            <div className="product_inner">
                                <div className="product_thumb">
                                <img src={require('../image/04.jpg')} width={630}></img>
                                </div>
                                {/* <div className="product_content">
                                <a href="#" class="product_name">Fruits</a>
                                </div> */}
                            </div>
                        </div>
                        </Col>
                        <Col className="col-6">
                        <div className="product_item">
                            <div className="product_inner">
                                <div className="product_thumb">
                                <img src={require('../image/05.jpg')} width={630}></img>
                                </div>
                                {/* <div className="product_content">
                                <a href="#" class="product_name">Fruits</a>
                                </div> */}
                            </div>
                        </div>
                        </Col>
                        <Col className="col-6">
                        <div className="product_item">
                            <div className="product_inner">
                                <div className="product_thumb">
                                <img src={require('../image/06.jpg')} width={630}></img>
                                </div>
                                {/* <div className="product_content">
                                <a href="#" class="product_name">Fruits</a>
                                </div> */}
                            </div>
                        </div>
                        </Col>
                        <Col className="col-6">
                        <div className="product_item">
                            <div className="product_inner">
                                <div className="product_thumb">
                                <img src={require('../image/07.jpg')} width={630}></img>
                                </div>
                                {/* <div className="product_content">
                                <a href="#" class="product_name">Fruits</a>
                                </div> */}
                            </div>
                        </div>
                        </Col>
                        <Col className="col-6">
                        <div className="product_item">
                            <div className="product_inner">
                                <div className="product_thumb">
                                <img src={require('../image/08.jpg')} width={630}></img>
                                </div>
                                {/* <div className="product_content">
                                <a href="#" class="product_name">Fruits</a>
                                </div> */}
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        {/* newsletters */}
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
export default Gallery