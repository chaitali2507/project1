import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header=()=>{
    return(
        
        <header >
            <div className="bgdark">
                <div className="container">
                    <div className="top_header flex justify-between align-item">
                        <div className="left_info flex">
                            <ul className="flex">
                                <li><a><i class="fa-solid fa-envelope"></i>Chashi@gmail.com</a></li>
                                <li><a><i class="fa-solid fa-phone"></i>+88130-589-745-6987</a></li>
                                <li><a><i class="fa-regular fa-clock"></i>Mon-Fri 09:00-18:00</a></li>
                            </ul>
                        </div>
                        <div className="right_info">
                            <ul className="flex"> 
                                <li><a><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a><i class="fa-brands fa-vimeo-v"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar className='nav bg-white'   >
        <Container className='justify-content-center'>
          <Nav className='main_menu'>
            <Link to='/Home' className="ms-3 fs-5 py-3 active" >Home<i class="fa-solid fa-angle-down"></i>
            <Nav className='sub_menu'>
            <Nav.Link href="#" className="ms-3 fs-5 ">Agricul Farm</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Agricul Farm2</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Agricul Farm3</Nav.Link>
            <Nav.Link href="#features" className="ms-3 fs-5 ">Agricul Farm4</Nav.Link>
            </Nav>
            </Link>
            <Link to='/About' className="ms-3 fs-5 py-3">Pages<i class="fa-solid fa-angle-down"></i>
            <Nav className='sub_menu'>
            <Nav.Link href="#" className="ms-3 fs-5 ">About Page</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Team Page</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Faq Page</Nav.Link>
            <Nav.Link href="#features" className="ms-3 fs-5 ">404 Page</Nav.Link>
            </Nav> 
            </Link>
            <Link to='/Gallery' className="ms-3 fs-5 py-3">Gallery<i class="fa-solid fa-angle-down"></i>
            <Nav className='sub_menu'>
            <Nav.Link href="#" className="ms-3 fs-5 ">Gallery 2 Grid</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Gallery Masonary</Nav.Link>
            </Nav>
            </Link>
            <img src={require('../image/asset 0.png')} className='ms-4'></img>
            <Nav.Link href="#pricing" className="ms-3 fs-5 py-3">Blog<i class="fa-solid fa-angle-down"></i>
            <Nav className='sub_menu'>
            <Nav.Link href="#" className="ms-3 fs-5 ">Blog Right Sidebar</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Blog Left Sidebar</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Blog Single Page</Nav.Link>
            </Nav>
            </Nav.Link>
            <Link to='/Shop' className="ms-3 fs-5 py-3">Shop<i class="fa-solid fa-angle-down"></i>
            <Nav className='sub_menu'>
            <Nav.Link href="#" className="ms-3 fs-5 ">Product</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Product Single</Nav.Link>
            <Nav.Link href="#" className="ms-3 fs-5 ">Cart Page</Nav.Link>
            </Nav>
            </Link>
            <Nav.Link href="/Contact" className="ms-3 fs-5 py-3">Contact</Nav.Link>
            <Nav.Link href="#pricing" className="ms-3 fs-5 py-3" ><i class="fa-sharp fa-solid fa-cart-shopping text-warning icon"></i></Nav.Link>
            <Nav.Link href="#pricing" className="ms-3 fs-5 py-3"><i class="fa-solid fa-magnifying-glass text-warning icon"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </header>
    )
}
export default Header;