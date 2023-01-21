import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Headers = () => {
 const {user,logOut}=useContext(AuthContext);
 const handleUserLogOut=()=>{
    logOut()
    .then(()=>{
    })
    .catch(e => console.error(e))
 }

    const manuItems=<>
        <li><Link to='/'>Home</Link></li>
        {user?.uid?

        <>
        
        <button onClick={handleUserLogOut} className='btn btn-warning p-2'>LogOut</button>
        
        </>
        :
        <>

        <li className='btn-ghost'> <Link to='/signUp'>Sign-Up</Link></li>
        <li className='btn-ghost'><Link to='/signin'>sign-In</Link></li>
        </>
         } 
        </>
    return (
        <div className="navbar bg-gray-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
       {manuItems}
       </ul>   
    </div>
    <a href='/' className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
         {manuItems}
    </ul>
  </div>
  <div className="navbar-end">
   
    
    <a href='/' className="btn">Get started</a>
  </div>
</div>
    );
};

export default Headers;