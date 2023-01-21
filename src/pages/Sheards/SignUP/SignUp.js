import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGofore } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const SignUp = () => {
    const [error , setError]=useState(true)
    const {createSignUp, googleProvider}=useContext(AuthContext);
    const handleGoogleSignUp=()=>{
      const GoogleProvider=new GoogleAuthProvider()
      googleProvider(GoogleProvider)
      .then(()=> {})
      .catch(e => console.error(e))
    }
    const handleSignUp=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email,password);
        createSignUp(email, password)
        .then(result=> {
            const user =result.user;
            console.log(user)
            form.reset()
        })
        .catch(err => {
            
            console.error(err)
            setError(err.message)
        
        })

    }
    return (
        <div  className='bg-gray-400 rounded border-white h-90 w-60 m-auto mt-10'>
        <form onSubmit={handleSignUp} className='p-5'>
            <h1 className='text-3xl text-white'>Sign Up</h1>
            <input name='name' type="text" placeholder="Your name" className="input input-bordered my-2  w-full " />
              <br />
            <input name='email' type="email" placeholder="Your email" required className="input input-bordered  mb-2 w-full " />
            <br />
            <input name='password' type="password" placeholder="Your password" className="input input-bordered   mb-2 w-full " />
            <br />
            <input type="submit" value="Sign Up" className='input  input-bordered bg-green-500 w-full' />
        </form>
        <button onClick={handleGoogleSignUp} className='border border-5xl border-blue-700  rounded-3xl p-2 mb-2 bg-white'><FaGofore className='inline text-3xl text-red-600'/> Gooogle Signin </button>
         <div>
            <p className='text-red-600'>{error} </p>
         </div>
        </div>
    );
};

export default SignUp; 