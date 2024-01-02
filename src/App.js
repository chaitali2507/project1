import logo from './logo.svg';
import './App.css';
import './all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Container from 'react-bootstrap/Container';
import Home from './Component/Home';
import Footer from './Component/Footer';
import About from './Component/About';
import { Routes, Route } from "react-router-dom"
import Gallery from './Component/Gallery';
import Shop from './Component/Shop';
import Contact from './Component/Contact';



function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="About" element={ <About/> } />
        <Route path="/Gallery" element={ <Gallery/> } />
        <Route path="/Shop" element={ <Shop/> } />
        <Route path="/Contact" element={ <Contact/> } />
      </Routes>
     <Footer/>

     
    
    </>
  );
}

export default App;
