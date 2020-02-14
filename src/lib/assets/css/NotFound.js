import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: ${props => props.theme.background};
    
    a {
        text-decoration: none;
    }
`;

export const Text = styled.h1`
    font-size: 5vw;
    color: ${props => props.theme.secundary};
`;

export const BackButton = styled.div`
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.secundary};
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .5;
    transition: all .8s;
    margin-top: 5%;
    cursor: pointer;
    color: ${props => props.theme.secundary};

    .material-icons {
        font-size: 5rem;
    }

    &:hover, &:focus{
        opacity: 1;
    }
`;