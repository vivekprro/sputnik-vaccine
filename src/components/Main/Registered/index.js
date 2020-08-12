import React from 'react'


import './registered.css'

const RegisteredCountries = (props) => {
    console.log(props);
    console.log(window.location.pathname + window.location.search);
    return (
        <div className="countries">
            <h1>Atleast 20 countries has shown interested in obtaining Covid-19 vaccine from Russia</h1>
            <p>RDIF has seen strong global interest in the vaccine and plans to conduct Phase 3 clinical trials in different countries, including Saudi Arabia, United Arab Emirates (UAE), Brazil, India and Philippines, and start mass production in other countries in partnership with local sovereign wealth funds, including India, South Korea and Brazil, as well as, in Saudi Arabia, Turkey and Cuba, according to the statement.</p>

            <p>The plan is to ramp up the vaccine production to 200 million doses by the end of 2020 including 30 million doses in Russia.</p>

            <p>The countries interested in Sputnik-V includes UAE, Saudi Arabia, Indonesia, Philippines, Mexico, Brazil and India</p>
        </div>
    )
}

export default RegisteredCountries
