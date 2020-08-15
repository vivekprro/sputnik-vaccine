import React from 'react'
import {isMobile} from 'react-device-detect';

import MobileAboutVaccine from '../../Mobile/components/Main/Vaccine/index'

import Vaccine from '../../components/Main/Vaccine/index'
import './aboutVaccine.css'

const AboutVaccine = () => {
    if (isMobile) {
        return (
            <div>
                <MobileAboutVaccine />
            </div>
        )
      }
    return (
        <div className="aboutVaccine">
            <Vaccine />
        </div>
    )
}

export default AboutVaccine
