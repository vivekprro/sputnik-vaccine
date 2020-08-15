import Styled from 'styled-components'

const NavigationStyle = Styled.div `
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    top: 20px;

    a {
        color: #ffffff;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        margin: 0 20px;
    }

    .active, a:hover {
        color: rgba(88, 139, 241, 0.836);
    }

`;

export default NavigationStyle