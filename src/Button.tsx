import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
}

export const Button = ({title, onClickHandler}: ButtonPropsType) => {

    return (
        <StyledButton onClick={onClickHandler}>{title}</StyledButton>
    );
};



const StyledButton = styled.button`
    margin: 20px 0 0 20px;
    width: 120px;
    height: 40px;
    background-color: #47a5af;
    border: none;
    border-radius: 10px;
    font-size: 16px;
`

