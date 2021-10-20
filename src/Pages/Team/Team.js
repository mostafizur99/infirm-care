import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css'

const Team = () => {
    const Bgurl = "https://i.ibb.co/3cLKhHr/banner-img2.png";

    const team1 = "https://i.ibb.co/x2mRpHF/team1.jpg";
    const team2 = "https://i.ibb.co/KVHqc27/team2.jpg";
    const team3 = "https://i.ibb.co/qRcqQKh/team3.jpg";
    const team4 = "https://i.ibb.co/BLy831J/team4.jpg";
    const team5 = "https://i.ibb.co/W2rQ0d5/team5.jpg";
    const team6 = "https://i.ibb.co/LQvn8c9/team6.jpg";
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="ps-2 py-2 text-white text-start" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Bgurl})` }}>
                            <h5>Home  &gt; Team </h5>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="team-section">
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="section-header">
                                <h4>Our Team</h4>
                                <h2>We Have The Most Experience Team</h2>
                                <p>Our team is stringly commited to provide the best hospital service with a significant professional meaning</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4} lg={4}>
                            <div className="team-box my-5">
                                <div className="team-box-image">
                                    <div className="team-image-wrap">
                                        <img className="img-fluid" src={team1} alt="" />
                                    </div>
                                </div>
                                <div className="team-box-content mt-2 py-2">

                                    <p>SR. PSYCHOLOGIST</p>
                                    <h3>Alexa Brown</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="team-box my-5">
                                <div className="team-box-image">
                                    <div className="team-image-wrap">
                                        <img className="img-fluid" src={team2} alt="" />
                                    </div>
                                </div>
                                <div className="team-box-content mt-2 py-2">

                                    <p>CLINICAL DOCTOR</p>
                                    <h3>Roy Collins</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="team-box my-5">
                                <div className="team-box-image">
                                    <div className="team-image-wrap">
                                        <img className="img-fluid" src={team3} alt="" />
                                    </div>
                                </div>
                                <div className="team-box-content mt-2 py-2">

                                    <p>SR. PSYCHOLOGIST</p>
                                    <h3>Saro Moris</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="team-box my-5">
                                <div className="team-box-image">
                                    <div className="team-image-wrap">
                                        <img className="img-fluid" src={team4} alt="" />
                                    </div>
                                </div>
                                <div className="team-box-content mt-2 py-2">

                                    <p>CLINICAL DOCTOR</p>
                                    <h3>Emma Scott</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="team-box my-5">
                                <div className="team-box-image">
                                    <div className="team-image-wrap">
                                        <img className="img-fluid" src={team5} alt="" />
                                    </div>
                                </div>
                                <div className="team-box-content mt-2 py-2">

                                    <p>SR. PSYCHOLOGIST</p>
                                    <h3>Charlie James</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="team-box my-5">
                                <div className="team-box-image">
                                    <div className="team-image-wrap">
                                        <img className="img-fluid" src={team6} alt="" />
                                    </div>
                                </div>
                                <div className="team-box-content mt-2 py-2">

                                    <p>SR. PSYCHOLOGIST</p>
                                    <h3>Mary Joe</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="carrer-section">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={8}>
                            <h2>Start Your Career Here!</h2>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="carrier-btn-wrap">
                                <Link to="/login" className='carrer-btn'>Contact Now</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Team;