import Styled from 'styled-components'

const SideDrawerStyle = Styled.div `

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: rgba(1, 5, 12, 0.938);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    font-family: inherit;

    a {
        text-decoration: none;
    }

    .close {
        position: relative;
        left: 300px;
        padding: 20px 0;
    }

    .sideTitle {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 150px;
        background-color: rgba(45,46,48, 0.938);
    }

    .sideTitle h1 {
        font-size: 41px;
        font-weight: 700;
        color: #fff;
        padding: 0 0 30px 0;
        margin: 0;
    }

`;

export default SideDrawerStyle