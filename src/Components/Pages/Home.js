import React from 'react';
import img from '../Images/cycle.png'

const Home = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 items-center lg:mt-10'>
            <div className='lg:-order-none order-6'>
                <h5 className='text-xs text-[#2fb450] font-bold'>sale up to 20% off</h5>
                <h2 className='text-6xl font-bold'>Your Next Cycle <br /> <span className='text-[#2fb450]'>Your Best Cycle</span></h2>
                <p className='mt-4'>Believe in your cycle, and it will lead your way. The best riders happen on two wheels. Ride it like a pro it's not just riding, it's a feelings. Ride and live today.</p>
                <button className='bg-[#2fb450] px-6 py-2 text-white rounded mt-4 font-bold'>Live Demo</button>
            </div>
            <div>
                <div className='flex lg:justify-end justify-center mt-6'>
                    <img className='image' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;