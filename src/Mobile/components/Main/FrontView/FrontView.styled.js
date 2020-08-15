import Styled from 'styled-components'

import VaccineBg from '../../../../assets/images/covid-9.jpg'

const FrontViewStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
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
    margin: 0;
    padding: 0 0 20px 0;
}

.learnMore {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 170px;
    height: 40px;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: black;
    font-size: 18px;
    cursor: pointer;
    margin: 0;
    padding: 0;
}

.learnMore:focus {
    outline: none;
}

.learnMore:hover {
    color: black;
    background-color: blanchedalmond;
}


`;

export default FrontViewStyle