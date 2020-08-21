import React, {useState, useEffect} from 'react'
import {isMobile} from 'react-device-detect';
import {Helmet} from "react-helmet";
import Styled from 'styled-components'

import MobileNewsPreview from '../../Mobile/components/Main/NewsPreview/index'

import NewsPreview from '../../components/Main/NewsPreview/index'

import NewsData from '../../data/newsData.json'

const NewsRoomStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    margin: 0;
    padding: 20px 50px;
    box-sizing: border-box;

`;

const NewsRoom = (props) => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        setNewsData(NewsData.data.reverse());
    }, [newsData]);


    if (isMobile) {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>News Room</title>
                    <meta name="description" content="World's First Covid-19 Vaccine" />
                </Helmet> 
                {
                newsData.map((data, i) => (
                    <MobileNewsPreview
                        key={data.id}
                        routePath={`/news/${data.id}`}
                        title={data.title}
                        date={data.date}
                        image={data.image}
                        desc={data.desc} />
                ))
            }
            </div>
        )
      }

    return (
        <NewsRoomStyle>
            {
                newsData.map((data, i) => (
                    <NewsPreview
                        key={data.id}
                        routePath={`/news/${data.id}`}
                        title={data.title}
                        date={data.date}
                        image={data.image}
                        desc={data.desc} />
                ))
            }
        </NewsRoomStyle>
    )
}

export default NewsRoom
