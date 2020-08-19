import React from 'react'
import {Helmet} from "react-helmet";
import Styled from 'styled-components'

const ClinicaTrialStyle = Styled.div ` 

    /* display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;

    h1 {
        font-size: 35px;
        margin: 0;
        padding: 0px 0 0px 0;
    }

    p {
        margin: 10px 0;
        padding: 0;
        font-size: 19px;
        line-height: 30px;
        text-align: justify;
    } */

`;

const ClinicalTrials = () => {
    return (
        <ClinicaTrialStyle>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Clinical Trials</title>
                <meta name="description" content="Phase 1 and 2 clinical trials of the vaccine have been completed on August 1, 2020. All the volunteers are feeling well, no unforeseen or unwanted side effects were observed. The vaccine induced strong antibody and cellular immune response. Not a single participant of the current clinical trials got infected with COVID-19 after being administered with the vaccine. The high efficacy of the vaccine was confirmed by high precision tests for antibodies in the blood serum of volunteers (including an analysis for antibodies that neutralize the coronavirus), as well as the ability of the immune cells of the volunteers to activate in response to the spike S protein of the coronavirus, which indicates the formation of both antibody and cellular immune vaccine response" />
            </Helmet>            
            <h1>Clinical Trials</h1>
            <p>Before the start of clinical trials the vaccine had gone through all stages of pre-clinical trials with experiments on different types of animals, including 2 types of primates.</p>

            <p>Phase 1 and 2 clinical trials of the vaccine have been completed on August 1, 2020. All the volunteers are feeling well, no unforeseen or unwanted side effects were observed. The vaccine induced strong antibody and cellular immune response. Not a single participant of the current clinical trials got infected with COVID-19 after being administered with the vaccine. The high efficacy of the vaccine was confirmed by high precision tests for antibodies in the blood serum of volunteers (including an analysis for antibodies that neutralize the coronavirus), as well as the ability of the immune cells of the volunteers to activate in response to the spike S protein of the coronavirus, which indicates the formation of both antibody and cellular immune vaccine response.</p>

            <p>Phase 3 clinical trial involving more than 2,000 people in Russia, a number of Middle Eastern (UAE and Saudi Arabia), and Latin American countries (Brazil and Mexico) will start on August 12. The vaccine has received a registration certificate from the Russian Ministry of Health on August 11 and under emergency rules adopted during the COVID-19 pandemic can be used to vaccinate the population in Russia. Mass production of the vaccine is expected to start in September 2020.</p>
            
            <p>The unique substance of the Sputnik V and method of using it has a patent protection in Russia, obtained by Gamaleya National Research Institute of Epidemiology and Microbiology.</p>
        </ClinicaTrialStyle>
    )
}

export default ClinicalTrials
