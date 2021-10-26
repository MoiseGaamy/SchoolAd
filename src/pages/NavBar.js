import React from 'react'
// import { Link } from 'react-router-dom';
// import { FaCaretDown } from 'react-icons/fa';
import { Container, Nav, Navbar , NavDropdown} from 'react-bootstrap';

export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect className="mynavBar" expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand className="brand" href="/">School-Ads</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="myResponsiveNav" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link  className="navLink"href="/">Home</Nav.Link>
                    <Nav.Link  className="navLink"href="/Blog">Blog</Nav.Link>
                    <NavDropdown title="Schools" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/Lang">Ecole de l'angue</NavDropdown.Item>
                        <NavDropdown.Item href="/info">Informatique</NavDropdown.Item>
                        <NavDropdown.Item href="/Univ">Université</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <Nav.Link className="navLink" href="/Service">Services</Nav.Link>
                    <Nav.Link className="navLink" href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}
