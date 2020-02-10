import styled from 'styled-components';

export const JobsContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-left: 300px;
    @media (max-width: 1600px) {
        width: 70%;
    }
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 1000px) {
        width: 100%;
        margin: 0;
    }
`;

export const JobsCompiled = styled.ul`
    margin-top: 170px;
    flex: 1;
    width: 100%;
`;