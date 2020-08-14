import React from 'react'

import MainContentStyle from './MainContent.styled'

const MainContent = (props) => {

    const banners = [
        {title: 'Success Rate', desc: '90%', class: 'green'},
        {title: 'Anti-body Span', desc: 'Not known yet', class: 'blue'},
        {title: 'Side-effects', desc: 'Short time fever', class: 'red'}
    ];

    return (
        <MainContentStyle>
            <h1>World's First Covid-19 Vaccine</h1>
            <h2>Sputnik Vaccine</h2>
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
            <h4>Russia had become the world's first country to grant regulatory approval to a COVID-19 vaccine after less than two months of human testing, a move hailed by Moscow as evidence of its scientific prowess.</h4>
        </MainContentStyle>
    )
}

export default MainContent
