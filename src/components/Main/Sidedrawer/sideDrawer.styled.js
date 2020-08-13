import Styled from 'styled-components'

const SideDrawerStyle = Styled.div `

    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: #f04737;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};

    .close {
        position: relative;
        right: -150px;
    }

    h1 {
        color: #ffffff;
    }

    @media (min-width: 500px) {
        display: none;
    
}

`;

export default SideDrawerStyle