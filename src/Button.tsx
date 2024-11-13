import React from 'react';

type ButtonPropsType = {
    title: string
}

export const Button = ({title}: ButtonPropsType) => {

    const onClickHandler = () => {}

    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};
