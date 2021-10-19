import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser, faDungeon, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './CounterSection.css'

const CounterSection = () => {
    return (
        <div className="counter py-5" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://i.ibb.co/3cLKhHr/banner-img2.png")` }}>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <h2><FontAwesomeIcon className="counter-icon me-2" icon={faHospitalUser} /></h2>
                            <div className="counter-text">
                                <h4>60+</h4>
                                <h5>Doctors</h5>
                                <p>Most Experienced & Qualified</p>

                            </div>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <h2><FontAwesomeIcon className="counter-icon me-2" icon={faDungeon} /></h2>
                            <div className="counter-text">
                                <h4>20+</h4>
                                <h5>Medical Branches</h5>
                                <p>Abailable at your service</p>

                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <h2><FontAwesomeIcon className="counter-icon me-2" icon={faCalendarCheck} /></h2>
                            <div className="counter-text">
                                <h4>3015+</h4>
                                <h5>Successfull Stories</h5>
                                <p>Top level professional service</p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CounterSection;