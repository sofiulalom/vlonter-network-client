import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../../pages/Sheards/header/Headers';


const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;