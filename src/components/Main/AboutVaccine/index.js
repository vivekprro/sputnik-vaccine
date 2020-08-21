import React from 'react'

import VaccineInfo from '../../../assets/images/vaccine-info.png'
import AboutVaccineStyle from './aboutVaccine.styled'

const AboutVaccine = () => {
    return (
        <AboutVaccineStyle>
            <h1>About Vaccine</h1>
            <img src={VaccineInfo} alt='' />
        </AboutVaccineStyle>
    )
}

export default AboutVaccine
