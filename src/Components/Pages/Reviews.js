import React from 'react';
import useReview from '../Hooks/useReview';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='lg:px-24 px-4 lg:mt-10 mt-6'>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 text-center'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    singleReview={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};
export default Reviews;