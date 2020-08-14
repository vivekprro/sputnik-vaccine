import React from 'react'

import VaccineTech from '../../../assets/images/vaccine-tech.jpg'
import './technology.css'

const Technology = () => {
    return (
        <div className="technology">
            <img src={VaccineTech} alt='' />
            <div className="tech">
                <h1>PROVEN VECTOR TECHNOLOGY BASED ON HUMAN ADENOVIRUS</h1>
                <p>The technology of using adenoviral vectors as vector vaccines has been developing since the 80s of the last century, and numerous studies have shown the effectiveness and safety of this technology.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Technology
