import React from 'react'
import {isMobile} from 'react-device-detect';

import MobileFrontView from '../../Mobile/components/FrontView/index'

import FrontView from '../../components/Main/FrontView/index'
import Technology from '../../components/Main/Technology/index'
import Trials from '../../components/Main/Trials/index'

import './home.css'

const Home = (props) => {

    if (isMobile) {
        return (
            <MobileFrontView />
        )
      }

    return (
        <div className="home">
            <FrontView />
            <Technology />
            <Trials />
        </div>
    )
}

export default Home
