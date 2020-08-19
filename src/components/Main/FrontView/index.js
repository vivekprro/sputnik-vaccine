import React from 'react';
import {Helmet} from "react-helmet";
import FrontviewStyle from './Frontview.styled';

const FrontView = () => {
    return (
        <FrontviewStyle>
            <Helmet>
                <meta charSet="utf-8" />
                <title>sputnik vaccines World's First Covid-19 Vaccine </title>
                <meta name="description" content="World's First Covid-19 Vaccine" />
            </Helmet> 
            <h1>World's First Covid-19 Vaccine</h1>
        </FrontviewStyle>
    )
}

export default FrontView
