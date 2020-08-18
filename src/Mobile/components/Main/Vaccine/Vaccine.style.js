import Styled from 'styled-components'

const VaccineStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    padding: 0px 20px 30px 20px;

    h1 {
        margin: 0;
        padding: 0;
    }

    img {
        width: 100%;
    }

    div {
        border: 1px solid rgba(241, 233, 233, 0.74);
        border-radius: 10px;
        background: rgb(198, 198, 236);
        margin: 0;
        padding: 10px;
    }

    div p {
        font-size: 18px;
        text-align: justify;
        color: rgb(66, 82, 224);
    }

`;

export default VaccineStyle