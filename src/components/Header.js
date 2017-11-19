import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
const Header = ()=> {

return(
  <Navbar id='menu'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><strong>MIREIA GRAU </strong><small><br/>Fashion Photographer Barcelona</small></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/#home">Home</NavItem>
        <NavItem eventKey={2} href="/#aboutme">About me</NavItem>
        <NavItem eventKey={3} href="/#gallery">Gallery</NavItem>
        <NavItem eventKey={4} href="/#contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;