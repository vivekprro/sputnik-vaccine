import React from 'react'
import { NavLink } from 'react-router-dom'

import NavigationStyle from './navigation.styled'

const Navigation = (props) => {
    return (
        <NavigationStyle onClick={props.close}>
            <NavLink to='/about-vaccine'>About Vaccine</NavLink>
            <NavLink to='/clinical-trials'>Clinical Trials</NavLink>
            <NavLink to='/adenoviral-vaccines'>Adenoviral vaccines</NavLink>           
            <NavLink to='/news-room'>News Room</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
        </NavigationStyle>
    )
}

export default Navigation
