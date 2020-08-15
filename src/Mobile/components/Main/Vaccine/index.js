import React from 'react'

import VectorCreation from '../../../../assets/images/vector-creation.png'
import FirstVaccination from '../../../../assets/images/first-vaccination.png'
import secondVaccination from '../../../../assets/images/second-vaccination.png'

import './vaccine.css'

const AboutVaccine = () => {
    return (
        <div className="vaccine">
            <h1>Vaccine</h1>
            <img src={VectorCreation} alt='' />
            <img src={FirstVaccination} alt='' />
            <img src={secondVaccination} alt='' />
        </div>
    )
}

export default AboutVaccine
