import React from 'react';
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneVolume, } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="Footer text-start text-white py-4">
            <Container>
                <Row>
                    <Col md={3} className="my-4">
                        <h4>About</h4>
                        <p className="footer-item">We Infirm Care, the dedicated environment to provide healthcare service to the people, specially for those who wants the hand who ensure the responsibility of best efforts.</p>
                    </Col>
                    <Col md={3} className="my-4">
                        <h4 className="ms-3">Quic Links</h4>
                        <Nav defaultActiveKey="/home" className="flex-column ">
                            <NavLink className="fs-5 mx-3  text-decoration-none footer-item" to="/home">Home</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none footer-item" to="/service-detail">Details</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none footer-item" to="/login">Login</NavLink>
                            <NavLink className="fs-5 mx-3 text-decoration-none footer-item" to="/sign-up">Sign Up</NavLink>

                        </Nav>
                    </Col>
                    <Col md={3} className="my-4">
                        <h4 className="ms-3">Contact Us</h4>
                        <ListGroup className="text-white">
                            <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faMapMarkerAlt} /> <span>123 Down Street, New York, United State</span></ListGroup.Item>
                            <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faPhoneVolume} /> <span>+123-456-78</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faEnvelope} /> <span>admin@infirm.com</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} className="my-4">
                        <h4>Follow Us</h4>
                        <div className="footer-gallery">
                            <div className="footer-image">
                                <img src="https://i.ibb.co/4pqBhJV/footer-1.jpg" alt="" />
                            </div>
                            <div className="footer-image">
                                <img src="https://i.ibb.co/1RtMFgN/footer-2.jpg" alt="" />
                            </div>
                            <div className="footer-image">
                                <img src="https://i.ibb.co/pZjhC31/footer-3.jpg" alt="" />
                            </div>
                            <div className="footer-image">
                                <img src="https://i.ibb.co/0VBYyV2/footer-4.jpg" alt="" />
                            </div>
                            <div className="footer-image">
                                <img src="https://i.ibb.co/3SchmFG/footer-5.jpg" alt="" />
                            </div>
                            <div className="footer-image">
                                <img src="https://i.ibb.co/3mcLZhj/footer-6.jpg" alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Footer;