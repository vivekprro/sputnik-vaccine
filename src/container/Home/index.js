import React from 'react'
import {isMobile} from 'react-device-detect';
import Styled from 'styled-components'

import MobileFrontView from '../../Mobile/components/Main/FrontView/index'
import MobileTechInfo from '../../Mobile/components/Main/TechInfo/index'
import MobileVaccine from '../../Mobile/components/Main/Vaccine/index'


import FrontView from '../../components/Main/FrontView/index'
import TechnInfo from '../../components/Main/TechInfo/index'
import TrialInfo from '../../components/Main/TrialInfo/index'
import AboutVaccine from '../../components/Main/AboutVaccine/index'

const HomeStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;

`;

const Home = (props) => {

    if (isMobile) {
        return (
            <div>
                <MobileFrontView />
                <MobileTechInfo />
                <MobileVaccine />
            </div>
        )
      }

    return (
        <HomeStyle>
            <FrontView />
            <TechnInfo />
            <TrialInfo />
            <AboutVaccine />
        </HomeStyle>
    )
}

export default Home
