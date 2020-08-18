import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaQuestion, FaRegNewspaper } from "react-icons/fa";


import NavigationStyle from './navigation.styled'

const Navigation = (props) => {
    return (
        <NavigationStyle onClick={props.close}>
            {/* <NavLink to='/about-vaccine'>About Vaccine</NavLink>
            <NavLink to='/clinical-trials'>Clinical Trials</NavLink>
            <NavLink to='/adenoviral-vaccines'>Adenoviral vaccines</NavLink>            */}
            <NavLink to='/news-room'><FaRegNewspaper color="rgba(145, 150, 158, 0.938)" /><p>News Room</p></NavLink>
            <NavLink to='/faq'><FaQuestion color="rgba(145, 150, 158, 0.938)"  /><p>FAQ</p></NavLink>
        </NavigationStyle>
    )
}

export default Navigation
