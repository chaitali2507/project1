import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col'

const Product =()=>{
    return(
        <div className="product_section">
            <Container>
                <div className="product_header">
                <h3>Fruits &amp; Vegetable Products</h3>
                <p>Conveniently customize proactives into everaged interfaces without Globally</p>
                </div>
                <Row  >
                    <Col className="d-flex">
                <Card style={{ width: '18rem' }}  >
      <Card.Img variant="top" src={require('../image/asset 19.jpeg')} />
      <Card.Body>
        <Card.Title className="text-center">Green Apple</Card.Title>
        <Card.Text className="text-center">
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        </Card.Text>
        <Card.Title className="text-center">$39.99</Card.Title>
        <Button className="btn ms-5 d-none"><span>Add To Cart</span></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../image/asset 1.jpeg')} />
      <Card.Body>
        <Card.Title className="text-center">Organic Tomato</Card.Title>
        <Card.Text className="text-center">
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        </Card.Text>
        <Card.Title className="text-center">$39.99</Card.Title>
        <Button className="btn ms-5 d-none"><span>Add To Cart</span></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../image/asset 2.jpeg')} />
      <Card.Body>
        <Card.Title className="text-center">Orange</Card.Title>
        <Card.Text className="text-center">
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        </Card.Text>
        <Card.Title className="text-center">$39.99</Card.Title>
        <Button className="btn ms-5 d-none"><span>Add To Cart</span></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../image/asset 20.jpeg')} />
      <Card.Body>
        <Card.Title className="text-center">Strawberry</Card.Title>
        <Card.Text className="text-center">
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        </Card.Text>
        <Card.Title className="text-center">$39.99</Card.Title>
        <Button className="btn ms-5 d-none"><span>Add To Cart</span></Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className="d-flex py-5">
                <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={require('../image/asset 21.jpeg')} />
      <Card.Body>
        <Card.Title className="text-center">Blueberry</Card.Title>
        <Card.Text className="text-center">
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
         
        </Card.Text>
        <Card.Title className="text-center">$39.99</Card.Title>
        <Button className="btn ms-5 d-none"><span>Add To Cart</span></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../image/asset 22.jpeg')} />
      <Card.Body>
        <Card.Title className="text-center">Organic Lettuce</Card.Title>
        <Card.Text className="text-center">
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        </Card.Text>
        <Card.Title className="text-center">$39.99</Card.Title>
        <Button className="btn ms-5 d-none"><span>Add To Cart</span></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../image/asset 23.jpeg')} />
      <Card.Body>
        <Card.Title className="text-center">Carrot</Card.Title>
        <Card.Text className="text-center">
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        </Card.Text>
        <Card.Title className="text-center">$39.99</Card.Title>
        <Button className="btn ms-5 d-none"><span>Add To Cart</span></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../image/asset 24.jpeg')} />
      <Card.Body>
        <Card.Title className="text-center">Brussels Sprouts</Card.Title>
        <Card.Text className="text-center">
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        <i class="fa-solid fa-star " ></i>
        </Card.Text>
        <Card.Title className="text-center">$39.99</Card.Title>
        <Button className="btn ms-5 d-none"><span>Add To Cart</span></Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <div className="text-center" >
    <Button className="btn"><span>View Products</span></Button>
    </div>
            </Container>
        </div>
    )
}
export default Product