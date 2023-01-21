import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import {  FaGofore } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const SignIn = () => {

    const navigate=useNavigate()
    const {UserLOgin, googleProvider}=useContext(AuthContext);
    const handleGoogleButton=()=>{
        const providerGoogle=new GoogleAuthProvider();
           googleProvider(providerGoogle)
        .then(()=> {})
        .then(e => console.error(e))


    }
    const [error, setError]=useState()
    const handleLoginSubmit=event=>{
       event.preventDefault();
       const form =event.target;
       const email=form.email.value;
       const password=form.password.value;
       UserLOgin(email, password)
       .then(result=>{
         const user =result.user;
          console.log(user);  
          navigate('/')
          form.reset()
          
       })
       .catch(e => {
          console.error(e)
          setError(e.message)
       })
    }
    
    return (
        <div  className='bg-gray-400 rounded h-90 border-green-600 w-60 m-auto mt-10'>
        <form onSubmit={handleLoginSubmit} className='p-5'>
            <h1 className='text-3xl text-white'>Sign In</h1>
           
              <br />
            <input name='email' type="email" placeholder="Your email" required className="input input-bordered  mb-2 w-full " />
            <br />
            <input name='password' type="password" placeholder="Your password" className="input input-bordered   mb-2 w-full " />
            <br />
            <input type="submit" value="Sign In" className='input  input-bordered bg-green-500 w-full' />
            <br />
           
        </form>
        <button onClick={handleGoogleButton} className='border border-5xl border-blue-700  rounded-3xl p-2 mb-2 bg-white'><FaGofore className='inline text-3xl text-red-600'/> Gooogle Signin </button>
         <div>
            <p className='text-red-600'>{error} </p>
         </div>
        </div>
    );
};

export default SignIn;