import Styled from 'styled-components'

const NavigationStyle = Styled.div `
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    top: 20px;

    a {
        color: black;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        margin: 0 20px;
    }

    .active {
        color: #1d99ff;
    }

`;

export default NavigationStyle