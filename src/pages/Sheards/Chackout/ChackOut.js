import React, { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ChackOut = () => {
    const {_id, title, price} =useLoaderData();
    const {user}=useContext(AuthContext)
    const handlePlaceOrders =event =>{
       event.preventDefault();
       const form =event.target;
       const name=`${form.firstName.value} ${form.lastName.value}`;
       const phone=form.phone.value;
       const email= user?.email || 'unRegiser';
       const message=form.message.value;

       const order={
         service: _id,
         serviceName: title,
         price,
         customr: name,
         email,
         phone,
         message,
         
       };
       if(phone.length > 10){
          alert('your phone nuber 10 carrecter')
       }

       fetch('http://localhost:5000/orders',{
        method: 'POSt',
        headers:{
            "content-type": 'application/json'
        },
        body: JSON.stringify(order)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('plece order successfuly');
            form.reset()
        }
    })
       .catch(er => console.error(er))
    }

    return (
        <div className='mt-5'>
           <form onSubmit={handlePlaceOrders} className='mb-2'>
             <h1 className='text-3xl text-green-600'>You are about to order: {title} </h1>
             <h2 className='text-2xl text-red-600'>
                price: ${price}
             </h2>
             <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2 '>
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full "required />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " required/>
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " required/>
                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly/>
             </div>
             <textarea name='message' className="textarea textarea-primary w-96 mt-2 text-green-600"  placeholder="your comment the textarea"required></textarea>
             <br />
             <input className='btn btn-primary mt-2 w-96' type="submit" value="click me" />
           </form>
           
         
        </div>
    );
};

export default ChackOut;