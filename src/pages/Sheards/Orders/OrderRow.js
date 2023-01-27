import React, { useEffect, useState } from 'react';

const OrderRow = ({order,handleDelete}) => {
   
    const {_id,serviceName,customr,phone,price, service }=order;
    const [orderService, setOrderService]=useState({})
    useEffect(()=>{
       fetch(`http://localhost:5000/services/${service}`)
       .then(res => res.json())
       .then(data => setOrderService(data))
    },[service])
 
    return (
        <tr>
        <th>
          <label>
            <button onClick={()=> handleDelete(_id)} className='btn btn-ghost'>x</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
               { 
                  orderService?.image
                  &&
               <img src={orderService.image} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{customr} </div>
              <div className="font-bold">{phone} </div>
             
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${price} </span>
        </td>
        <td></td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default OrderRow;