import React from 'react';
import Home from './Home';
import '../CSS/Homepage.css'
import Homereview from './Homereview';

const Homepage = () => {
    return (
        <div>  
            <Home></Home>
            <Homereview></Homereview>
        </div>
    );
};

export default Homepage;