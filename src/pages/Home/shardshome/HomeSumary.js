import React from 'react';
import { Link } from 'react-router-dom';

const HomeSumary = ({result}) => {
    const {_id, title,name, image}=result;
    return (
        
            <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name} </h2>
                <p>{title} </p>
                <div className="card-actions">
                 <Link to={`/chackout/${_id}`}>
                 
                <button className="btn btn-primary">chack out</button>
                 </Link>
                </div>
            </div>
            </div>
            
       
    );
};

export default HomeSumary;