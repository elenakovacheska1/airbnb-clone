import React from 'react';
import heroImage from '../images/hero-image.png';

let Hero = () => {
    return(
        <div className='hero'>
            <img src={heroImage}></img>
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    );
}

export default Hero;