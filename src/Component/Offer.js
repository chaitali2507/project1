import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';

const Offer =() =>{
    return(
        <div className="spacer">
            <Container>
                <div className="section_wrapper">
                    <Row class='flex counter'>
                        <Col className="col" >
                            <div className="offer_item">
                                <div className="offer_inner d-flex">
                                    <div className="offer_thumb">
                                    <img src={require('../image/asset 33.png')} ></img>
                                    </div>
                                    <div className="offer_content">
                                        <a><h5>Orange</h5></a>
                                        <h3>100% Natural Fruit Juice <span>30% Off</span></h3>
                                        <Button className="btn  text-warning bg-white fs-5 mt-3" width={50} ><span>View Product</span></Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="col" >
                            <div className="offer_item2">
                                <div className="offer_inner d-flex">
                                    <div className="offer_thumb">
                                    <img src={require('../image/asset 34.png')} ></img>
                                    </div>
                                    <div className="offer_content">
                                        <a><h5>Strawberry</h5></a>
                                        <h3>100% Natural Fruit Juice <span>70% Off</span></h3>
                                        <Button className="btn  text-warning bg-white fs-5 mt-3" width={50} ><span>View Product</span></Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Offer  