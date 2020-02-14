import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    transition: all .5s;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background};

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: 100%;
        
        #deficiente{
            margin-top: calc(5% + 50px);
        }
        
        h1 {
            top: 0;
        }
    }
`;

export const Title = styled.h1`
    position: absolute;
    top: 5%;
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.theme.secundary};
`;

export const Card = styled.button`
    height: 60%;
    max-width: 1000px;
    flex: 1;
    margin: 1%;
    margin-top: 0;
    margin-bottom: 0;
    background-color: ${props => props.theme.secundary};
    border-radius: 20px;
    border: 5px solid ${props => props.theme.secundary};
    color: ${props => props.theme.primary};
    box-shadow: ${props => props.theme.shadow};
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    font-size: 3rem;
    font-weight: 700;
    transition: all 0.5s ease-in-out;
    
    &:hover, &:focus{
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.secundary};
    }

    @media screen and (max-width: 1000px) {
        width: 80%;
        margin: 1%;
    }
`;