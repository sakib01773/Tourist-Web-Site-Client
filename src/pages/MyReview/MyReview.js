import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hook/useTitle';
import MyReviewtable from '../MyReviewtable/MyReviewtable';

const MyReview = () => {
    useTitle("MyReview")
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [user?.email])


    const handleDelete = id => {

        const proceed = window.confirm('Are you sure you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = review.filter(odr => odr._id !== id);
                        setReview(remaining);
                    }
                })

        }


    }
    return (
        <div className='container mx-auto'>
            {
                review?.length ? <>
                    <div className='my-10 '>

                        <h1 className='text-5xl text-orange-600 text-center my-16 font-extrabold'>Reviews</h1>
                        <div className="overflow-x-auto w-full my-10">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>
                                            <label>


                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Service</th>
                                        <th>Review</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        review.map(singlereview => <MyReviewtable key={singlereview._id} singlereview={singlereview} handleDelete={handleDelete}></MyReviewtable>)
                                    }








                                </tbody>



                            </table>
                        </div>



                    </div>

                </> : <><div className='text-center font-bold text-6xl my-20'>No Reviews were added </div></>
            }

        </div>
    );
};

export default MyReview;