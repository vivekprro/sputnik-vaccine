import React from 'react'
import {Helmet} from "react-helmet";

import FrontViewStyle from './FrontView.styled'

const FrontView = () => {
    return (
        <FrontViewStyle>
            <Helmet>
                <meta charSet="utf-8" />
                <title>World's first covid-19 vaccine-Sputnik vaccine</title>
                <meta name="description" content="When will mass production of the Russian vaccine start?" />
            </Helmet> 
            <h1>World's First Covid-19 Vaccine</h1>
        </FrontViewStyle>
    )
}

export default FrontView
