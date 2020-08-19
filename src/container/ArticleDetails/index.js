import React from 'react'
import {Helmet} from "react-helmet";

import './articleDetails.css';

const ArticleDetails = (props) => {
    console.log(props);
    return (
        <div className="articleDetails">
            <Helmet>
                <meta charSet="utf-8" />
                <title>hhh</title>
                <meta name="description" content='jjjj' />
            </Helmet>
            {/* <img src={require(`../../../assets/news_images/${props.image}`)} alt='' /> */}
            <div className="news">
                <h3>jjjj</h3>
                <h1>ggg</h1>
               
            </div>
        </div>
    )
}

export default ArticleDetails
