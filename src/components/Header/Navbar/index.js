import React from 'react'
import { NavLink } from 'react-router-dom'


import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to='/producing'>Who's Producing</NavLink>
            <NavLink to='/status'>Current Status</NavLink>
            <NavLink to='/distribution'>Distribution</NavLink>           
            <NavLink to='/registered'>Countries Registered</NavLink>
        </div>
    )
}

export default Navbar
