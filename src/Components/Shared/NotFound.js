import React from 'react';
import error from '../Images/404-error.png'

const NotFound = () => {
    return (
        <div className='flex justify-center lg:px-24 px-4'>
            <img className='h-[86vh]' src={error} alt="" />
        </div>
    );
};

export default NotFound;