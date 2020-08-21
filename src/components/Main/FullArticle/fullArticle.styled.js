import Styled from 'styled-components'

const FullArticleStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 70%;
    margin: 30px 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;

    img {
        width: 100%;
        height: 300px;
    }

    h1 {
        font-size: 28px;
        text-align: justify;
        line-height: 40px;
        padding: 10px 0;
        margin: 0;
        
    }

    h4 {
        color: hsl(35, 100%, 49%);
        padding: 20px 0 0 0;
        margin: 0;
        text-align: left;
    }

    p {
        color: #737373;
        font-size: 18px;
        line-height: 35px;
        text-align: justify;
        padding: 20px 0;
        margin: 0;
    }

`;

export default FullArticleStyle