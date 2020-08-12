import React from 'react'

import './distribution.css'

const Distribution = (props) => {
    console.log(props);
    console.log(window.location.pathname + window.location.search);
    return (
        <div className="distribution">
            <h1>Mass production of the Sputnik is expected from September</h1>

            <p>The vaccine's approval by the health ministry comes before the start of a larger trial involving thousands of participants, commonly known as a Phase III trial.</p>

            <p>Such trials, which require a certain rate of participants catching the virus to observe the vaccine's effect, are normally considered essential precursors for a vaccine to receive regulatory approval.</p>

            <p>The Moscow-based Association of Clinical Trials Organizations (ACTO), a trade body representing the world's top drugmake.</p>
        </div>
    )
}

export default Distribution
