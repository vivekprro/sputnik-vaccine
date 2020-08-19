import React, {useState} from 'react';
import AdenoviralVaccines from './Adenoviral/index';
import VaccineTech from '../../../assets/images/vaccine-tech.jpg';
import Button from '../../UI/Button/index';
import './technology.css';
import {Helmet} from "react-helmet";

const Technology = () => {
    
    const [extend, setExtend] = useState(false);

    const extendText = () => {
        setExtend(!extend);
    }

    return (
        <div className="technology">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Proven Vector Technology Based On Human Adenovirus</title>
                <meta name="description" content='The technology of using adenoviral vectors as vector vaccines has been developing since the 80s of the last century, and numerous studies have shown the effectiveness and safety of this technology.' />
            </Helmet>
            
            <div className="techPreview">
                <img src={VaccineTech} alt='' />
                <div className="techDetail">
                    <h1>Proven Vector Technology Based On Human Adenovirus</h1>
                    <p>The technology of using adenoviral vectors as vector vaccines has been developing since the 80s of the last century, and numerous studies have shown the effectiveness and safety of this technology.</p>
                    
                    {!extend ? <Button icon={extend} click={extendText}>Learn More</Button> : <h1>Adenoviral Vaccines</h1>}
                    
                </div>
            </div>
            {extend ? <AdenoviralVaccines /> : null}
            {extend ? <Button icon={extend} click={extendText}>Show Less</Button> : null}
        </div>
    )
}

export default Technology
