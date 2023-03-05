import React from 'react'
import Container from 'react-bootstrap/Container';
import {FaBeer} from 'react-icons/fa'
import { Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => {

  const style = {color: "white"}
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">MarcaTienda</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <div>

    <FaBeer/>
      </div>
    </Container>
  </Navbar>
  )
}
