import styled from 'styled-components';

export const MyprojectContainer = styled.div`
    width : 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #00ff70dd;
    padding-bottom: 32px;

    @media screen and (max-width: 991px){
        height: 100%;
    };

    @media screen and (max-width: 575px){
        height: 100%;
        padding-bottom: 64px;
    };
`;

export const MyprojectWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 32px;
    padding: 0 75px;

    @media screen and (max-width: 991px){
        grid-template-columns: 1fr 1fr; 
    };

    @media screen and (max-width: 575px){
        grid-template-columns: 1fr;
        grid-gap: 64px;
        padding: 0 50px;
    };
`;

export const MyprojectCard = styled.div`
    background: #000;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    border-radius: 25px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        border: 3px solid #ff00ff;
    };
`;

export const MyprojectImg = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const MyprojectH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-top: 16px;
    margin-bottom: 32px;

    @media screen and (max-width: 575px){
        font-size: 2rem;
    };
`;

export const MyprojectH2 = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const MyprojectP = styled.p`
    color: #fff;
    font-size: 1rem;
    text-align: center;
`;