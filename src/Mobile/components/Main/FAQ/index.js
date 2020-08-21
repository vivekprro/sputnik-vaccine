import React from 'react'
import {Helmet} from "react-helmet";

import Styled from 'styled-components'

const FAQStyle = Styled.div ` 

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    padding: 30px;
    box-sizing: border-box;

    h1 {
        color: rgb(44, 39, 39);
        font-size: 22px;
        text-align: justify;
        padding: 0;
        margin: 0;
    }

    h2 {
        color: rgb(66, 54, 54);
        font-size: 20px;
        line-height: 35px;
        text-align: justify;
        margin: 0;
        padding: 30px 0 0 0;
    }

    p {      
        color: #737373;
        font-size: 19px;
        line-height: 35px;
        text-align: justify;
        padding: 15px 0 0 0;
        margin: 0;
    }

`;

const FAQ = () => {
    return (
        <FAQStyle>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Frequently asked questions</title>
                <meta name="description" content="When will mass production of the Russian vaccine start?" />
            </Helmet> 
             <h1>Frequently asked questions</h1>

            <h2>When will mass production of the Russian vaccine start?</h2>
            <p>Mass production of the vaccine is expected to start in September 2020.</p>

            <h2>Will the vaccine be available in other countries?</h2>
            <p>At least 20 countries had expressed interest in obtaining the Sputnik V, including UAE, Saudi Arabia, Indonesia, the Philippines, Brazil, Mexico and India.</p>

            <h2>When will Russia provide full scientific data behind the vaccine?</h2>
            <p>In August the Gamaleya Center will publish the data as part of an article in a major international scientific magazine.</p>
        </FAQStyle>
    )
}

export default FAQ
