import React from 'react';
import Sectionfirst from './Home/Sectionfirst';
import SectionSecond from './Home/SectionSecond';
import Section from './Home/Section';

const Home = () => {
    return (
        <div>
           <SectionSecond></SectionSecond>
            <Section></Section>
           <Sectionfirst></Sectionfirst>
        </div>
    );
};

export default Home;