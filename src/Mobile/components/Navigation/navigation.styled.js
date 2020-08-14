import Styled from 'styled-components'

const NavigationStyle = Styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 0;

    a {
        color: white;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        margin: 20px 0;
    }

    .active {
        color: #ffffff;
        font-weight: 700;
    }

`;

export default NavigationStyle