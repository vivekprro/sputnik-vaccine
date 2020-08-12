import React from 'react'


import './currentStatus.css'

const CurrentStatus = (props) => {
    console.log(props);
    console.log(window.location.pathname + window.location.search);
    return (
        <div className="status">
            <h1>It has to go through final clinical trial till September</h1>
            <p>It was only on 13 July that the reports came out with Russia claiming that their two-part phase I trial was a success.</p>

            <p>Russia has not publicly shared any findings from the vaccine trials. The World Health Organisation has been tracking over 160 leading COVID-19 vaccine candidates and hasn't reported the Gamaleya vaccine clearing the second or third phases of trials in humans. Health experts are worried that Russia is cutting corners and fast-tracking the process, putting people at risk. The WHO also stepped in and has urged the country to follow the established guidelines to produce a 'safe and effective vaccine'.</p>
        </div>
    )
}

export default CurrentStatus
