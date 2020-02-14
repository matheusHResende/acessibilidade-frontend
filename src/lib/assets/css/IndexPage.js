import styled from 'styled-components';

import backgroundIndex from '../icons/backgroundIndex.svg';

export const Main = styled.main`
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secundary};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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

export const Login = styled.button`
    height: 80%;
    color: ${props => props.theme.primary};
    background: none;
    border: 2px solid ${props => props.theme.primary};
    font-size: 1em;
    padding: 5%;
    border-radius: 5%;
    cursor: pointer;
    transition: all 0.5s;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        color: ${props => props.theme.secundary};
        background: ${props => props.theme.primary};
        border: 2px solid ${props => props.theme.secundary};
    }
`;

export const HeaderButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-right: 2%;
    padding: 2%;

    button {
        margin: 2%;
    }
`;

export const FirstSection = styled.section`
    width: 90%;
    height: 50%;
    background: url(${backgroundIndex}) no-repeat center;
    background-size: cover;
    margin-top: 2%;

    p   {
        color: ${props => props.theme.secundary};
        font-size: 2.5rem;
        width: 50%;
        opacity: 100%;
        margin-left: 5%;
        margin-top: 6%;
    }

    @media screen and (max-width: 1000px){
        p{
        font-size: 2rem;
        margin-top: 4%;
        }
    }
`;

export const Hr = styled.hr`
    background: ${props => props.theme.gray};
    opacity: 50%;
    border: 0;
    width: 90%;
    height: 2px;
    margin-top: 2%;
`;

export const ButtonGroup = styled.section`
    width: 80%;
    height: 20%;
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 1000px){
        margin-top: 2%;
        height: 30%;
    }
`;

export const Card = styled.button`
    height:100%;
    width: 28%;
    padding: 2%;
    text-align: start;
    cursor: pointer;
    background: ${props => props.theme.secundary};
    color: ${props => props.theme.primary};
    border: 0;
    border-radius: 10px;

    h2 {
        font-size: 1.1rem;
    }

    p {
        font-size: 0.9rem;
    }

    &:hover {
        opacity: 0.8
    }
`;