import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from './Services/Services';


const Homepage = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Homepage;