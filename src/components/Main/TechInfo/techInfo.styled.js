import Styled from 'styled-components'

const TechInfoStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 30px 70px 0 70px;
    box-sizing: border-box;
    font-family: inherit;

    .techPreview {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: inherit;
        box-sizing: border-box;
    }

    .techDetail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 570px;
        margin: 0;
        padding: 0 0 0 45px;
        box-sizing: border-box;
    }

    img {
        width: 570px;
        height: 300px;
        margin: 0;
        padding: 0 45px 30px 0;
    }

    h1 {
        font-size: 35px;
        text-align: justify;
        line-height: 40px;
        padding: 0 0 30px 0;
        margin: 0;
    }

    h2 {
        font-size: 30px;
        margin: 0;
        padding: 0 0 20px 0;
    }

    p {
        color: #737373;
        font-size: 18px;
        line-height: 35px;
        text-align: justify;
        padding: 0 0 30px 0;
        margin: 0;
    }

`;

export default TechInfoStyle