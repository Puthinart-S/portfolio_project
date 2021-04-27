import styled from 'styled-components';

export const ProContainer = styled.div`
    width : 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    padding-bottom: 32px;

    @media screen and (max-width: 992px){
        height: 100%;
    };

    @media screen and (max-width: 576px){
        height: 100%;

    };

`;

export const ProWrapper = styled.div`
    max-width: 100%;
    margin: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 64px;
    padding: 0 45px;
    max-height: 100%;



    @media screen and (max-width: 992px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1,20%);
        grid-gap: 32px;
 

    };

    @media screen and (max-width: 576px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1,20%);
        grid-gap: 8px;
        margin: 75px;

    };
`;

export const ProContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    margin: 20px;
    transition: all 0.2s ease-in-out;
    max-height: 280px;
    background: #00ff70dd;
    border-radius: 10px;

    &:hover{
        border-radius: 50px;
        border: 3px solid #ff00ff;
    }
`;

export const ProImg = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: -65px;
    transition: all 0.2s ease-in-out;
    border-radius: 1000px;
   
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

    @media screen and (max-width: 576px){
        font-size: 2.5rem;
    };
`;

export const ProH2 = styled.h2`
    font-size: 2rem;
    margin-top: 16px;
    margin-bottom: 32px;
    color: #000;
    @media screen and (max-width: 576px){
        font-size: 1.75rem;
    };

`;

export const ProP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #000;
    @media screen and (max-width: 576px){
        font-size: 1rem;
    };
`;

export const ProIcons = styled.img`
    width: 30%;
    height: 30%;

    @media screen and (max-width: 576px){
        width: 15%;
        height: 15%;
    }
`;

export const ProIcons2 = styled.img`
    width: 30%;
    height: 30%;

    @media screen and (max-width: 576px){
        width: 15%;
        height: 15%;
    }
`;

export const ProIcons3 = styled.img`
    width: 30%;
    height: 30%;

    @media screen and (max-width: 576px){
        width: 15%;
        height: 15%;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 576px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;


export const LinkImg = styled.a`
    display: flex;
     align-items: center;
     justify-content: center;
     text-decoration: none;
     list-style: none;
     padding: 0;
     margin:0;
     

`;

export const ProContent2 = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 20px;
    transition: all 0.2s ease-in-out;
    max-height: 280px;
    border-radius: 10px;
`;

export const ProH22 = styled.h2`
    font-size: 2rem;
    margin-top: 16px;
    margin-bottom: 32px;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #ff00ff;

    }

    @media screen and (max-width: 576px){
        font-size: 1.75rem;
    };

`;

export const ProP2 = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff;
    @media screen and (max-width: 576px){
        font-size: 1rem;
    };
`;