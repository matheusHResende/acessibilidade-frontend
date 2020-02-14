import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secundary};
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
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
    background: url(${props => props.theme.logo}) center;
    background-size: contain;
`;

export const HeaderButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-right: 2%;
    padding: 2%;
`;

export const Login = styled.button`
    height: 80%;
    color: ${props => props.theme.primary};
    background: none;
    border: 2px solid ${props => props.theme.primary};
    font-size: 1em;
    padding: 15%;
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

export const Title = styled.h1`
    font-size: 2rem;
    margin: 2%;
`;

export const Form = styled.form`
    border: 1px solid ${props => props.theme.secundary};
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 2%;
    padding-bottom: 0.3%;
`;

export const InputGroup = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 74px;
    background: ${props => props.theme.primary};
    border: 0;
    border-bottom: 1px solid ${props => props.theme.secundary};
    display: flex;
    flex-direction: column;
    padding: 1%;
    padding-top: 2%;
    margin-bottom: 3%;
    box-shadow: 2px 2px 5px ${props => props.theme.shadow};

    input, select {
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
        color: ${props => props.theme.secundary};

        &::placeholder{
            font-size: 1rem
        }
    }

    select option{
            color: ${props => props.theme.secundary};
            background: ${props => props.theme.background};
        }

    label{
        margin: 0;
        font-size: .8rem;
        color: ${props => props.theme.secundary};
        margin-left: 2%
    }
`;

export const DuoInputGroup = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 74px;
    border: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5%;

    div {
        width: 45%;
        box-sizing: border-box;
        height: 100%;
        border: 0;
        display: flex;
        flex-direction: column;
        background: none;
        background: ${props => props.theme.primary};
        border-bottom: 1px solid ${props => props.theme.secundary};
        box-shadow: 2px 2px 5px ${props => props.theme.shadow};
    }

    input {
        border: 0;
        padding: 0;
        margin: 0;
        border-radius: 0;
        background: none;
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
        font-size: .8rem;
        color: ${props => props.theme.secundary};
        margin-left: 2%
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    font-size: 1.2rem;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.secundary};
    box-shadow: 2px 2px 2px ${props => props.theme.shadow};
    background: ${props => props.theme.secundary};
    color: ${props => props.theme.primary};
    transition: all 0.5s ease-in-out;
    margin-bottom: 2%;

    &:hover, &:focus {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.secundary};
    }
`;

export const Error = styled.span`
    font-size: 1.2rem;
    margin: 1%;
    display: none;
    text-align: center;
`;

export const BackButton = styled.div`
    position: absolute;
    top: 15%;
    left: 3%;
    width: 50px;
    height: 50px;
    border: 0;
    opacity: 0.5;
    cursor: pointer;
    color: ${props => props.theme.secundary};
    background: ${props => props.theme.primary};

    .material-icons {
        font-size: 3rem;
    }

    &:hover, &:focus {
        opacity: 1
    }
`;