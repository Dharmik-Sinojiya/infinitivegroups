import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to control the navbar collapse

  // Function to toggle collapse
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Infinitive Groups"
            src="./img/67.png" // ensure your logo image also reflects Infinitive Groups
            width="80"
            height="55"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={toggleNavbar}
          className="custom-navbar-toggle"
        />

        <Navbar.Collapse id="navbar-nav" in={isOpen}>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className="header-link"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className="header-link"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Services"
              className="header-link"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              Services
            </Nav.Link>

            {/* Other Links */}
            <Nav.Link
              as={Link}
              to="/Projects"
              className="header-link"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              Project
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className="header-link"
              onClick={() => setIsOpen(false)} // Close navbar on click
            >
              Contact Us
            </Nav.Link>

            {/* Social Icons */}
            <Nav.Link
              href="https://www.instagram.com/infinitive_group_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="header-icon"
              />
            </Nav.Link>

            <Nav.Link
              href="https://wa.me/8488895151"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                className="header-icon"
              />
            </Nav.Link>

            <Nav.Link href="tel:+91 84888 95151">
              <FontAwesomeIcon
                icon={faHeadset}
                size="2x"
                className="header-icon"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
