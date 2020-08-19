import React from 'react';

import { GiHamburgerMenu } from "react-icons/gi";


import Logo from './Logo/index'
import HeaderStyle from './header.styled'


const Header = (props) => {
    return (
        <HeaderStyle>
            <GiHamburgerMenu size="30px" color="#ffffff" onClick={props.drawerToggle} />
            <Logo />
        </HeaderStyle>
    )
}

export default Header;