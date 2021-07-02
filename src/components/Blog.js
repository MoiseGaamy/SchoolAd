import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Container, Col } from 'react-bootstrap';
export default class Blog extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={3} md={{ offset: 3 }} className="pad_top">
                        <div>
                            <ul className="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </div>
             
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                           <div>
                                <h1>Titre du texte</h1>
                                <p>
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
                                <ul class="list-inline text-right">
                                    <li class="list-inline-item"><a href="#">Commenter</a></li>
                                    <li class="list-inline-item"><a href="#">Editer</a></li>
                                    <li class="list-inline-item"><a href="#">Lire la suite...</a></li>
                                </ul>
                          </div>
                           <div>
                                <h1>Titre du texte</h1>
                                <p>
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
                                <ul class="list-inline text-right">
                                    <li class="list-inline-item"><a href="#">Commenter</a></li>
                                    <li class="list-inline-item"><a href="#">Editer</a></li>
                                    <li class="list-inline-item"><a href="#">Lire la suite...</a></li>
                                </ul>
                          </div>
                           <div>
                                <h1>Titre du texte</h1>
                                <p>
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
                                <ul class="list-inline text-right">
                                    <li class="list-inline-item"><a href="#">Commenter</a></li>
                                    <li class="list-inline-item"><a href="#">Editer</a></li>
                                    <li class="list-inline-item"><a href="#">Lire la suite...</a></li>
                                </ul>
                             <div className="pad_top">
                              <ul class="pagination justify-content-end">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                           </div>
                          </div>
                        </Col>
                        <Col md={3}>
                        <form id="search" action="">
                        <div class="input-group-prepend">
                        <span class="input-group-text">?</span>
                        <input type="text" class="form-control" placeholder="recherche" />
                        <span class="input-group-append">
                          <button type="submit" class="btn btn-success">Go</button>
                        </span>
                  </div>
                </form>
                        <hr />
                    <div class="card bg-dark-blue">
                        <div class="card-header">
                            Categories
                        </div>
                        <nav class="nav flex-column">
                            <a class="nav-link active" href="#">Avantages d'etuder au ghana<span class="badge-pill badge-secondary">10</span></a>
                            <a class="nav-link" href="#">Avant le depart<span class="badge-pill badge-secondary">10</span></a>
                            <a class="nav-link" href="#">Le Devis<span class="badge-pill badge-secondary">10</span></a>
                        </nav>
                    </div>
                    <hr />
                        <div class="card bg-dark-blue">
                        <div class="card-header">
                            Dernier Post
                        </div>
                        <nav class="nav flex-column">
                            <a class="nav-link active" href="#">L'arnaque<span class="badge-pill badge-secondary">10</span></a>
                            <a class="nav-link" href="#">Logement<span class="badge-pill badge-secondary">10</span></a>
                            <a class="nav-link" href="#">Cout de Vie<span class="badge-pill badge-secondary">10</span></a>
                            <a class="nav-link" href="#">Transport<span class="badge-pill badge-secondary">10</span></a>
                        </nav>
                   </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
