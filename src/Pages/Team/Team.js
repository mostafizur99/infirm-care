import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Team.css'

const Team = () => {
    const Bgurl = "https://i.ibb.co/3cLKhHr/banner-img2.png";

    const team1 = "https://neurology.nauthemes.com/wp-content/uploads/bfi_thumb/doc-3-p9rksem8qlm4tsz25m6w1aeuccmsdpz001vk4savp8.jpg";
    const team2 = "https://neurology.nauthemes.com/wp-content/uploads/bfi_thumb/doc-7-p9rkshfrb3pzsmuyp5erqrp84i8w0ta70fu0km6p6k.jpg";
    const team3 = "https://neurology.nauthemes.com/wp-content/uploads/bfi_thumb/doc-5-p9rksghx49oph0wbun0569xrj4dit46gob6j3c83cs.jpg";
    const team4 = "https://neurology.nauthemes.com/wp-content/uploads/bfi_thumb/doc-1-p9rksdoejrkui70fb3s9gsndqyrf60v9nx82nic9vg.jpg";
    const team5 = "https://neurology.nauthemes.com/wp-content/uploads/bfi_thumb/doc-10-p9rl55bhdr227igrr4gtu2ns8dtwq0k0f48ibtercs.jpg";
    const team6 = "https://neurology.nauthemes.com/wp-content/uploads/bfi_thumb/doc-9-p9rksjbforskfus8e680vr85b9zmg7hnop4zj63wu4.jpg";
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
                            <div className="service-box my-5">
                                <div className="service-box-image">
                                    <div className="box-image-wrap">
                                        <img className="img-fluid" src={team1} alt="" />
                                    </div>
                                </div>
                                <div className="service-box-content mt-2 py-2">

                                    <p>SR. PSYCHOLOGIST</p>
                                    <h3>Alexa Brown</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="service-box my-5">
                                <div className="service-box-image">
                                    <div className="box-image-wrap">
                                        <img className="img-fluid" src={team2} alt="" />
                                    </div>
                                </div>
                                <div className="service-box-content mt-2 py-2">

                                    <p>CLINICAL DOCTOR</p>
                                    <h3>Roy Collins</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="service-box my-5">
                                <div className="service-box-image">
                                    <div className="box-image-wrap">
                                        <img className="img-fluid" src={team3} alt="" />
                                    </div>
                                </div>
                                <div className="service-box-content mt-2 py-2">

                                    <p>SR. PSYCHOLOGIST</p>
                                    <h3>Saro Moris</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="service-box my-5">
                                <div className="service-box-image">
                                    <div className="box-image-wrap">
                                        <img className="img-fluid" src={team4} alt="" />
                                    </div>
                                </div>
                                <div className="service-box-content mt-2 py-2">

                                    <p>CLINICAL DOCTOR</p>
                                    <h3>Emma Scott</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="service-box my-5">
                                <div className="service-box-image">
                                    <div className="box-image-wrap">
                                        <img className="img-fluid" src={team5} alt="" />
                                    </div>
                                </div>
                                <div className="service-box-content mt-2 py-2">

                                    <p>SR. PSYCHOLOGIST</p>
                                    <h3>Charlie James</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="service-box my-5">
                                <div className="service-box-image">
                                    <div className="box-image-wrap">
                                        <img className="img-fluid" src={team6} alt="" />
                                    </div>
                                </div>
                                <div className="service-box-content mt-2 py-2">

                                    <p>SR. PSYCHOLOGIST</p>
                                    <h3>Mary Joe</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Team;