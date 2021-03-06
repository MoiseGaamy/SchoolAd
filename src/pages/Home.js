import React, { Component } from 'react'
import { FaAccusoft } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
export default class Section extends Component {
    render() {
        return (
          <>
            {/* subheading section  */}
            <Header />
              <section  className="section_1">
                   <Container>
                <Row >
                  <Container>
                    <h1 className="heading-text">Que faut-il Savoir?</h1>
                     <Row>
                            <Col lg="6" md="6" >
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
                        <Col lg="6" md="6">
                          <Image  className="section_image" src="images/gh.jpg"/>
                        </Col>
                        </Row>
                        </Container>
                     </Row> 
                </Container>
            </section>
                {/* testimonials section */}
           <section className="testimonials">
              <Container>
                <Row>
                  <Col lg="12" md="12">
                <Carousel>
                    <Carousel.Item>
                        <h2 class="testimonial-text">?? ton arriver au Ghana ta premi??re exp??rience pourrait etre l'anarque.si tu crois tout connaitre</h2>
                          <em>Etudiant guineen au ghana </em>
                          <img
                            class="testimonial-image"
                            src="images/rochelle.jpg"
                            alt="lady-profile" 
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                        <h2 class="testimonial-text">Etudier au Ghana c'est bien, se pr??parer avant de venir est mieux</h2>
                        <em>Etudiante ivoirienne au ghana</em>
                          <img
                            class="testimonial-image"
                            src="images/cover.jpg"
                            alt="lady-img"
                          />
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
              </Container>
           </section>
            {/* Features section */}
         <section className="features" >
            <Container>
                <h1 className="heading-text"> A decouvrir</h1>
              <Row>
                  <Col md="4">
                    <FaAccusoft className="social-icon"size={70}/>
                  <h3>Ecole de Langues</h3>
                  <p>Ici vous trouverez toute les informations n??cessaire ?? ce qui concerne les ??coles en g??n??rale.</p>
                  </Col>
                  <Col md="4">
                  <FaMicroblog className="social-icon"size={70}/>
                    <h3>Blog</h3>
                    <p>n'h??sitez pas d'aller sur le blog pour plus d'informations ,le logement, la devise, le cout de vie et tant d'autres..</p>
                  </Col>
                  <Col md="4">
                    <FaRocketchat className="social-icon"size={70}/>
                      <h3>Real chat Time</h3>
                      <p>venez qu'on en parle de vos projets d'??tudes au ghana.Contactez-nous de facons direct</p>
                  </Col>
                </Row>
            </Container>
            </section>
            {/* Press Section */}
          <section className="press">
            <img class="image-press" src="images/Codetrain.png" alt="ct-logo" />
            <img class="image-press" src="images/ipmc.png" alt="ipmc-logo" />
            <img class="image-press" src="images/bizinsider.png" alt="bizinsider-logo" />

            </section>
            {/* Pricing section */}
            <section className="pricing">
              <Container>
                <Row>
                <h2 className="heading-devise">La devise pour ton projet d'??tude</h2>
                <p className="devise-text">la devise depends de chaque ??cole de ton choix.Du coup c'est juste une estimation</p>
                      <Col lg="4" md="6" className="pricing-col">
                          <div className="card">
                            <div className="card-header">
                              <h3>Devise de 3 mois</h3>
                            </div>
                            <div className="card-body">
                              <h2>Free</h2>
                                  <p>5 Matches Per Day</p>
                                  <p>10 Messages Per Day</p>
                                  <p>Unlimited App Usage</p>
                                  <button className="btn btn-lg btn-block btn-dark" type="button">3000$</button>
                            </div>
                         </div>
                       </Col>
                      
                        
                        <Col lg="4" md="6" className="pricing-col">
                          <div class="card">
                            <div class="card-header">
                              <h3>Devise de 6 mois</h3>
                            </div>
                            <div class="card-body"> 
                              <h2>$49 / mo</h2>
                              <p>Unlimited Matches</p>
                              <p>Unlimited Messages</p>
                              <p>Unlimited App Usage</p>
                             <button class="btn btn-lg btn-block btn-dark" type="button">6000$</button>
                           </div>
                         </div>
                      </Col>
                        
                      <Col lg="4" className="pricing-col">
                            <div class="card">
                              <div class="card-header">
                                <h3>Devise de 12 mois</h3>
                              </div>
                               <div class="card-body">
                                <h2>$99 / mo</h2>
                                 <p>Pirority Listing</p>
                                 <p>Unlimited Matches</p>
                                 <p>Unlimited Messages</p>
                                 <button class="btn btn-lg btn-block btn-dark" type="button">10000$</button>
                              </div>
                         </div>
                      </Col>
                  </Row>
                </Container>    
            </section>
            {/* Cta section */}
            <section className="cta">
              <Container>
                <Row>
                <h3 className="heading-text">Trouve toi la bonne ??cole selon ton budget.</h3>
                <Col lg="12" md="12">
                <Carousel  className="school_carousel">
                    <Carousel.Item className="school_carousel_Item">
                      <img
                        className="school_carousel_image"
                        src="images/CELPS.jpg"
                        alt="Celps"
                      />
                      <Carousel.Caption className="school_carousel_Caption">
                        <h3>Celps</h3>
                        <p>Une Ecole de l'angue situee ?? Alajo.</p>
                      </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item className="school_carousel_Item">
                      <img
                         className="school_carousel_image"
                        src="images/Hope_Life_logo.jpg"
                        alt="HopeLife"
                      />

                      <Carousel.Caption className="school_carousel_Caption">
                        <h3>HopeLife</h3>
                        <p>une Ecole de langue situee a kotobabi.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="school_carousel_Item">
                      <img
                        className="school_carousel_image"
                        src="images/durra-logo-Front-cms.png"
                        alt="Durra"
                      />

                      <Carousel.Caption className="school_carousel_Caption">
                        <h3>Durra</h3>
                        <p>une Ecole de langue situee a Kotobabi.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
              </Col>
              </Row>
            </Container>
            </section>
                 
        </>
        )
    }
}
// style={{backgroundImage : "url(/images/cover.jpg)"}}
// interval={1000}