import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Alert, Button, Image } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="all">
                <Container>
                <Row className="secondRow">
                            <Col>
                                <Alert variant="success" className="welcome">
                                    <h1>SchoolAd!</h1>
                                    <p>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                    fermentum.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                    fermentum.
                                    <br/>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                    fermentum.
                                    </p>
                                </Alert>
                        </Col>
                        <Col>
                        <Image src="images/prof.svg" className="myimage"/>
                        </Col>
                        </Row>             
                </Container>
            </div>
        )
    }
}
