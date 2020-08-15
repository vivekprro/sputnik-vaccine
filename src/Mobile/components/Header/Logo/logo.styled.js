import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoStyle = Styled(Link) `

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-decoration: none;
    color: #ffffff;
    margin: 0 0 0 70px;

    h1 {
        font-size: 35px;
        font-weight: 700;
        margin: 0;
        padding: 4px 0;
    }

    h2 {
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        padding: 4px 0;
    }

`;

export default LogoStyle;