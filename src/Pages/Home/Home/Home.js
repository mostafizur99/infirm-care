import React from 'react';
import Banner from '../Banner/Banner';
import CounterSection from '../CounterSection/CounterSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import WhyUsSection from '../WhyUsSection/WhyUsSection';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <WhyUsSection></WhyUsSection>
            <CounterSection></CounterSection>

        </div>
    );
};

export default Home;