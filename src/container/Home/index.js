import React from 'react'

import Vaccine from '../../assets/images/vaccine.png'
import MainContent from '../../components/Main/MainContent/index'
import HomePageContent from '../../components/Main/HomePageContent/index'
import Technology from '../../components/Main/Technology/index'
import Trials from '../../components/Main/Trials/index'

import './home.css'

const Home = (props) => {

    return (
        <div className="home">
            {/* <img src={Vaccine} alt='' />
            <MainContent/> */}
            <HomePageContent />
            <Technology />
            <Trials />
        </div>
    )
}

export default Home
