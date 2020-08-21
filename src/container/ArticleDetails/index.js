import React, {useState, useEffect} from 'react';
import {isMobile} from 'react-device-detect';
import Styled from 'styled-components'

import MobileFullarticle from '../../Mobile/components/Main/FullArticle/index'

import NewsData from '../../Data/newsData.json'
import Fullarticle from '../../components/Main/FullArticle/index'


const ArticleDetailStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 50px 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;

`

const ArticleDetails = (props) => {

    const [article, setArticle] = useState({
        image: ''
    });
    const [articleId, setArticleId] = useState('');

    useEffect(() => {

        const articleId = props.match.params.articleId;
        const article = NewsData.data.find(article => article.id == articleId);
        
        setArticleId(articleId);
        setArticle(article);

    }, [article, props.match.params.articleId, articleId]);

    if (article.image === '') {
        return null;
    }

    if (isMobile) {
        return (
            <div>
                <MobileFullarticle
                    title={article.title}
                    image={article.image}
                    desc={article.desc}
                    date={article.date} />
            </div>
        )
      }

    return (
        <ArticleDetailStyle>
            <Fullarticle
                title={article.title}
                image={article.image}
                desc={article.desc}
                date={article.date} />
        </ArticleDetailStyle>
    )
}

export default ArticleDetails
