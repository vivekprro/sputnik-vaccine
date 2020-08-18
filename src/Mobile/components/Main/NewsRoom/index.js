import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

import Button from '../../Button/index'
import NewsPreviewStyled from './NewsPreview.styled'

const NewsRoom = (props) => {

    const [showMore, setShowMore] = useState(false);

    const showMoreHandler = () => {
        setShowMore(!showMore);
    }

    return (
        <NewsPreviewStyled>
            <img src={require(`../../../../assets/news_images/${props.image}`)} alt='' />
            <div className="news">
                <h3>{props.date}</h3>
                <h1>{props.title}</h1>
                {!showMore ? <p>{props.desc.slice(0,200)}...</p> : <p>{props.desc.slice(0,)}</p>}
                {!showMore ? <Button icon={showMore} click={showMoreHandler} > Show more</Button> : <Button icon={showMore} click={showMoreHandler} >Show less</Button>}
            </div>
        </NewsPreviewStyled>
    )
}

export default NewsRoom
