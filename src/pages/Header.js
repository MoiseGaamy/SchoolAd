import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Row, Card, Col} from 'react-bootstrap';
import NavBar from './NavBar';

export default class Header extends Component {
    render() {
        return (
        <>
         <NavBar />
            <section className="head" style={{backgroundImage : "url(/images/text24.jpg)",backgroundRepeat:"no-repeat", maxWidth:"100%",maxHeight:"75%"}} >
                <Container>
                        <Row>
                            <Col md="12" >
                            <Card className="second_welcome">
                            <Card.Body>
                                <Card.Text>
                                Bienvenue a school-ads notre objective est de vous aidez a trouver la bonne ecole selon votre budget!
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            </Col>
                            <Col lg="8" >
                            <Card className="welcome">
                            <Card.Body>
                                <Card.Title>Welcome!</Card.Title>
                                <Card.Text>
                                Notre vision est de vous procurez de l'information possible dans la realisation de vos projets d'etudes au ghana.
                                vous allez certainement  entendre parlez de tant d'autres chose mais sachez que la realite est differente, 
                                veuillez bien vous informez avant d'atterir. sachez aussi bien que l'arnaque ici est a un autre niveau d'ailleurs C'est dans ce cadre que mon equipe et moi avions decides de mettre a votre disposition cette plateform,
                                pour vous aidez a realise vos projets d'etudes au Ghana n'hesitez pas à nous posez toute vos questions,
                                concernant les etudes au ghana. votre reussite est notre priorite Namaste.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                            </Col>
                        </Row>             
                </Container>
            </section>
        </>
        )
    }
}

// style={{backgroundImage : "url(/images/text15.jpg)"}}