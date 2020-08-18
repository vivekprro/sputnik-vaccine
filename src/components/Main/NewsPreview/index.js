import React, {useState} from 'react'

import Button from '../../UI/Button/index'
import './newsPreview.css'

const NewsPreview = (props) => {

    const [showMore, setShowMore] = useState(false);

    const showMoreHandler = () => {
        setShowMore(!showMore);
    }
    
    return (
        <div className="newsPreview">
            <img src={require(`../../../assets/news_images/${props.image}`)} alt='' />
            <div className="news">
                <h3>{props.date}</h3>
                <h1>{props.title}</h1>
                {!showMore ? <p>{props.desc.slice(0,300)}...</p> : <p>{props.desc.slice(0,)}</p>}
                {!showMore ? <Button icon={showMore} click={showMoreHandler} >Learn more</Button> : <Button icon={showMore} click={showMoreHandler} >Show less</Button>}
            </div>
        </div>
    )
}

export default NewsPreview
