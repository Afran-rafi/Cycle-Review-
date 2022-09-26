import React from 'react';
import useReview from '../Hooks/useReview';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-gray-400'>Customers Reviews</h1>
            {
                reviews.map(review => <Review
                key={review._id}
                singleReview={review}
                ></Review>)
            }
        </div>
    );
};
export default Reviews;