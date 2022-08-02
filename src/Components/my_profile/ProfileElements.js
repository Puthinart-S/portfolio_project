import styled, { keyframes } from 'styled-components';

const animdiv1 = keyframes`
    0% {};
    10% {};
    20% {};
    30% {};
    40% {};
    50% {};
    60% {};
    70% {};
    80% {};
    80% {};
    100% {};
`;


export const ProContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    padding-bottom: 32px;
    

    @media screen and (max-width: 992px){

    };

    @media screen and (max-width: 576px){

    };

`;

export const ProWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 64px;
    padding: 0 45px;
    margin: 0 auto;

    @media screen and (min-width: 2560px){
 

    };
   

    @media screen and (max-width: 992px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1,20%);
        grid-gap: 32px;
 

    };

    @media screen and (max-width: 576px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1, 10%);
        grid-gap: 24px;

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
    max-height: 300px;
    background: #00ff70dd;
    border-radius: 10px;
    animation: ${animdiv1} 5s both;

    &:hover{
        border-radius: 40px;
        border: 3px solid #ff00ff;
    }
    
`;

export const ProImg = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: -65px;
    transition: all 0.2s ease-in-out;
    border-radius: 1000px;

    @media screen and (max-width: 992px){
        width: 50%;
        height: 50%;
    };
    @media screen and (max-width: 992px){
        width: 50%;
        height: 50%;
    };
   
`;

export const WrapHead = styled.div`
    min-width: 100vw;
    max-height: 7.5vh;
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
        font-size: 0.75rem;
    };
`;

export const ProP3 = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #000;
    margin: 0;
    @media screen and (max-width: 576px){
        font-size: 0.75rem;
    };
`;

export const ProIcons = styled.img`
    width: 30%;
    height: 30%;

    &:hover{
        background-color: #cc00ff;
        border-radius: 8px;
    }

    @media screen and (max-width: 576px){
        width: 10%;
        height: 10%;
    }
`;

export const ProIcons2 = styled.img`
    width: 30%;
    height: 30%;

    &:hover{
        background-color: #cc00ff;
        border-radius: 50px;
    }

    @media screen and (max-width: 576px){
        width: 10%;
        height: 10%;
    }
`;

export const ProIcons3 = styled.img`
    width: 30%;
    height: 30%;

    &:hover{
        background-color: #cc00ff;
        border-radius: 50px;
    }

    @media screen and (max-width: 576px){
        width: 10%;
        height: 10%;
    }
`;

export const ProIcons4 = styled.img`
    width: 22.5%;
    height: 22.5%;

    &:hover{
        background-color: #cc00ff;
        border-radius: 50px;
    }

    @media screen and (max-width: 576px){
        width: 10%;
        height: 10%;
    }
`;

export const ProIcons5 = styled.img`
    width: 20%;
    height: 20%;

    &:hover{
        background-color: #cc00ff;
        border-radius: 50px;
    }

    @media screen and (max-width: 576px){
        width: 10%;
        height: 10%;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
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
     margin-bottom: 1vw;

`;

export const LinkImg2 = styled.a`
    display: flex;
    flex-flow: column;
     align-items: center;
     justify-content: center;
     text-decoration: none;
     list-style: none;
     padding: 0;

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
