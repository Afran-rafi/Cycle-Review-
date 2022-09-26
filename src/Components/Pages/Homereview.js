import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import Review from './Review';

const Homereview = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='lg:px-24 px-4 lg:mt-6 mt-4'>
            <h1 className='text-gray-600 font-bold text-3xl text-center'>Customers Reviews</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 text-center lg:my-10'>
                {
                    reviews.slice(0, 3).map(review => <Review
                    key={review._id}
                    singleReview={review}
                    ></Review>)
                }
            </div>
            <div className='flex justify-center mb-10'>
                <Link to='/review'><button className='bg-green-600 font-bold px-6 py-2 rounded text-white'>See All Reviews</button></Link>
            </div>
        </div>
    );
};

export default Homereview;