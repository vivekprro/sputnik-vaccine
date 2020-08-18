import React from 'react';
import Styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ButtonStyle = Styled.button `

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 160px;
    height: 45px;
    border: 2px solid rgba(45, 46, 48);
    border-radius: 2px;
    background-color: transparent;
    transition: ease-in-out background-color 0.2s;
    color: rgb(10, 0, 0);
    font-size: 18px;
    cursor: pointer;
    margin: 0 0 30px 0;
    padding: 0;

    &:focus {
        outline: none;
    }

    &:hover {
        color: #ffffff;
        background-color: rgba(45, 46, 48);
    }

`;

const Button = (props) => {
    return (
        <ButtonStyle onClick={props.click}>
            {props.children} {!props.icon ? <IoIosArrowDown /> : <IoIosArrowUp /> }
        </ButtonStyle>
    )
}

export default Button
