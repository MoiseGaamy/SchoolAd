import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";

import { Row, Col, Alert, Button, Image, Card } from 'react-bootstrap';
export default class Service extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Row className="service_row1">
                    <Col md={6}>
                    <>
                        <Alert >
                            <Alert.Heading>How's it going?!</Alert.Heading>
                            <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.
                            </p>
                            <div className="d-flex justify-content-end">
                            <Button variant="outline-success">
                                Close me y'all!
                            </Button>
                            </div>
                        </Alert>
                    </>
                </Col>
                    <Col md={6} >
                       <Image src="images/ccs.jpg" className="cust_image"/> 
                    </Col>
                </Row>
                <Row className="section_row2"> 
                    <h1 className="row2_inner1">SERVICE</h1>
                  <Row className="service_inner2">
                    <Col>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Title><i class="fas color fa-truck-pickup fa-5x"></i></Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><i class="fas color fa-home fa-5x"></i></Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><i class="far color fa-building fa-5x"></i></Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
                     </Row>
                </Row>
            </div>
        )
    }
}
