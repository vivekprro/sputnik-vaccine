import Styled from 'styled-components'

const VaccineStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    padding: 0px 20px 30px 20px;

    h1 {
        font-size: 23px;
        line-height: 30px;
        text-align: justify;
        padding: 0px 0 0px 0;
        margin: 0;
    }

    img {
        width: 100%;
    }

    div {
        border: 1px solid rgba(241, 233, 233, 0.74);
        border-radius: 10px;
        background: rgb(198, 198, 236);
        margin: 0;
        padding: 15px 20px;
    }

    div p {
        font-size: 18px;
        font-weight: 500;
        text-align: justify;
        color:  #4f5de3;
        line-height: 30px;
        text-align: justify;
        padding: 0;
        margin: 0;
    }

`;

export default VaccineStyle