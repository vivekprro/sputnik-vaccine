import React from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

import Button from '../../Button/index'
import NewsPreviewStyled from './NewsPreview.styled'

const NewsRoom = (props) => {

    return (
        <NewsPreviewStyled>
            <Helmet>
                <meta charSet="utf-8" />
                <title>News Room</title>
                <meta name="description" content={props.desc} />
            </Helmet> 
            <img src={require(`../../../../assets/news_images/${props.image}`)} alt='' />
            <div className="news">
                <h3>{props.date}</h3>
                <h1>{props.title}</h1>
                <Link to={props.routePath}>
                    <Button>Read more</Button>
                </Link>
            </div>
        </NewsPreviewStyled>
    )
}

export default NewsRoom
