import React from 'react'

import Vaccine from '../../assets/images/vaccine.png'
import MainContent from '../../components/Main/MainContent/index'
import './home.css'

const Home = (props) => {

    return (
        <div className="home">
            <img src={Vaccine} alt='' />
            <MainContent/>
        </div>
    )
}

export default Home
