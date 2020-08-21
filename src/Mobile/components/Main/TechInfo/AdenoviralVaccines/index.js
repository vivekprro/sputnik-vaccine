import React from 'react'
import {Helmet} from "react-helmet";
import Styled from 'styled-components'

const AdenoviralStyle = Styled.div ` 

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h2 {
        font-size: 21px;
        margin: 0;
        padding: 0px 0 15px 0;
    }

    /* h1 {
        font-size: 23px;
        line-height: 30px;
        text-align: justify;
        text-transform: capitalize;
        padding: 0px 0 0px 0;
        margin: 0;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        text-align: justify;
        margin: 0;
        line-height: 3p0x;
        padding: 0px 0;
    } */

`;

const Adenoviral = () => {
    return (
        <AdenoviralStyle>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Adenoviral vaccines</title>
                <meta name="description" content="Adenoviral vectors are considered extremely safe and some of the easiest to engineer. Vectors are viruses, which have had the gene responsible for reproduction removed. Therefore, they no longer pose any infection threat. Scientists use vectors to transport genetic material from a different virus, being vaccinated against, into a human cell." />
            </Helmet>           
            <h2>Adenoviral vaccines</h2>
            <p>Adenoviral vectors are considered extremely safe and some of the easiest to engineer. Vectors are viruses, which have had the gene responsible for reproduction removed. Therefore, they no longer pose any infection threat. Scientists use vectors to transport genetic material from a different virus, being vaccinated against, into a human cell.</p>
            <p>Adenoviruses, found in adenoids and normally transmitting the common cold, have become very popular as vectors with a lot of research available from different sources. Scientists from the Gamaleya Center have been working on adenoviral vector-based vaccines since the 1980s and have become the world’s leaders in developing these type of vaccines.</p>
            <p>The Gamaleya Center successfully developed and registered an adenoviral vector-based vaccine against Ebola.</p>
            <p>Another adenoviral vector-based vaccine against Middle East Respiratory Syndrome (MERS) is in advanced stages of clinical trials. Some other COVID-19 vaccine candidates also use adenoviral vectors but none is using the two-vector platform that Gamaleya Center has developed.</p>
            <p>During the vaccine creation process a gene with the code of a protein from a spike of coronavirus is inserted into an adenoviral vector. This inserted element is safe for the body but still helps the immune system to react and produce antibodies, which protect us from the infection.</p>
            
        </AdenoviralStyle>
    )
}

export default Adenoviral
