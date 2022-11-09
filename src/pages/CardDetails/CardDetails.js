import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const service = useLoaderData()
    const {img,title,price,description} =service
    return (
        <div>
            <div className='container mx-auto my-10'>
             <div className="card card-compact h-full w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ title}</h2>
                    <p>{description}</p>
                    <p>{ price} taka</p>
                </div>
            </div>
            </div>
            {/* <div>
                <Reviews></Reviews>
            </div> */}
            <Outlet></Outlet>
        </div>
    );
};

export default CardDetails;