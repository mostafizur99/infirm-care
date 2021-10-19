import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                {/* 1st slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/YdCkZ7X/banner2.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text shadow">
                        <h3>Committed to Trusted Health Care</h3>
                        <p>we Are Always By Your Side with To Care</p>
                        <Link to="/sign-up" className='banner-btn'>Appointment</Link>
                    </div>
                </Carousel.Item>

                {/* 2nd slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/MRqZWbG/banner1.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text  shadow">
                        <h3>Professional Health Services Level</h3>
                        <p>Providing the Best Updated Care To All</p>
                        <Link to="/sign-up" className='banner-btn'>Appointment</Link>
                    </div>
                </Carousel.Item>

                {/* 3rd slider  */}
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/jf0J3mn/slider-3.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-text  shadow">
                        <h3>Experienced Team With Feedback</h3>
                        <p>We are Enriched With Successfull stories</p>
                        <Link to="/sign-up" className='banner-btn'>Appointment</Link>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;