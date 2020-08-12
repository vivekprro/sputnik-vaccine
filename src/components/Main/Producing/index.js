import React from 'react'

import './producing.css'

const Producing = (props) => {
    console.log(props);
    console.log(window.location.pathname + window.location.search);
    return (
        <div className="producing">
            <h1>Russia has launched world's first registered COVID-19 vaccine 'Sputnik-V' on August 11, 2020</h1>
            
            <p>In a race to find a vaccine that will protect people from the novel coronavirus, six candidates from around the world are now in phase three of human trials. Recent reports from Russia claim that one of their candidates has completed safety and efficacy testing in human trials successfully. Russia will reportedly begin producing the vaccine soon and already has plans for a massive, country-wide vaccine drive.</p>

            <p>Russia currently has two COVID-19 vaccine candidates in the race – one, a vaccine being developed by the Vektor State Research Center of Virology and Biotechnology. The second is a vaccine being produced by the Gamaleya Scientific Research Institute of Epidemiology and Microbiology along with the Russian Defence Ministry.</p>

            <p>"Clinical trials of a coronavirus vaccine developed by the Gamaleya centre are over, paperwork is underway for the vaccine’s registration," Russian Health Minister Mikhail Murashko pointed out in the report.</p>

            <p>More than 100 possible vaccines are being developed around the world to try to stop the coronavirus pandemic. At least four are in final Phase III human trials, according to World Health Organization (WHO) data.</p>
        </div>
    )
}

export default Producing
