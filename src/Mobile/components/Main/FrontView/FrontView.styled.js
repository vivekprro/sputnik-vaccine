import Styled from 'styled-components'

import VaccineBg from '../../../../assets/images/covid-9.jpg'

const FrontViewStyle = Styled.div `

    display: flex;
    /* flex-direction: column; */
    justify-content: flex-end;
    align-items: center;
    min-height: 50vh;
    width: 100%;
    padding: 120px 0 50px 30px;
    margin: -13vh 0 0 0;
    box-sizing: border-box;
    background: url(${VaccineBg}) no-repeat 100% transparent;
    background-size: 100% 50vh;

 h1 {
    color: rgb(255, 255, 255);
    font-size: 25px;
    font-weight: 800;
    line-height: 50px;
    width: 200px;
    margin: 0;
    padding: 0 0px;
}


`;

export default FrontViewStyle