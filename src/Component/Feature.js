import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Feature=()=>{
    return(
         
    <div className='feature'>
    <Container>
        <div className='section_header'>
        <h3>Fruits &amp; Vegetable Keep Your Health</h3>
        <p>Conveniently customize proactive  services leveraged interfaces without Globally </p>
        </div>
        <div className='section_wrapper'>
            <Row className='justify-content-center'>
                <Col>
                <div className='feature_item'>
                        <div className='feature_inner'>
                            <div className='feature_thumb'>
                                <img src={require('../image/asset 6.png')} ></img>

                             </div>
                            <div className='feature_content'>
                                 <a href='#'><h5>Tomato</h5></a>
                                 <p>Continually aggregate friction web interfaces thout</p>   
                            </div>
                        </div>
                </div>
                </Col>
                <Col>
                <div className='feature_item'>
                        <div className='feature_inner bgcolor'>
                            <div className='feature_thumb'>
                                <img src={require('../image/asset 7.png')} ></img>

                             </div>
                            <div className='feature_content'>
                                 <a href='#'><h5>Blueberry</h5></a>
                                 <p>Continually aggregate friction web interfaces thout</p>   
                            </div>
                        </div>
                </div>
                </Col>
                <Col>
                <div className='feature_item'>
                        <div className='feature_inner'>
                            <div className='feature_thumb'>
                                <img src={require('../image/asset 8.png')} ></img>

                             </div>
                            <div className='feature_content'>
                                 <a href='#'><h5>Orange</h5></a>
                                 <p>Continually aggregate friction web interfaces thout</p>   
                            </div>
                        </div>
                </div>
                </Col>
                <Col>
                <div className='feature_item'>
                        <div className='feature_inner bgcolor'>
                            <div className='feature_thumb'>
                                <img src={require('../image/asset 9.png')} ></img>

                             </div>
                            <div className='feature_content'>
                                 <a href='#'><h5>Banana</h5></a>
                                 <p>Continually aggregate friction web interfaces thout</p>   
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
export default Feature;