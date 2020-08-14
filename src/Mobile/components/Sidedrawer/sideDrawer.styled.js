import Styled from 'styled-components'

const SideDrawerStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: #f04637de;
    padding: 32px 30px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    font-family: inherit;

    .close {
        position: relative;
        left: 300px;
        padding: 20px 0;
    }

    h1 {
        font-size: 41px;
        font-weight: 700;
        color: #fff;
    }

`;

export default SideDrawerStyle