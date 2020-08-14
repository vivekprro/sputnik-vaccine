import Styled from 'styled-components'

const MainContentStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    h1 {
        font-size: 30px;
        font-weight: 800;
        margin: 30px 0 0 0;
        padding: 0;
        text-align: center;
        color: black;
    }

    h2 {
        margin: 0;
        padding: 10px 0;
        color: #eb2314;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin: 10px 0 0 0;
    }

    .banner {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .banner div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 350px;
        height: 140px;
        margin: 10px 0;
        padding: 50px 0;
        border: 1px solid rgb(219, 202, 202);
        border-radius: 50%;
        box-sizing: border-box;
    }

    .banner div h3 {
        color: #ffffff;
        font-size: 25px;
        font-weight: 600;
        text-align: center;
        margin: 20px 0 ;
        padding: 0;
    }

    .banner div p {
        color: #ffffff;
        font-size: 17px;
        font-weight: 400;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

    .blue {
        background-color: blue;
    }

    h4 {
        font-size: 17px;
        font-weight: 500;
        line-height: 30px;
        text-align: justify;
        margin: 0;
        padding: 25px;
    }


`;

export default MainContentStyle