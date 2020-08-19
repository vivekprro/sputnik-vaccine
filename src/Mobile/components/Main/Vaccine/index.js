import React from 'react'
import {Helmet} from "react-helmet";

import VectorCreation from '../../../../assets/images/vector-creation.png'
import FirstVaccination from '../../../../assets/images/first-vaccination.png'
import secondVaccination from '../../../../assets/images/second-vaccination.png'

import VaccineStyle from './Vaccine.style'

const AboutVaccine = () => {
    return (
        <VaccineStyle>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Vaccines</title>
                <meta name="description" content="The use of two vectors is a unique technology of The Gamaleya Center making Russian vaccine different from other adenovirus vector-based vaccine being developed globally" />
            </Helmet> 
            <h1>Vaccine</h1>
            <img src={VectorCreation} alt='' />
            <img src={FirstVaccination} alt='' />
            <img src={secondVaccination} alt='' />
            <div>
                <p>The use of two vectors is a unique technology of The Gamaleya Center making Russian vaccine different from other adenovirus vector-based vaccine being developed globally</p>
            </div>
        </VaccineStyle>
    )
}

export default AboutVaccine
