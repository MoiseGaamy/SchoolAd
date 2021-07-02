import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
} from "react-router-dom";


import { Nav, DropdownButton, Dropdown, } from 'react-bootstrap';


export default class Navb extends Component {
    render() {
        return (
            <div className="navCss">
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link as={Link} to={"/"} className="navLink activeLink">Ghana</Nav.Link>
                    </Nav.Item>
                    <DropdownButton title="Schools" className="school activeLink">
                        <Dropdown.Item as={Link} to={"/langue"}>Ecoles de L'angues</Dropdown.Item>
                        <Dropdown.Item as={Link} to={"/info"}>Informatique(I.T)</Dropdown.Item>
                        <Dropdown.Item as={Link} to={"/univ"}>Universitée</Dropdown.Item>
                    </DropdownButton>
                    <Nav.Item>
                    <Nav.Link as={Link} to={"/blog"} eventKey="link-2" className="navLink">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link  as={Link} to={"/service"} eventKey="link-2" className="navLink">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link  as={Link} to={"/contact"} eventKey="link-2" className="navLink">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
