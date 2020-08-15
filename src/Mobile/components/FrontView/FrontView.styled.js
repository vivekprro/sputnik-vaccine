import Styled from 'styled-components'

const FrontViewStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    /* min-height: 100vh; */
    width: 100%;
    padding: 120px 60px;
    margin: 0 0 0 0;
    box-sizing: border-box;
    background: url('../../../assets/images/covid-9.jpg') no-repeat 100% transparent;
    background-size: 100% 100vh;

 h1 {
    color: rgb(255, 255, 255);
    font-size: 40px;
    font-weight: 800;
    margin: 0;
    padding: 0;
}

.learnMore {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 50px;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: rgb(255, 255, 255);
    font-size: 20px;
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