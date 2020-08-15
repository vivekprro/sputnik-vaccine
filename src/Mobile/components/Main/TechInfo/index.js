import React from 'react'

import VaccineTech from '../../../../assets/images/vaccine-tech.jpg'
import VaccineTrials from '../../../../assets/images/vaccine-trials-2.jpg'
import TechInfoStyle from './TechInfo.styled'

const TechInfo = () => {
    return (
        <TechInfoStyle>
            <h1>Proven Vector Technology Based On Human Adenovirus</h1>
            <img src={VaccineTech} alt='' />            
            <p>The technology of using adenoviral vectors as vector vaccines has been developing since the 80s of the last century, and numerous studies have shown the effectiveness and safety of this technology.</p>
            {/* <button>Learn More</button> */}
            <h1>Clinical Trials</h1>
            <img src={VaccineTrials} alt='' />
            <p>The vaccine has received a registration certificate from the Russian Ministry of Health and under emergency rules adopted during the COVID-19 pandemic can be used to vaccinate the population in Russia.</p>
            {/* <button>Learn More</button> */}
        </TechInfoStyle>
    )
}

export default TechInfo
