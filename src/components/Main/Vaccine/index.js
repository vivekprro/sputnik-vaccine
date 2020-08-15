import React from 'react'


import VaccineInfo from '../../../assets/images/vaccine-info.png'
import './vaccine.css'

const Vaccine = () => {
    return (
        <div className="vaccine">
            <img src={VaccineInfo} alt='' />
        </div>
    )
}

export default Vaccine
