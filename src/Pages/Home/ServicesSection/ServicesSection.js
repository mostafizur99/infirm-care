import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useService from '../../../hooks/useService';
import ServiceBox from '../ServiceBox/ServiceBox';
import './ServicesSection.css';

const ServicesSection = () => {
    /* const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []) */

    const [services] = useService();

    return (
        <div className="service-section">
            < Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="section-header">
                            <h4>Our Services</h4>
                            <h2>We Provide Best Hospital Services</h2>
                            <p>We are stringly commited to provide the best hospital service with a significant professional meaning</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="section-header-right" >
                            <Link to="/sign-up" className='service-header-btn'>Get Appointment</Link>
                        </div>
                    </Col>
                </Row>
                <Row >
                    {
                        services.map(service => <ServiceBox key={service.id} service={service}></ServiceBox>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default ServicesSection;