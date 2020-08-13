import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


import Logo from './Logo/index'
import Navbar from './Navbar/index'
import './header.css';


const Header = (props) => {
    return (
        <div className="header">
            <div className="hamburgerIcon">
                <GiHamburgerMenu size="30px" onClick={props.drawerToggle} />
            </div>
            <div className="title">
                <Logo />
            </div>
            <div className="headerNavbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Header;