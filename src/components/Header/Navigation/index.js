import React from 'react'
import { NavLink } from 'react-router-dom'

import NavigationStyle from './navigation.styled'

const Navigation = (props) => {
    return (
        <NavigationStyle onClick={props.close}>   
            <NavLink to='/news-room'>News Room</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
        </NavigationStyle>
    )
}

export default Navigation
