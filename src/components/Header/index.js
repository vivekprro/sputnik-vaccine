import React from 'react';

import Logo from './Logo/index'
import Navbar from './Navbar/index'
import './header.css';


const Header = (props) => {
    return (
        <div className="header">
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header;