import React from 'react';

import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div className='w-[98%] mx-auto'>
            <Header></Header>
            <div>{navigation.state === 'loading' && <div className='mx-auto text-center mt-6'>
                <div
                    className="mx-auto text-center inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span
                    >
                </div>
            </div>}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;