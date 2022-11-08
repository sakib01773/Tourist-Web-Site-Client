import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../../pages/shared/Footer/Footers';
import Header from '../../pages/shared/Header/Header';
const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>

            <Footers></Footers>
        </div>
    );
};

export default Main;