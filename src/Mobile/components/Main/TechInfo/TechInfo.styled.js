import Styled from 'styled-components'

const TechInfoStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    font-family: inherit;

    img {
        width: 100%;
        height: 180px;
        margin: 0;
        padding: 0px 0 20px 0;
        margin: 0;
    }

    h1 {
        font-size: 23px;
        line-height: 30px;
        text-align: justify;
        text-transform: capitalize;
        padding: 0px 0 20px 0;
        margin: 0;
    }

    p {  
        color: #737373;
        font-size: 19px;
        line-height: 35px;
        text-align: justify;
        padding: 0px 0 15px 0;
        margin: 0;
    }

`

export default TechInfoStyle;