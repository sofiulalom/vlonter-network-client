import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
  const {user,logOut}=useContext(AuthContext);
  const [orders, setOrders]=useState([]);

    
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
          headers:{
            authorization: `Bearer ${localStorage.getItem('volenter-token')}`
          }
        })
        .then(res => {
           if(res.status === 401 || res.status ===403){
            return logOut()
           }
          return res.json()
        })
        .then(data => { 
        
           setOrders(data)
        })
    }, [user?.email, logOut])
    const handleDelete=id=> {
      const proced=window.confirm('Are you sure,you want to cancel this oreder ')
      if(proced){
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
          headers:{
            authorization: `Bearer ${localStorage.getItem('volenter-token')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount> 0){
            alert('deleted successfully');
            const remaning=orders.filter(ord => ord._id !== id)
            setOrders(remaning)
          }
          
        })
      }
    }

    const handleUpdateStatas= id =>{
        fetch(`http://localhost:5000/orders/${id}`,{
          
          method: 'PATCH',
          headers:{
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('volenter-token')}`
          },
          body:JSON.stringify( {status:'Approve'})

        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
           if(data.modifiedCount > 0){
             const remaning =orders.filter(ord => ord._id !== id);
             const approving=orders.find(ord => ord._id === id);
             approving.status='Approved'
             const newOrders= [approving, ...remaning];
             setOrders(newOrders)
             
           }
        })
    }
    return (
        <div className="overflow-x-auto w-full">
          
  <table className="table w-full">
   
    <thead>
      <tr>
      <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        
        <th>Name</th>
        <th>price</th>
        <th>details</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map(order => <OrderRow
        key={order._id}
        order={order}
        handleDelete={handleDelete}
        handleUpdateStatas={handleUpdateStatas}
        ></OrderRow>)
      }
    </tbody>
    
  </table>
</div>
    );
};

export default Orders;