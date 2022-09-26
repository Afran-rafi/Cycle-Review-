import React from 'react';
import '../CSS/Review.css'

const Review = ({ singleReview }) => {
    const { _id, name, image, review } = singleReview;
    return (
        <div className='p-4 bg-gray-100 rounded'>
            <div className='h-[50px]'>
                <h1><i className="fa-solid fa-quote-left"></i> {review} <i className="fa-solid fa-quote-right"></i></h1>
            </div>
            <div className='flex justify-around items-center bor mt-4'>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[45px] rounded-full' src={image} alt="" />
                    <p className='ml-2'>{name}</p>
                </div>
                <div>
                    <p>Ratings: 5<i className="fa-solid fa-star text-yellow-500"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Review;