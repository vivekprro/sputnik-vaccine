import Styled from 'styled-components'

const FullArticlesStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 0;
    padding:  20px 20px 0 20px;
    box-sizing: border-box;
    font-family: inherit;

    img {
        width: 100%;
        height: 220px;
        margin: 0;
        padding: 0;
        border: 1px solid rgb(235, 224, 224);
        border-radius: 2px;
    }
    

    h1 {
        font-size: 23px;
        line-height: 30px;
        text-align: justify;
        text-transform: capitalize;
        padding: 0 0 10px 0;
        margin: 0;
    }

    h4 {
        color: hsl(35, 100%, 49%);
        padding: 10px 0;
        margin: 0;
        text-align: left;
    }


    p {
        color: #737373;
        font-size: 18px;
        line-height: 35px;
        text-align: justify;
        padding: 0 0 20px 0;
        margin: 0;
    }

`;

export default FullArticlesStyle