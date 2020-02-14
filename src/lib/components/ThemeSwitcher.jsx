import React from 'react';
import styled from 'styled-components';

const ThemeSwitcherButton = styled.button`
    position: absolute;
    right: 2%;
    bottom: 2%;
    border: 0;
    background: 0;
    cursor: pointer;

    &:hover {
        transform: rotate(20deg)
    }

    &:focus {
        transform: rotate(360deg)
    }

    .material-icons {
        color: ${props => props.theme.secundary}
    }
`;


const ThemeSwitcher = ({ toggleTheme }) => (
    <ThemeSwitcherButton onClick={toggleTheme} >
        <i className="material-icons">
            brightness_medium
        </i>
    </ThemeSwitcherButton>
);

export default ThemeSwitcher;