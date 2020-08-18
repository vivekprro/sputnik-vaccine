import React, {useState} from 'react'

import VaccineTech from '../../../../assets/images/vaccine-tech.jpg'
import VaccineTrials from '../../../../assets/images/vaccine-trials-2.jpg'
import Button from '../../Button/index'
import Adenoviral from './AdenoviralVaccines/index'
import ClinicalTrial from './ClinicalTrials/index'
import TechInfoStyle from './TechInfo.styled'

const TechInfo = () => {
    const [extend, setExtend] = useState(false);

    const extendText = () => {
        setExtend(!extend);
    }

    return (
        <TechInfoStyle>
            <h1>Proven Vector Technology Based On Human Adenovirus</h1>
            <img src={VaccineTech} alt='' />            
            <p>The technology of using adenoviral vectors as vector vaccines has been developing since the 80s of the last century, and numerous studies have shown the effectiveness and safety of this technology.</p>
            {!extend ? <Button icon={extend} click={extendText}>Learn More</Button> : null}
            {extend ? <Adenoviral /> : null}
            {extend ? <Button icon={extend} click={extendText}>Show Less</Button> : null}
            <h1>Clinical Trials</h1>
            <img src={VaccineTrials} alt='' />
            <p>The vaccine has received a registration certificate from the Russian Ministry of Health and under emergency rules adopted during the COVID-19 pandemic can be used to vaccinate the population in Russia.</p>
            {!extend ? <Button icon={extend} click={extendText}>Learn More</Button> : null}
            {extend ? <ClinicalTrial /> : null}
            {extend ? <Button icon={extend} click={extendText}>Show Less</Button> : null}
        </TechInfoStyle>
    )
}

export default TechInfo
