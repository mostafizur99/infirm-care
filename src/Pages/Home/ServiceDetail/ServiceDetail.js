import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const selectedService = services.find(service => service.id == serviceId);
    console.log(selectedService);

    // const { title, subTitle, thumbImg, srtDesc } = selectedService;

    const Bgurl = "https://i.ibb.co/3cLKhHr/banner-img2.png";
    const sideImg = "https://i.ibb.co/3mcLZhj/footer-6.jpg";
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="ps-2 py-2 text-white text-start" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Bgurl})` }}>
                        <h5>Home  &gt; Services &gt; {selectedService?.title}</h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={8}>
                    <div className="" >
                        <div className="section-header py-5">
                            <h2>{selectedService?.title}</h2>
                            <p>{selectedService?.subTitle}</p>
                            <div>
                                <img className="img-fluid" src={selectedService?.thumbImg} alt="" />
                            </div>
                            <h4 className="py-3">We are here to help when you need us</h4>
                            <p className="lh-lg">{selectedService?.srtDesc}</p>

                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={4} className="details-sidebar">
                    <div className="details-sidebar-wrap px-5 py-5" >
                        <div className="sidebar-list">
                            <h3>Hospital Services</h3>
                            <ListGroup variant="flush" className=" bg-white mt-4">
                                <Link to="/service/1" className='sidebar-list-item'>Children Care</Link>
                                <Link to="/service/2" className='sidebar-list-item'>Diabetic Point</Link>
                                <Link to="/service/3" className='sidebar-list-item'>Dental Care</Link>
                                <Link to="/service/4" className='sidebar-list-item'>Emergency Care</Link>
                                <Link to="/service/5" className='sidebar-list-item'>Diagnostic Point</Link>
                                <Link to="/service/6" className='sidebar-list-item'>Outpatient Care</Link>
                            </ListGroup>
                        </div>

                        <div className="sidebar-contact text-white" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${sideImg})` }}>
                            <h3 className="py-2 px-2 fw-bold">Have Any Qusetion ?</h3>

                            <p>Our client care managemants are open 24/7 to ansder your question</p>

                            <Link to="/login" className='banner-btn'>Contact Us</Link>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetail;