import styled from 'styled-components';

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
    height: 30%;
`;

export const Logo = styled.div`
    height: 15%;
    width: 30%;
    background: url(${props => props.theme.logo}) no-repeat center;
    background-size: contain;
    margin-top: 2%;
`;

export const MainTitle = styled.h1`
    width: 50%;
    text-align: center;
    margin: 0 auto;
    padding-top: 1%;
`;

export const Form = styled.form`
    border: 1px solid ${props => props.theme.secundary};
    width: 40%;
    padding: 2%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const InputGroup = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 74px;
    background: ${props => props.theme.primary};
    border: 0;
    border-bottom: 1px solid ${props => props.theme.secundary};
    display: flex;
    flex-direction: column;
    padding: 1%;
    padding-top: 2%;
    margin-bottom: 5%;
    box-shadow: ${props => props.theme.shadow};

    input {
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

export const Button = styled.button`
    width: 90%;
    height: 36px;
    font-size: 1.2rem;
    border-radius: 4px;
    border: 2px solid  ${props => props.theme.secundary};
    box-shadow: ${props => props.theme.shadow};
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
    margin-bottom: 5%;
    display: none;
`;

export const ForgotPassword = styled.a`
    text-decoration: none;
    font-size: 1rem;
    color: ${props => props.theme.secundary};
    font-weight: 700;
    margin-top: 2%;
    margin-bottom: 2%;

    &:hover, &:focus {
        opacity: 0.8;
    }
`;

export const NewAtPlatform = styled.p`
    color: ${props => props.theme.gray};
    font-size: 1rem;
    margin-top: 2%;

    a {
        text-decoration: none;
        font-size: 1rem;
        color: ${props => props.theme.secundary};
        font-weight: 700;

        &:hover, &:focus {
            opacity: 0.8;
        }
    }
`;