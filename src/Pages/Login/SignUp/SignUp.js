import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import './SignUp.css'

const SignUp = () => {
    const {
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handlePasswordConfirm,
        handleRegistration,
        error
    } = useAuth();

    // signup left side image link 
    const signupImg = "https://i.ibb.co/pZjhC31/footer-3.jpg";
    return (
        <div className="sign-up">
            <Container>
                <Row>
                    <Col md={12} lg={4} className="d-flex align-items-center">
                        <div className="signup-side" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${signupImg})` }} >
                            <h3 className="fw-bold signup-side-text">We are here to help when you need us</h3>
                        </div>

                    </Col>
                    <Col md={12} lg={8} >
                        <div className="login-box">
                            <div className="login-wrap">
                                <h3 className="login-header mb-5">Sign Up</h3>
                                <form onSubmit={handleRegistration}>
                                    <div className="mb-3">
                                        <input onBlur={handleNameChange} type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                                    </div>
                                    <div className="mb-3">
                                        <input onBlur={handlePasswordConfirm} type="password" className="form-control" id="password-confirm" placeholder="Confirm Password" required />
                                    </div>
                                    <div className="row mb-3 text-danger">{error}</div>

                                    <button type="submit" className="btn btn-login mb-4">Sign Up</button>
                                </form>

                                <Link to="/login" className='login-link'>Already have an account ?</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;