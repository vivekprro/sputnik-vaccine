import React from 'react';

import Logo from './Logo/index'
import Navbar from './Navbar/index'
import HeaderStyle from './header.styled';


const Header = (props) => {
    return (
        <HeaderStyle>
            <div className="title">
                <Logo />
            </div>
            <div className="headerNavbar">
                <Navbar />
            </div>
        </HeaderStyle>
    )
}

export default Header;