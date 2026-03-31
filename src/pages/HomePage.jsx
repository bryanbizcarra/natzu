import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CustomerStories from '../components/CustomerStories';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <CustomerStories />
            <Contact />
        </main>
    );
};

export default HomePage;
