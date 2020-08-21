import React, {useState} from 'react';
import {Helmet} from "react-helmet";

import AdenoviralVaccines from './Adenoviral/index';
import VaccineTech from '../../../assets/images/vaccine-tech.jpg';
import Button from '../../UI/Button/index';

import TechInfoStyle from './techInfo.styled'

const Technology = () => {
    
    const [extend, setExtend] = useState(false);

    const extendText = () => {
        setExtend(!extend);
    }

    return (
        <TechInfoStyle>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sputnik vaccine</title>
                <meta name="description" content='The technology of using adenoviral vectors as vector vaccines has been developing since the 80s of the last century, and numerous studies have shown the effectiveness and safety of this technology.' />
            </Helmet>
            
            <div className="techPreview">
                <img src={VaccineTech} alt='' />
                <div className="techDetail">
                    <h1>Proven Vector Technology Based On Human Adenovirus</h1>
                    <p>The technology of using adenoviral vectors as vector vaccines has been developing since the 80s of the last century, and numerous studies have shown the effectiveness and safety of this technology.</p>                   
                    {!extend ? <Button icon={extend} click={extendText}>Learn More</Button> : <h2>Adenoviral Vaccines</h2>}
                </div>
            </div>

            {extend ? <AdenoviralVaccines /> : null}
            {extend ? <Button icon={extend} click={extendText}>Show Less</Button> : null}
        </TechInfoStyle>
    )
}

export default Technology
