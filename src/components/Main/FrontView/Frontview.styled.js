import Styled from 'styled-components'

import VaccineBg from '../../../assets/images/covid-9.jpg'

const FrontviewStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    min-height: 100vh;
    width: 100%;
    padding: 120px 60px;
    margin: -13vh 0 0 0;
    box-sizing: border-box;
    background-image: url(${VaccineBg});
    background-size: 100% 100vh;

    h1 {
        color: rgb(255, 255, 255);
        font-size: 40px;
        font-weight: 800;
        margin: 0;
        padding: 0;
    }

`;

export default FrontviewStyle