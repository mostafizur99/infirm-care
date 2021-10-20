import React from 'react';
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faMapMarkerAlt, faEnvelope, faPhoneVolume, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const bgMapUrl = "https://i.ibb.co/YbKS2V9/mapWorld.png";

    return (
        <div className="Footer text-start text-white pt-4" style={{ backgroundImage: ` linear-gradient( #223645cc, #223645c4 ), url(${bgMapUrl})` }}>
            <Container>
                <Row>
                    <Col md={3} className="my-4">
                        <h4 className="footer-logo mb-4"><a className="fw-bold" href="/"><FontAwesomeIcon className="footer-logo-icon me-2" icon={faUserMd} /><span className="secondary-color me-1">Infirm</span><span className="secondary-color">Care</span></a></h4>
                        <p className="footer-item">We have dedicated environment to provide healthcare service </p>
                    </Col>
                    <Col md={3} className="my-4">
                        <h4 className="ms-3 mb-4">Useful Links</h4>
                        <Nav defaultActiveKey="/home" className="flex-column ">
                            <NavLink className="fs-6 mx-3 mb-3  text-decoration-none footer-item" to="/home"><FontAwesomeIcon className="secondary-color me-2" icon={faLongArrowAltRight} />Home</NavLink>
                            <NavLink className="fs-6 mx-3 mb-3 text-decoration-none footer-item" to="/appointment"><FontAwesomeIcon className="secondary-color me-2" icon={faLongArrowAltRight} />Appointmrnt</NavLink>
                            <NavLink className="fs-6 mx-3 mb-3 text-decoration-none footer-item" to="/login"><FontAwesomeIcon className="secondary-color me-2" icon={faLongArrowAltRight} />Login</NavLink>
                            <NavLink className="fs-6 mx-3 mb-3 text-decoration-none footer-item" to="/sign-up"><FontAwesomeIcon className="secondary-color me-2" icon={faLongArrowAltRight} />Sign Up</NavLink>

                        </Nav>
                    </Col>
                    <Col md={3} className="my-4">
                        <h4 className="ms-3 mb-4">Contact Us</h4>
                        <ListGroup className="text-white">
                            <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faMapMarkerAlt} /> <span>123 Down Street, New York, United State</span></ListGroup.Item>
                            <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faPhoneVolume} /> <span>+123-456-78</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="footer-item"><FontAwesomeIcon className="secondary-color" icon={faEnvelope} /> <span>admin@infirm.com</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} className="my-4">
                        <h4 className="mb-4">Follow Us</h4>
                        <div className="footer-gallery">
                            <div className="footer-image">
                                <div className="footer-image-wrap">
                                    <img src="https://i.ibb.co/4pqBhJV/footer-1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="footer-image">
                                <div className="footer-image-wrap">
                                    <img src="https://i.ibb.co/1RtMFgN/footer-2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="footer-image">
                                <div className="footer-image-wrap">
                                    <img src="https://i.ibb.co/pZjhC31/footer-3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="footer-image">
                                <div className="footer-image-wrap">
                                    <img src="https://i.ibb.co/0VBYyV2/footer-4.jpg" alt="" />
                                </div>
                            </div>
                            <div className="footer-image">
                                <div className="footer-image-wrap">
                                    <img src="https://i.ibb.co/3SchmFG/footer-5.jpg" alt="" />
                                </div>
                            </div>
                            <div className="footer-image">
                                <div className="footer-image-wrap">
                                    <img src="https://i.ibb.co/3mcLZhj/footer-6.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* copyright section  */}
            <div className="copy-right-section mt-4">
                <Container>
                    <Row className="align-items-center">
                        <Col sm={12} md={6}>
                            <div className="copy-right">
                                <p className="m-0">© All right reserved 2021 <span className="secondary-color">Infirm Care</span>. Health Care Service</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="footer-social">
                                <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faFacebookF} /></a>
                                <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faTwitter} /></a>
                                <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} /></a>
                                <a className="footer-icon-wrap ms-2" href="https://facebook.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="footer-icon" icon={faInstagram} /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Footer;