import styled from 'styled-components';

export const Job = styled.li`
    position: relative;
    list-style-type: none;
    padding: 30px;
    margin: 20px;
    margin-bottom: 50px;
    border-style: groove; 
    display: flex;
    flex-wrap: wrap;
`;

export const Name = styled.h2`
    text-align: center;
    flex: 1 100%;
    justify-items: flex-start;
    order: 1;
    font-size: 32px;
    margin-bottom: 20px;
`;

export const Description = styled.label`
    margin: 5px;
    flex: 1 100%;
    text-align: left;
    order: 2;
    font-size: 16px;
`;

export const Enterprise = styled.label`
    order: 1;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 20px;
    font: bold;
    font-size: 20px;
`;
export const Button = styled.button`
    font-size: 20px;
    border: 4px solid #028dc1 !important;
    border-radius: 6px;
    order: 4;
    width: 100%;
    height: 50px;
    margin: 15px;

    &:hover {
        color: white;
        background-color:  #028dc1 !important;
        border-radius: 50px;
        transition: all 0.3s ease 0s;
    }
`;