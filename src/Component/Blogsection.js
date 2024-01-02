import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

const Blogsection =()=>{
    return(
        <div className="feature">
            <Container>
                <div className="section_header">
                <h3>Agricul Farm Recent Blog</h3>
                <p className="w-100  fs-5">Conveniently customize proactive  services leveraged interfaces without Globally </p>
                </div>
                <div className="section_wrapper">
                   <Row className="flex counter">
                        <Col className="col-4">
                            <div className="post_item">
                                <div className="post_inner">
                                    <div className="post_thumb">
                                        <a><img src={require('../image/asset 4.jpeg')} ></img></a>
                                        <div className="meta_date">
                                            <div className="md_pre">
                                            <h5>24</h5>
                                            <p className="text-white">Aug</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post_content">
                                        <a><h5 className="fs-3">Tips For Ripening Your Fruits &amp; Vegetable</h5></a>
                                        <div className="meta_post text-center">
                                            <p>
                                                <span className=" fs-5 fw-4"> Admin <a className="fs-5 fw-2">Rajib Raj</a></span>
                                                <span className="fs-5 fw-4"> | <a>10 Comments</a></span>
                                            </p>
                                            <h5 className="fs-5 text-warning">Read More</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-4">
                            <div className="post_item">
                                <div className="post_inner">
                                    <div className="post_thumb">
                                        <a><img src={require('../image/asset 5.jpeg')} ></img></a>
                                        <div className="meta_date">
                                            <div className="md_pre">
                                            <h5>25</h5>
                                            <p className="text-white">Aug</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post_content">
                                        <a><h5 className="fs-3">Benefits of a Raw Food for your Health</h5></a>
                                        <div className="meta_post text-center">
                                            <p>
                                                <span className=" fs-5 fw-2"> Admin <a className="fs-5 texi-black">Somrat Islam</a></span>
                                                <span className="fs-5 fw-4"> | <a>10 Comments</a></span>
                                            </p>
                                            <h5 className="fs-5 text-warning">Read More</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-4">
                            <div className="post_item">
                                <div className="post_inner">
                                    <div className="post_thumb">
                                        <a><img src={require('../image/asset 3.jpeg')} ></img></a>
                                        <div className="meta_date">
                                            <div className="md_pre">
                                            <h5>26</h5>
                                            <p className="text-white">Aug</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post_content">
                                        <a><h5 className="fs-3">Superfoods You Should be Eating For Health</h5></a>
                                        <div className="meta_post text-center">
                                            <p>
                                                <span className=" fs-5 fw-4"> Admin <a className="fs-5 fw-2">Sajahan Sagor</a></span>
                                                <span className="fs-5 fw-4"> | <a>10 Comments</a></span>
                                            </p>
                                            <h5 className="fs-5 text-warning">Read More</h5>
                                        </div>
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
export default Blogsection