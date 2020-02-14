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

    a{
        display: flex;
        flex: auto;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 50px;
        margin: 15px;
        order: 4;
        text-decoration: none;
    }
`;

export const Name = styled.h2`
    text-align: center;
    flex: 1 100%;
    justify-items: flex-start;
    order: 1;
    font-size: 40px;
    margin-bottom: 20px;
`;

export const Description = styled.label`
    margin: 5px;
    flex: 1 100%;
    text-align: left;
    order: 2;
    font-size: 18px;

    p{
        font-weight: bold;
    }

`;

export const Enterprise = styled.label`
    order: 1;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 20px;
    font: bold;
    font-weight: bold;
    font-size: 25px;
`;
export const Button = styled.button`
    font-size: 20px;
    border: 4px solid #151515 !important;
    border-radius: 6px;
    order: 4;
    width: 100%;
    height: 50px;
    &:hover {
        color: white;
        background-color:  #151515 !important;
        border-radius: 50px;
        transition: all 0.3s ease 0s;
    }
`;