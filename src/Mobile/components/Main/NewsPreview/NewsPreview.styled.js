import Styled from 'styled-components'

const NewsPreviewStyled = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0;
    padding:  20px 20px 0 20px;
    box-sizing: border-box;
    font-family: inherit;

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 220px;
        margin: 0;
        padding: 0;
        border: 1px solid rgb(235, 224, 224);
        border-radius: 2px;
    }

    .news {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    .news h3 {
        color: hsl(35, 100%, 49%);
        padding: 15px 0;
        margin: 0;
    }

    .news h1 {
        color: rgb(66, 54, 54);
        font-size: 22px;
        line-height: 30px;
        text-align: justify;
        text-transform: capitalize;
        padding: 0px 0 20px 0;
        margin: 0;
    }

    .news p {
        color: #737373;
        font-size: 18px;
        line-height: 35px;
        text-align: justify;
        padding: 0 0 20px 0;
        margin: 0;
    }

`;

export default NewsPreviewStyled;