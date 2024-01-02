import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Counting =() =>{
    return(
        <div className="bg_counter">
            <Container>
                <div className="d-flex text-center">
                <Card style={{ width: '18rem' }} className="count ">
      <Card.Img className="count_img "   src={require('../image/asset 25.png')}  />
      <Card.Body>
        <Card.Title className="fs-1 fw-2">5050</Card.Title>
        <Card.Text className="fs-5">
          Organic Tomato
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="count  ">
      <Card.Img className="count_img"   src={require('../image/asset 26.png')}  />
      <Card.Body>
        <Card.Title className="fs-1 fw-2">6200</Card.Title>
        <Card.Text className="fs-5">
          Organic Blueberry
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="count">
      <Card.Img className="count_img"   src={require('../image/asset 27.png')}  />
      <Card.Body>
        <Card.Title className="fs-1 fw-2">8100</Card.Title>
        <Card.Text className="fs-5">
          Organic Orange
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className=" line ">
      <Card.Img className="count_img"   src={require('../image/asset 28.png')}  />
      <Card.Body>
        <Card.Title className="fs-1 fw-2">6300</Card.Title>
        <Card.Text className="fs-5">
          Organic Carrot
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
            </Container>
        </div>
    )
}
export default Counting