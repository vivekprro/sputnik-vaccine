import React from 'react'
import {Helmet} from "react-helmet";

import Styled from 'styled-components'

const FAQStyle = Styled.div ` 

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;

    h1 {
        font-size: 35px;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 26px;
        margin: 0;
        padding: 50px 0 0 0;
    }

    p {
        margin: 0;
        padding: 10px 0 0 0;
        font-size: 19px;
        line-height: 30px;
        text-align: justify;
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
             <h1>Frequently Asked Questions</h1>

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
