import React from 'react';

import Logo from './Logo/index'
import Navigation from './Navigation/index'
import HeaderStyle from './header.styled';


const Header = (props) => {
    return (
        <HeaderStyle>
            <Logo />
            <Navigation />
        </HeaderStyle>
    )
}

export default Header;