import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Reviews = () => {
    // const [user, setUser] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/reviews')
    //         .then(res => res.json())
    //     .then(data=>setUser(data))
    // },[])
    const reviews = useLoaderData()
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl text-center font-bold'>Customer Reviews{ reviews.length}</h1>
            
            
        </div>
    );
};

export default Reviews;