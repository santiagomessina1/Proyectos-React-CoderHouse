import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
const NavBar = () =>{
    return(
        <Navbar className='navIndex'>
        <Container >
          <Navbar.Brand href="#home" className='logo'>Blue <span>Label</span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='links'>Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Button variant="outline-dark">Shopping Cart</Button>{' '}
          </Nav>
        </Container>
      </Navbar>

        
    )
}

export default NavBar