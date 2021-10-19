import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ServiceBox.css'

const ServiceBox = (props) => {
    const { title, subTitle, thumbImg, id } = props.service;
    const history = useHistory()
    const handleServiceDetails = (serviceId) => {
        history.push(`/service/${serviceId}`);
    }

    return (

        <Col xs={6} md={4} lg={4}>
            <div className="service-box my-5">
                <div className="service-box-image">
                    <div className="box-image-wrap">
                        <img className="img-fluid" src={thumbImg} alt="" />
                    </div>
                </div>
                <div className="service-box-content mt-2 py-2">
                    <button onClick={() => handleServiceDetails(id)} className='service-details-btn'>See More..</button>
                    <p>{subTitle}</p>
                    <h3>{title}</h3>
                </div>
            </div>
        </Col>


    );
};

export default ServiceBox;