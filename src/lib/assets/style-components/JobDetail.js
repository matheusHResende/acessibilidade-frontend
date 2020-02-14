import styled from 'styled-components';


export const JobDetail = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-left: 300px;
    position: relative;
    padding: 14px;
    border-style: groove; 
    display: flex;
    flex-wrap: wrap;

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

export const HeadDetail = styled.header`
    width: 100%;
    padding: 10px 0;
    margin-bottom: 50px;
    h2{
        font-size: 30px;
    }
    label{
        font-size: 20px;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 22px;
    font-size: 25px;
    padding: 5px 30px;
    border-radius: 5px;
    background-color: #151515;
    color: #FFFFFF;
    cursor:pointer;

    svg{
        color: #FFFFFF;
        margin-right: 25px;
      }
`;

export const Details = styled.main`
    width: 100%;
    display: inline-grid;
    font-size: 20px;
    h3{
        font-size: 30px;
        color: #151515;
        border-bottom: 5px solid #151515;
        text-align: center;
    }
    p{
        font-size: 25px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 5px;
    }
`;