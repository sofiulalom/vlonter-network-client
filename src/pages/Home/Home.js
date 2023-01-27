import React, { useEffect, useState } from 'react';
import HomeSumary from './shardshome/HomeSumary';

const Home = () => {
    const [resulte, setResulte]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setResulte(data))

    },[])
    return (
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3'>
          {
            resulte.map(result => <HomeSumary  key={result._id} result={result}>
                
            </HomeSumary>)
           }
          </div>
        </div>
    );
};

export default Home;