import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../pages/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    let location =useLocation();
    if(loading){
        return <div className="radial-progress" style={{"--value":70}}>70%</div>
    }
    if(user){
       return children;
        
    }
   return <Navigate to='/signIn' state={{form: location}} replace></Navigate>
};

export default PrivetRoute;