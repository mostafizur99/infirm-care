import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Appointment.css'

const Appointment = () => {
    const { users } = useAuth();

    const handleAppointment = (e) => {
        e.preventDefault();
        console.log('sent')
    }

    return (
        <div className="sign-up">
            <Container>
                <Row>
                    <Col md={12} lg={6} >
                        <div className="login-box">
                            <div className="login-wrap">
                                <h3 className="login-header mb-5">Get Appointment</h3>
                                <form onSubmit={handleAppointment}>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Name" value={users.displayName} required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required value={users.email} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="exampleInputPhone1" aria-describedby="phoneHelp" placeholder="Phone" required />
                                    </div>
                                    <div className="row mb-3 text-success"><span></span></div>

                                    <button type="submit" className="btn btn-login mb-4">Send</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="d-flex align-items-center">
                        <div className="">

                            <div className="section-header mt-5">
                                <h4>Work Shedule</h4>
                                <h2 className="px-5">Get In Touch In The Mean Time.</h2>
                                <p>Contact with us , take appointment . We will contact you at the right time</p>
                            </div>
                            <div className="appointment-list">
                                <ListGroup>
                                    <ListGroup.Item></ListGroup.Item>
                                    <ListGroup.Item><span className="fw-bold">Wednesday - Thursday: </span> 09:00am - 05:00pm</ListGroup.Item>
                                    <ListGroup.Item><span className="fw-bold">Friday - Saturday: </span> 01:00am - 05:00pm</ListGroup.Item>
                                    <ListGroup.Item><span className="fw-bold">Sunday - Monday: </span> 11:00am - 02:00pm</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appointment;