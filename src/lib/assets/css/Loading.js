import styled, { keyframes } from 'styled-components';


const spin = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(250deg); }
    50% { transform: rotate(180deg); }
    75% { transform: rotate(110deg); }
    90% { transform: rotate(350deg); }
    100% { transform: rotate(360deg); }
`;

export const Loader = styled.h1`
    border: 30px solid ${props => props.theme.gray};
    border-radius: 50%;
    border-top: 30px solid ${props => props.theme.secundary};
    width: 200px;
    height: 200px;
    transition: all ease-in-out;
    animation: ${spin} 3s linear infinite;
    -webkit-animation: ${spin} 3s linear infinite;
    -moz-animation: ${spin} 3s linear infinite;
    -o-animation: ${spin} 3s linear infinite;
`;

export const Main = styled.main`
    background: ${props => props.theme.primary};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;