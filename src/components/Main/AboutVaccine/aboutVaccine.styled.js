import Styled from 'styled-components'

const AboutVaccineStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0px 0 0 0;
    padding: 30px 70px 0 70px;
    box-sizing: border-box;
    font-family: inherit;

    h1 {
        font-size: 35px;
        margin: 0;
        line-height: 40px;
        padding: 0 0 30px 0;
    }

    p {
        font-size: 21px;
        margin: 0;
        line-height: 40px;
        padding: 0 0 30px 0;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

export default AboutVaccineStyle;