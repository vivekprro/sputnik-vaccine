import Styled from 'styled-components'

const NavigationStyle = Styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        color: white;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        box-sizing: border-box;
        margin: 0;
        padding: 20px;
    }

    a p {
        margin: 0 0 0 20px;
    }

    .active, a:hover {
        background-color: rgba(65, 72, 83, 0.938);
        font-weight: 700;
    }

`;

export default NavigationStyle