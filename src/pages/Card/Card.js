import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    const {img,title,price,description,service_id} =service
    return (
        <div>
            <div className="card card-compact h-full w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ title}</h2>
                    <p>{description.length < 100 ? description : description.slice(0, 100) + "..."}</p>
                    <p>{ price}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/services/${service_id}`}><button className="btn btn-accent">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;