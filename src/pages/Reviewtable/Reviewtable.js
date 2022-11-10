import React from 'react';

const Reviewtable = ({ singlereview }) => {
    const { img, name, service, text } = singlereview
    return (

        <tr >
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                {service}

            </td>
            <td>{text}</td>
            <th>
                <button className="btn btn-ghost btn-xs"></button>
            </th>
        </tr>



    );
};

export default Reviewtable;