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
    background-color: rgb(255, 255, 255);
    padding: 0 50px;
    margin: 0;
    box-sizing: border-box;
    /* border-bottom: 1px solid black; */
    z-index: 90;

`;

export default HeaderStyle;