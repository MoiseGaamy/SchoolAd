import React from 'react'
// import { Link } from 'react-router-dom';
// import { FaCaretDown } from 'react-icons/fa';
import { Container, Nav, Navbar , NavDropdown} from 'react-bootstrap';

export default function NavBar() {
    return (
        <div className="mynav">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand className="brand" href="#home">School-Ads</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link  className="navLink"href="#features">Home</Nav.Link>
                    <Nav.Link  className="navLink"href="#pricing">Blog</Nav.Link>
                    <NavDropdown title="Schools" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ecole de l'angue</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Informatique</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Université</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <Nav.Link className="navLink" href="#pricing">Services</Nav.Link>
                    <Nav.Link className="navLink" href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}
