import React, {useState} from 'react'
import Button from '../../UI/Button/index'

import ClinicalTrials from './ClinicalTrial/index'
import VaccineTrials from '../../../assets/images/vaccine-trials-2.jpg'
import './trials.css'

const Trials = () => {

    const [extend, setExtend] = useState(false);

    const extendText = () => {
        setExtend(!extend);
    }

    return (
        <div className="trials">
            <div className="trialPreview">
                <div className="trialDetail">
                    <h1>Clinical Trials</h1>
                    <p>The vaccine has received a registration certificate from the Russian Ministry of Health and under emergency rules adopted during the COVID-19 pandemic can be used to vaccinate the population in Russia.</p>
                    {!extend ? <Button icon={extend} click={extendText}>Learn More</Button> : <h1>Sputnik Vaccine Clinical Trials</h1>}
                </div>
                <img src={VaccineTrials} alt='' />
            </div>
            {extend ? <ClinicalTrials /> : null}
            {extend ? <Button icon={extend} click={extendText}>Show Less</Button> : null}
        </div>
    )
}

export default Trials
