import React from 'react'

import Vaccine from '../../assets/images/vaccine.png'
import './home.css'

const Home = (props) => {

console.log(window.location.pathname + window.location.search);
    return (
        <div className="home">
            <img src={Vaccine} alt='' />
            <div className="headline">
                <h1>World's First Covid-19 Vaccine</h1>
                <h2>Sputnik V</h2>
                <div className="sub-headline">
                    <div className="red">
                        <h3>Success Rate</h3>
                        <p>90%</p>
                    </div>
                    <div className="green">
                        <h3> Anti-body Span </h3>
                        <p>Not known yet</p>
                    </div>
                    <div className="blue">
                        <h3> Side-effects </h3>
                        <p>Short time fever</p>
                    </div>
                </div>
                <h3>Russia had become the world's first country to grant regulatory approval to a COVID-19 vaccine after less than two months of human testing, a move hailed by Moscow as evidence of its scientific prowess.</h3>
            </div>
        </div>
    )
}

export default Home
