import React from 'react'

import VaccineTrials from '../../../assets/images/vaccine-trials-2.jpg'
import './trials.css'

const Trials = () => {
    return (
        <div className="trials">
            <div className="trial">
                <h1>CLINICAL TRIALS</h1>
                <p>The vaccine has received a registration certificate from the Russian Ministry of Health and under emergency rules adopted during the COVID-19 pandemic can be used to vaccinate the population in Russia.</p>
                <button>Learn More</button>
            </div>
            <img src={VaccineTrials} alt='' />
        </div>
    )
}

export default Trials
