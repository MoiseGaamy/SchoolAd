import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Image, Alert, Button } from 'react-bootstrap';
import Footer from './Footer';
export default class Univ extends Component {
    render() {
        return (
            <div>
                 <Container>
                    <Row className="langue_row">
                        <Col md={6} md={{offset:2}} className="imageCol">
                            <Image src="images/univv.jpg" rounded width={300}/>
                        </Col>
                        <Col md={6}>
                        <>
                            <Alert >
                                <Alert.Heading>How's it going?!</Alert.Heading>
                                <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                fermentum.
                                </p>
                                <div className="d-flex justify-content-start">
                                <Button  variant="outline-info">
                                    Savoir plus!
                                </Button>
                                </div>
                            </Alert>
                            </>
                        </Col>
                    </Row>
                    <Row className="langue_row">
                        <Col md={6} md={{offset:2}} className="imageCol">
                            <Image src="images/univv.jpg" rounded width={300}/>
                        </Col>
                        <Col md={6}>
                        <>
                            <Alert >
                                <Alert.Heading>How's it going?!</Alert.Heading>
                                <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                fermentum.
                                </p>
                                <div className="d-flex justify-content-start">
                                <Button  variant="outline-info">
                                    Savoir plus!
                                </Button>
                                </div>
                            </Alert>
                            </>
                        </Col>
                    </Row>
                    <Row className="langue_row">
                        <Col md={6} md={{offset:2}} className="imageCol">
                            <Image src="images/univv.jpg" rounded width={300}/>
                        </Col>
                        <Col md={6}>
                        <>
                            <Alert >
                                <Alert.Heading>How's it going?!</Alert.Heading>
                                <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                fermentum.
                                </p>
                                <div className="d-flex justify-content-start">
                                <Button  variant="outline-info">
                                    Savoir plus!
                                </Button>
                                </div>
                            </Alert>
                            </>
                        </Col>
                    </Row>
                    <Row className="langue_row">
                        <Col md={6} md={{offset:2}} className="imageCol">
                            <Image src="images/univv.jpg" rounded width={300}/>
                        </Col>
                        <Col md={6}>
                        <>
                            <Alert >
                                <Alert.Heading>How's it going?!</Alert.Heading>
                                <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                fermentum.
                                </p>
                                <div className="d-flex justify-content-start">
                                <Button  variant="outline-info">
                                    Savoir plus!
                                </Button>
                                </div>
                            </Alert>
                            </>
                        </Col>
                    </Row>
                    <Row className="langue_row">
                        <Col md={6} md={{offset:2}} className="imageCol">
                            <Image src="images/univv.jpg" rounded width={300}/>
                        </Col>
                        <Col md={6}>
                        <>
                            <Alert >
                                <Alert.Heading>How's it going?!</Alert.Heading>
                                <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                fermentum.
                                </p>
                                <div className="d-flex justify-content-start">
                                <Button  variant="outline-info">
                                    Savoir plus!
                                </Button>
                                </div>
                            </Alert>
                            </>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}
