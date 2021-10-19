import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { users, logOut } = useAuth();

    return (
        <>
            <div className="top-bar">
                <p className="m-0">COVID-19 Special Care Unit... <Link to="/login" className='text-link'>Learn More</Link></p>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
                <Container>
                    <Navbar.Brand className="fw-bold fs-2" href="/"><FontAwesomeIcon className="logo-icon me-2" icon={faUserMd} /><span className="primary-color me-1">Infirm</span><span className="secondary-color">Care</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="fw-bold ">
                            <Nav.Link className="primary-color" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="primary-color" as={Link} to="/team">Team</Nav.Link>
                            <Nav.Link className="primary-color" as={Link} to="/appointment">Appointment</Nav.Link>


                            {
                                !users.email ?
                                    <>
                                        <Nav.Link className="primary-color" as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link className="primary-color" as={Link} to="/sign-up">Sign Up</Nav.Link>
                                    </> :
                                    <>
                                        <Navbar.Text className="fst-italic fw-bold">
                                            Signed in as: <a className="secondary-color" href="/login">{users.displayName}</a>
                                        </Navbar.Text>
                                        <span><button onClick={logOut} className="nav-btn  ms-4">Sign out</button></span>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;