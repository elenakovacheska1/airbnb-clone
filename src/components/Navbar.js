import React from 'react';
import AirbnbLogo from '../images/airbnb-logo.png';

let Navbar = () => {
    return(
        <div>
            <nav>
                <img id='logo' src={AirbnbLogo} alt='Airbnb Logo'></img>
            </nav>
        </div>
    );
}

export default Navbar;