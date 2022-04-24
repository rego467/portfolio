import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 py-2">
            <Link to="/" className="px-2 py-2 text-decoration-none text-black">
              HOME
            </Link>
            <Link
              to="about"
              className="px-2 py-2 text-decoration-none text-black"
            >
              ABOUT
            </Link>
            <Link
              to="project"
              className="px-2 py-2 text-decoration-none text-black"
            >
              PROJECT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
