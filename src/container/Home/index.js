import React from 'react'
import {isMobile} from 'react-device-detect';

import MobileFrontView from '../../Mobile/components/Main/FrontView/index'
import MobileTechInfo from '../../Mobile/components/Main/TechInfo/index'


import FrontView from '../../components/Main/FrontView/index'
import Technology from '../../components/Main/Technology/index'
import Trials from '../../components/Main/Trials/index'
import HomeSttyle from './home.syled'

const Home = (props) => {

    if (isMobile) {
        return (
            <div>
                <MobileFrontView />
                <MobileTechInfo />
            </div>
        )
      }

    return (
        <HomeSttyle>
            <FrontView />
            <Technology />
            <Trials />
        </HomeSttyle>
    )
}

export default Home
