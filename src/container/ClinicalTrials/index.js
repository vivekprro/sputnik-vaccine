import React from 'react'
import {isMobile} from 'react-device-detect';

// import MobileClinicalTrials from '../../Mobile/components/Main/ClinicalTrials/index'

// import ClinicalTrial from '../../components/Main/ClinicalTrial/index'

import './clinicalTrials.css'

const ClinicalTrials = () => {
    if (isMobile) {
        return (
            <div>
                {/* <MobileClinicalTrials /> */}
            </div>
        )
      }
    return (
        <div className="clinicalTrials">
            {/* <ClinicalTrial /> */}
        </div>
    )
}

export default ClinicalTrials
