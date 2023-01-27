import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../pages/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    let location =useLocation();
    if(loading){
        return <h1 className='text-5xl'>Loading....</h1>
    }
    if(user){
       return children;
        
    }
   return <Navigate to='/' state={{form: location}} replace></Navigate>
};

export default PrivetRoute;