import styled from 'styled-components';

import cadeado from '../icons/cadeado.svg';

export const Main = styled.main`
    background: ${props => props.theme.background};
    color: ${props => props.theme.secundary};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
`;

export const Header = styled.header`
    background: ${props => props.theme.secundary};
    color: ${props => props.theme.primary};
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    height: 100%;
    width: 25%;
    margin-left: 2%;
    background: url(${props => props.theme.logo}) no-repeat center;
    background-size: contain;
`;

export const Form = styled.form`
    width: 95%;
    height: 40%;
    margin-top: 5%;
    margin-left: 5%;

    h1 {
        width: 50%;
    }

    button {
        width: 40%;
        height: 50px;
        font-size: 1.2rem;
        border-radius: 4px;
        border: 2px solid ${props => props.theme.secundary};
        box-shadow: 2px 2px 2px ${props => props.theme.shadow};
        background: ${props => props.theme.secundary};
        color: ${props => props.theme.primary};
        transition: all 0.5s ease-in-out;
        margin-bottom: 2%;
        text-transform: uppercase;
        cursor: pointer;

        &:hover, &:focus {
            background: ${props => props.theme.primary};
            color: ${props => props.theme.secundary};
        }
    }
`;

export const InputGroup = styled.div`
    box-sizing: border-box;
    width: 40%;
    height: 80px;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secundary};
    border: 0;
    border-bottom: 1px solid ${props => props.theme.secundary};
    display: flex;
    flex-direction: column;
    padding: 1%;
    padding-top: 1%;
    margin-top: 2%;
    margin-bottom: 2%;
    box-shadow: ${props => props.theme.shadow};

    input {
        color: ${props => props.theme.secundary};
        border: 0;
        padding: 0;
        margin: 0;
        border-radius: 0;
        background: none;
        height: 75px;
        width: 100%;
        font-size: 1.5rem;
        margin-left: 1%;
        margin-right: 1%;

        &::placeholder{
            font-size: 1rem
        }
    }

    label{
        margin: 0;
        font-size: 1rem;
        color: ${props => props.theme.secundary};
        margin-left: 2%
    }
`;

export const Error = styled.span`
    font-size: 1.5rem;
    margin-top: 2%;
    margin-bottom: 2%;
    display: none;
`;

export const Image = styled.div`
    width: 20%;
    height: 20%;
    position: absolute;
    background: url("${cadeado}")  no-repeat right;
    background-size: contain;
    z-index: 5;
    transform: scale(8);
    top: 12%;
`;