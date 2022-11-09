import React from 'react';

const Card = ({ service }) => {
    const {img,title,price,description} =service
    return (
        <div>
            <div className="card card-compact h-full w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ title}</h2>
                    <p>{description.length < 100 ? description : description.slice(0, 100) + "..."}</p>
                    <p>{ price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-accent">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;