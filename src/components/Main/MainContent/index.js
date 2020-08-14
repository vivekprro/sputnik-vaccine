import React from 'react'

import './mainContent.css'

const MainContent = () => {

    const banners = [
        {title: 'Success Rate', desc: '90%', class: 'green'},
        {title: 'Anti-body Span', desc: 'Not known yet', class: 'blue'},
        {title: 'Side-effects', desc: 'Short time fever', class: 'red'}
    ]

    return (
        <div className="mainContent">
            <h1>World's First Covid-19 Vaccine</h1>
            <h2>Sputnik V</h2>
            <div className="banner">
                {
                    banners.map((banner, i) => (
                        <div key={i} className={banner.class}>
                            <h3>{banner.title}</h3>
                            <p>{banner.desc}</p>
                        </div>
                    ))
                }
            </div>
            <h3>Russia had become the world's first country to grant regulatory approval to a COVID-19 vaccine after less than two months of human testing, a move hailed by Moscow as evidence of its scientific prowess.</h3>
        </div>
    )
}

export default MainContent
