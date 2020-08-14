import Styled from 'styled-components'

const HeaderStyle = Styled.div `

    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 13vh;
    width: 100%;
    position: fixed;
    font-family: inherit;
    top: 0;
    left: 0;
    background-color: #f5eeee;
    padding: 0 30px;
    margin: 0;
    box-sizing: border-box;
    /* border-bottom: 1px solid rgb(211, 194, 194); */
    z-index: 90;

`;

export default HeaderStyle;