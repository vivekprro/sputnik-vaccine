import React from 'react'
import { Link } from 'react-router-dom'


import './logo.css'

const Logo = () => {
    return (
        <Link to='/' className="logo">
            <h1>Sputnik V</h1>
            <h2>Covid-19 vaccine</h2>
        </Link>
    )
}

export default Logo
