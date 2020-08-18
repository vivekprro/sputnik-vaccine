import React, {useState, useEffect} from 'react'
import {isMobile} from 'react-device-detect';

import NewsData from '../../Data/newsData.json'

import MobileNewsPreview from '../../Mobile/components/Main/NewsRoom/index'

import NewsPreview from '../../components/Main/NewsPreview/index'
import './newsRoom.css'

const NewsRoom = (props) => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        setNewsData(NewsData.data);
    }, [newsData]);

    if (isMobile) {
        return (
            <div>
                {
                newsData.map((data, i) => (
                    <MobileNewsPreview
                        key={data.id}
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
        <div className="newsRoom">
            {
                newsData.map((data, i) => (
                    <NewsPreview
                        key={data.id}
                        title={data.title}
                        date={data.date}
                        image={data.image}
                        desc={data.desc} />
                ))
            }
        </div>
    )
}

export default NewsRoom
