import React, { useContext } from 'react';
import Sectionfirst from './Home/Sectionfirst';
import SectionSecond from './Home/SectionSecond';
import Section from './Home/Section';
import { AuthContext } from './AuthProvider';
import { ref } from './Header';

const Home = () => {
    const { loader } = useContext(AuthContext)
    return (
        <div ref={ref}>
            {
                loader && <div className='mx-auto text-center mt-6'>
                    <div
                        className="mx-auto text-center inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >
                    </div>
                </div>
            }
            {!loader && <div><SectionSecond></SectionSecond>
                <Section></Section>
                <Sectionfirst></Sectionfirst></div>}
        </div>
    );
};

export default Home;