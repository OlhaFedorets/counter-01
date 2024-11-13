import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
}

export const Button = ({title, onClickHandler}: ButtonPropsType) => {


    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};


