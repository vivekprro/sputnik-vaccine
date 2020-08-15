import Styled from 'styled-components'

const HeaderStyle = Styled.div `

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 13vh;
    width: 100%;
    position: fixed;
    font-family: inherit;
    top: 0;
    left: 0;
    background-color: rgba(45, 46, 48, 0.836);
    padding: 0 50px;
    margin: 0;
    box-sizing: border-box;
    border-bottom: rgba(9, 26, 121, 0.836);
    z-index: 90;

`;

export default HeaderStyle;