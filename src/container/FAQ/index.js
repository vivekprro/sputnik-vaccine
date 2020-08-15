import React from 'react'
import {isMobile} from 'react-device-detect';

import MobileFAQ from '../../Mobile/components/Main/FAQ/index'

import Faqs from '../../components/Main/Faq/index'

import './faq.css'

const Faq = () => {
    if (isMobile) {
        return (
            <div>
                <MobileFAQ />
            </div>
        )
      }
    return (
        <div className="faq">
            <Faqs />
        </div>
    )
}

export default Faq
