import React from 'react';
import Banner from '../Banner/Banner';
import CounterSection from '../CounterSection/CounterSection';
import ServicesSection from '../ServicesSection/ServicesSection';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <CounterSection></CounterSection>

        </div>
    );
};

export default Home;