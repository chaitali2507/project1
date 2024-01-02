import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Information =() =>{
    return(
        <div className="info">
            <div className="shape_image ">
            {/* <img src={require('../image/asset 10.png')} className="shape1"></img> */}
            {/* <img src={require('../image/asset 11.png')}  className='shape2'></img> */}
                <Container>
                    <div className='info_wrapper'>
                       <div className='flex'>
                            <div className='info_col'>
                            <div className='info_header'>
                            <h3>We Are Best Organic Fruits And Vegetable Farm.</h3>
                            <p>Conveniently customize proactive web services for leveraged without globally wellies richard.</p>
                            </div>
                            <div className='info_wrapper d-flex'>
                                <div className='info_part'>
                                        <div className='info_item '>
                                            <div className='info_inner  d-flex'>
                                                <div className='info_thumb '>
                                                <img src={require('../image/asset 12.png')} ></img>

                                                </div>
                                                <div className='info_content '>
                                                    <a><h5 >Organic and non-gmo</h5></a>
                                                    <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                                                </div>
                                            </div>
                                        </div> 
                                </div>
                                <div className='info_part'>
                                        <div className='info_item'>
                                            <div className='info_inner d-flex '>
                                                <div className='info_thumb'>
                                                <img src={require('../image/asset 13.png')} ></img>

                                                </div>
                                                <div className='info_content'>
                                                    <a><h5>Best Organic products</h5></a>
                                                    <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                                                </div>
                                            </div>
                                        </div> 
                                </div>
                                
                            </div>
                            <div className='info_wrapper d-flex'>
                                <div className='info_part py-2'>
                                        <div className='info_item'>
                                            <div className='info_inner d-flex py-5'>
                                                <div className='info_thumb'>
                                                <img src={require('../image/asset 14.png')} ></img>

                                                </div>
                                                <div className='info_content '>
                                                    <a><h5>Healthy and nutritious</h5></a>
                                                    <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                                                </div>
                                            </div>
                                        </div> 
                                </div>
                                <div className='info_part py-2'>
                                        <div className='info_item'>
                                            <div className='info_inner d-flex py-5'>
                                                <div className='info_thumb'>
                                                <img src={require('../image/asset 15.png')} ></img>

                                                </div>
                                                <div className='info_content'>
                                                    <a><h5>500 acres of pasture</h5></a>
                                                    <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                                                </div>
                                            </div>
                                        </div> 
                                        
                                </div>  
                                {/*  */}
                                <div className='info_part2'>
                                    <div className='info_thumb2'>
                                    <img src={require('../image/asset 16.png')} ></img>
                                    </div>
                                </div>
                            </div>
                            </div>
                       </div>
                    </div>
                </Container>

            </div>
        </div>
    )
}
export default Information