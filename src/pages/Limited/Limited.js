import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const Limited = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/homeservices")
            .then(res => res.json())
        .then(data => setService(data))
        
    },[])
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-semibold text-center'>Services</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
            
            {
                services.map(service => <Card key={service._id} service={service}></Card>)
            }
            </div>
            <div className='flex justify-center'>
             <Link to={"/services"}><button className="btn btn-primary px-10">SEE ALL</button></Link>
            </div>
         </div>
        
    );
};

export default Limited;