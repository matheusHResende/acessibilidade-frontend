import styled from 'styled-components';

export const Header = styled.header`
    top: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    background: #151515;
    margin-bottom: 100px;
    z-index: 1;
`;

export const Main = styled.main`
    width: 100%;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 1100px) {
        margin: 0;
    }
`;
export const Logo = styled.image`
    
`;