import React, { useState } from 'react';
import { Button } from '@mui/material';
import './authButton.css';

const AuthButton = ({ onClick, label, className, ...rest }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (event) => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200);
        onClick?.(event);
    };

    const combinedClassName = `${className ? className + ' ' : ''}auth-button ${isClicked ? 'clicked' : ''}`;

    return (
        <Button
            onClick={handleClick}
            classes={{ root: combinedClassName }}
            {...rest}
        >
            {label}
        </Button>
    );
};

export default AuthButton;