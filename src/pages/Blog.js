import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Row, Container, Col } from 'react-bootstrap';
import NavBar from './NavBar';
export default class Blog extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <Row>
                        <Col md="2" className="pad_top">
                        <div>
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link"to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                                </li>
                            </ul>
                        </div>
             
                        </Col>
                    </Row>
                    <Row>
                        <Col md="9">
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
                                <ul className="list-inline text-right">
                                    <li className="list-inline-item"><Link to="#">Commenter</Link></li>
                                    <li className="list-inline-item"><Link to="#">Editer</Link></li>
                                    <li className="list-inline-item"><Link to="#">Lire la suite...</Link></li>
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
                                <ul className="list-inline text-right">
                                    <li className="list-inline-item"><Link to="#">Commenter</Link></li>
                                    <li className="list-inline-item"><Link to="#">Editer</Link></li>
                                    <li className="list-inline-item"><Link to="#">Lire la suite...</Link></li>
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
                                <ul className="list-inline text-right">
                                    <li className="list-inline-item"><Link to="#">Commenter</Link></li>
                                    <li className="list-inline-item"><Link to="#">Editer</Link></li>
                                    <li className="list-inline-item"><Link to="#">Lire la suite...</Link></li>
                                </ul>
                             <div className="pad_top">
                              <ul className="pagination justify-content-end">
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                                </li>
                            </ul>
                           </div>
                          </div>
                        </Col>
                        <Col md="3">
                        <form id="search" action="">
                        <div className="input-group-prepend">
                        <span className="input-group-text">?</span>
                        <input type="text" className="form-control" placeholder="recherche" />
                        <span className="input-group-append">
                          <button type="submit" className="btn btn-success">Go</button>
                        </span>
                  </div>
                </form>
                        <hr />
                    <div className="card bg-dark-blue">
                        <div className="card-header">
                            Categories
                        </div>
                        <nav className="nav flex-column">
                            <Link className="nav-link active" to="#">Avantages d'etuder au ghana<span className="badge-pill badge-secondary">10</span></Link>
                            <Link className="nav-link" to="#">Avant le depart<span className="badge-pill badge-secondary">10</span></Link>
                            <Link className="nav-link" to="#">Le Devis<span className="badge-pill badge-secondary">10</span></Link>
                        </nav>
                    </div>
                    <hr />
                        <div className="card bg-dark-blue">
                        <div className="card-header">
                            Dernier Post
                        </div>
                        <nav className="nav flex-column">
                            <Link className="nav-link active" to="#">L'arnaque<span className="badge-pill badge-secondary">10</span></Link>
                            <Link className="nav-link" to="#">Logement<span className="badge-pill badge-secondary">10</span></Link>
                            <Link className="nav-link" to="#">Cout de Vie<span className="badge-pill badge-secondary">10</span></Link>
                            <Link className="nav-link" to="#">Transport<span className="badge-pill badge-secondary">10</span></Link>
                        </nav>
                   </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
