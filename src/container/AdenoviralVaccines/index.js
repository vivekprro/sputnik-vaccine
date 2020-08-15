import React from 'react'
import {isMobile} from 'react-device-detect';

import MobileAdinoviral from '../../Mobile/components/Main/AdenoviralVaccines/index'

import Adinoviral from '../../components/Main/Adenoviral/index'

import './adenoviralVaccines.css'

const AdenoviralVaccines = () => {
    if (isMobile) {
        return (
            <div>
                <MobileAdinoviral />
            </div>
        )
      }
    return (
        <div className="adenoviralVaccines">
            <Adinoviral />
        </div>
    )
}

export default AdenoviralVaccines
