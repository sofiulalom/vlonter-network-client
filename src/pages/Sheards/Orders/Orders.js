import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
  const {user}=useContext(AuthContext);
  const [orders, setOrders]=useState([]);

    
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email])
    const handleDelete=id=> {
      const proced=window.confirm('Are you sure,you want to cancel this oreder ')
      if(proced){
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
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
    return (
        <div className="overflow-x-auto w-full">
          <h1 className='text-5xl'>you are ordes: {orders.length}</h1>
  <table className="table w-full">
   
    <thead>
      <tr>
      <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className='ml-5'>image</th>
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
        ></OrderRow>)
      }
    </tbody>
    
  </table>
</div>
    );
};

export default Orders;