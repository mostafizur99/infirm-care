import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
    const {
        signInUsingGoogle,
        signInUsingGitHubFacebook,
        handleEmailChange,
        handlePasswordChange,
        handleLogIn,
        handleResetPassword
    } = useAuth();

    const [error, setError] = useState('');

    // redirect to the page before login 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Google login-btn-handler 
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Facebook login-btn-handler 
    const handleFacebookLogin = () => {
        signInUsingGitHubFacebook()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // email-password login-btn-handler 
    const loginButton = (e) => {
        handleLogIn(e)
            .then(result => {
                history.push(redirect_uri);
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        < div className="login">
            <Container>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="my-4 my-2">
                            <Row>
                                <Col xs={4}>
                                    <div className="py-3 my-3">
                                        <img src="https://i.ibb.co/wNN9cQZ/map-image.png" alt="" />
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="text-start py-3 my-3">
                                        <p className="text-uppercase fw-bold primary-color">Location</p>
                                        <p className="text-color">USA, New York - 1060 Str. First Avenue 1</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>
                                    <div className="py-3 my-3">
                                        <img src="https://i.ibb.co/s3ntjWn/support.png" alt="" />
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="text-start py-3 my-3">
                                        <p className="text-uppercase fw-bold primary-color">Call Center</p>
                                        <p className="text-color">24/7 Support,
                                            1800 567 8990 - 1800 345 454</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>
                                    <div className="py-3 my-3">
                                        <img src="https://i.ibb.co/KWCStBc/message.png" alt="" />
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <div className="text-start py-3 my-3">
                                        <p className="text-uppercase fw-bold primary-color">Email Us</p>
                                        <p className="text-color">admin1@infirm.com
                                            admin2@infirm.com</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* Login form column */}
                    <Col md={12} lg={8} >
                        <div className="login-box">
                            <div className="login-wrap">
                                <h3 className="login-header mb-5">Login</h3>
                                <form onSubmit={loginButton}>
                                    <div className="mb-3">
                                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                                    </div>
                                    <div className="mb-2">
                                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                                    </div>

                                    <div className="text-end mb-3">
                                        <button onClick={handleResetPassword} className=" btn-forgot">Forgot password ?</button>
                                    </div>

                                    <div className="row mb-3 text-danger">{error}</div>

                                    <button type="submit" className="btn btn-login">Log In</button>
                                </form>


                                <p className="text-white-50 mt-4">Or Login Using</p>

                                <button className="login-brand-btn brand-google me-1" onClick={handleGoogleLogin}><FontAwesomeIcon className="" icon={faGooglePlus} /></button>

                                <button className="login-brand-btn brand-facebook" onClick={handleFacebookLogin}><FontAwesomeIcon className="" icon={faFacebook} /></button>

                                <p className="text-white-50 mt-5 pt-4">Or Signup With</p>
                                <Link to="/sign-up" className='login-link'>SIGN UP</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;