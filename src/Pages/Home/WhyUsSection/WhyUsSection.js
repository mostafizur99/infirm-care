import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUsers, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import './WhyUsSection.css'

const WhyUsSection = () => {

    const whyUsThumb = "https://i.ibb.co/db1nzmN/caring-senior.jpg";
    return (
        <div className="why-us-section">
            < Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="why-us-image py-4">
                            <img className="img-fluid" src={whyUsThumb} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="pt-3">
                            <div className="section-header">
                                <h4>Why Choose Us</h4>
                                <h2>We Take Care Yours</h2>
                                <p>We are undoubtly the best cervice with proper care and stringly commited to provide the best hospital service with a significant professional meaning</p>
                            </div>
                            <div className="why-us-content p-3 shadow d-flex align-items-center justify-content-between my-4">
                                <div className="why-us-text px-2">
                                    <h3>Exort Team</h3>
                                    <p>We ensure experienced and tepert team members</p>
                                </div>
                                <FontAwesomeIcon className="why-us-icon" icon={faUsers} />
                            </div>
                            <div className="why-us-content p-3 shadow d-flex align-items-center justify-content-between my-4">
                                <FontAwesomeIcon className="why-us-icon" icon={faFileInvoiceDollar} />
                                <div className="why-us-text px-2">
                                    <h3>Affortable Price</h3>
                                    <p>We ensure affortable price with best quality</p>
                                </div>

                            </div>
                            <div className="why-us-content p-3 shadow d-flex align-items-center justify-content-between my-4">
                                <div className="why-us-text px-2">
                                    <h3>Best Service</h3>
                                    <p>We ensure best service for every single user. </p>
                                </div>
                                <FontAwesomeIcon className="why-us-icon" icon={faThumbsUp} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyUsSection;