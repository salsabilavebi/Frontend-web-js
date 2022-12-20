import React from "react";
import {Navbar, Nav, Container, } from "react-bootstrap";

const NavbarComp = () =>{

    return(
    <div className="Navbar">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src="./icon/pupuk.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );  
};

export default NavbarComp;

