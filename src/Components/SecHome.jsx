import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const SecHome = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default SecHome;