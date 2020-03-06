import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="ml-5" href="#home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link href="/ueberuns">Über Uns</Nav.Link>
            <NavDropdown title="Informationen" id="basic-nav-dropdown">
              <NavDropdown.Item href="/wohnen">Wohnen</NavDropdown.Item>
              <NavDropdown.Item href="/essen">Essen</NavDropdown.Item>
              <NavDropdown.Item href="/freizeit">Freizeit</NavDropdown.Item>
              <NavDropdown.Item href="/nachhilfe">Nachhilfe</NavDropdown.Item>
              <NavDropdown.Item href="/anreise">Anreise</NavDropdown.Item>
              <NavDropdown.Item href="/downloads">Downloads</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/kontakt">Kontakt</Nav.Link>
            <Nav.Link href="/aktuelles">Aktuelles</Nav.Link>
            <Nav.Link href="/bilder">Bilder</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
