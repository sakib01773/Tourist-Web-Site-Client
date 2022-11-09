import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
            {
                services.map(service => <Card key={service._id} service={service}></Card>)
            }
        </div>
        </div>
    );
};

export default Services;