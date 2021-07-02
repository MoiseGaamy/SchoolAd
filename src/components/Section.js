import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Image, Card, } from 'react-bootstrap';
export default class Section extends Component {
    render() {
        return (
            <Container fluid className="section">
                <Row className="section_row1">
                <Col xs={6} md={4} className="section_image">
                  <Image src="images/gh.jpg" thumbnail />
               </Col>
                    <Col xs={6} md={7} >
                        <h1 className="img_cover">Ghana</h1>
                    <p className="section_content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Itaque architecto necessitatibus, obcaecati facilis illo in
                        consequatur tenetur minima quia minus nisi, reiciendis
                        labore ipsam eligendi ab accusamus doloribus nostrum nobis!<br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque commodi omnis similique dignissimos iure rerum, 
                        pariatur numquam iusto blanditiisdicta voluptatum ea veniam 
                        repudiandae sunt sapiente eos facere ipsa magnam?<br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Consectetur temporibus similique dolores hic ab illo beatae
                        magni? Blanditiis, excepturi quis voluptate nam nemo sint est 
                        beatae veniam debitis, cumque doloremque!
                    </p>
                </Col>  
                </Row>
                <Row className="section_row2"> 
                    <h1 className="row2_inner1">DECOUVRE</h1>
                  <Row className="row2_inner2">
                    <Col>
                    <Card style={{ width: '18rem' }} className="rota_card">
                        <Card.Body>
                            <Card.Title><i class="fas color fa-blog fa-5x"></i></Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}className="rota_card">
                        <Card.Body>
                            <Card.Title><i class="fas color fa-graduation-cap fa-5x"></i></Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}className="rota_card">
                        <Card.Body>
                            <Card.Title><i class="fab color fa-servicestack fa-5x"></i></Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
                     </Row>
                </Row>
            </Container>
        )
    }
}
