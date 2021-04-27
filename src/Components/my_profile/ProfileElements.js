import styled from 'styled-components';

export const ProContainer = styled.div`
    width : 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    padding-bottom: 32px;
    overflow-x: hidden;

    @media screen and (max-width: 991px){
        height: 100%;
    };

    @media screen and (max-width: 575px){
        height: 100%;

    };

`;

export const ProWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 64px;
    padding: 0 75px;


    @media screen and (max-width: 991px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1,50%);
        grid-gap: 64px;

    };

    @media screen and (max-width: 575px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1,40%);
        grid-gap: 8px;
        padding: 0;
        margin: 0;
    };
`;

export const ProContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    transition: all 0.2s ease-in-out;
    max-height: 340px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`;

export const ProImg = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: -65px;
`;

export const WrapHead = styled.div`
    width: 100%;
    height: 50px;
    background: #00ff70dd;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`;

export const ProH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-top: 16px;
    margin-bottom: 32px;

    @media screen and (max-width: 575px){
        font-size: 2.5rem;
    };
`;

export const ProH2 = styled.h2`
    font-size: 2rem;
    margin-top: 16px;
    margin-bottom: 32px;
    color: #fff;
    @media screen and (max-width: 575px){
        font-size: 1.75rem;
    };

`;

export const ProP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff;
    @media screen and (max-width: 575px){
        font-size: 1rem;
    };
`;