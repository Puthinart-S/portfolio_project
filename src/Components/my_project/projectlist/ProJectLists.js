import React, { useRef } from 'react';
import {useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import Icons from '../ImgPro/github.png';
import Icons2 from '../ImgPro/web.png';
import Icons3 from '../ImgPro/demo.png';



const Background = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 50px;
    overflow: ${({ showModal }) => (showModal ? 'auto' : 'hidden')};
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display: none;
    }
`;

const ModalWrapper = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #000;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 25px;
    margin-bottom: 50px;
    padding: 0;
    grid-gap: 32px;
    align-items: center;

    @media screen and (max-width: 576px){
        max-width: 100vw;
        max-height: 100vh;
        grid-template-columns: 1fr;
        grid-gap: 32px;
        margin-bottom: 75px;
    };

`;

const ModalImg = styled.img`
    width : 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
    max-height: 475px;

    @media screen and (max-width: 576px){
        height: 25vh;
    };
`;

const ModalContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    line-height: 2.0;
    color: #fff;
    font-size: 1rem;
    max-height: 62.5vh;
    transition: all 0.2s ease-in-out;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: scroll;

    &::-webkit-scrollbar{
        display: none;
    }

    p {
        margin-bottom: 25%;
        margin-right: 2rem;
    }
    @media screen and (max-width: 992px){
        font-size: 1rem;
    };

    @media screen and (max-width: 576px){
        height: 50vh;
        font-size: 0.75rem;
        text-align: center;
        margin-left: 5vw;
    };
`;

const CloseModalButton = styled(FaTimes)`
    color: #00ff70dd;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;

    &:hover{
        color: #ff00ff;
    }
`;

const ProP = styled.p`
    font-size: 1rem;
    color: #fff;
    padding: 1vw;
    @media screen and (max-width: 576px){
        font-size: 0.7rem;
    };
`;
const ProH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    padding: 1vw;

    @media screen and (max-width: 576px){
        font-size: 1.5rem;
    };
`;

const ProIcons = styled.img`
    width: 10%;
    height: 10%;
    background-color: #fff;
    border-radius: 100%;

    &:hover{
        background-color: #cc00ff;
        border-radius: 25%;
    }

    @media screen and (max-width: 576px){
        width: 10%;
        height: 10%;
    }
`;

export const Modal = ({ showModal, setShowModal }) => {
    const modelRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)` 
    })

    return (
        <React.Fragment>
            {showModal ? (
            <Background ref={modelRef}>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={require('../ImgPro/img11.png').default} alt='proj1'/>
                    <ModalContent style={{lineHeight:"2rem"}}>
                        <ProH1>World-Cup-Analysis</ProH1>
                        <ProP>Take the information of every match of the World Cup and draw on the parts that people are likely 
                            interested in creating a graph and searching for analysis. <br/>
                               &nbsp;&nbsp;&nbsp; - Graph the number of championships that each team has. <br/>
                               &nbsp;&nbsp;&nbsp; - Graph the number of matches won, lost, and draws of each team, ranked according to the number of matches. <br/>
                               &nbsp;&nbsp;&nbsp; - Graph the total number of goals each team has scored. <br/><br/>
                            Front-end languages : HTML, CSS and JavaScript<br/>
                            Back-end language : Python<br/><br/>
                            <div style={{display: "flex",  justifyContent: "space-around"}} >
                                <ProIcons src={Icons} alt='ico' onClick={() => window.open('https://github.com/Puthinart-S/World-Cup-Analysis', '_blank')}/>
                                <ProIcons src={Icons2} alt='ico2' onClick={() => window.open('https://www.it.kmitl.ac.th/~it61070185//webpro/index.html?fbclid=IwAR2rIiV5ytKqncS32vdFYGn4jnqPJHpVQAAGkBGykM28_MbNN0tbU3qxcXo', '_blank')}/>
                            </div>
                        </ProP> 
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal
                    (prev => !prev)} />
                </ModalWrapper>
                </animated.div>
            </Background>
            ) : null}
            
        </React.Fragment>
    );
};



export const Modal2 = ({ showModal2, setShowModal2 }) => {
    const modelRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal2 ? 1 : 0,
        transform: showModal2 ? `translateY(0%)` : `translateY(-100%)` 
    })
    return (
        <React.Fragment>
            {showModal2 ? (
            <Background ref={modelRef}>
                <animated.div style={animation}>
                <ModalWrapper showModal2={showModal2}>
                    <ModalImg src={require('../ImgPro/img12.png').default} alt='proj2'/>
                    <ModalContent>
                        <ProH1>History of Computer</ProH1>
                        <ProP>Website about history of computer in every era with some gimmicks<br/><br/>
                        Front-end languages: HTML, CSS and JavaScript <br/><br/>
                        <div style={{display: "flex",  justifyContent: "space-around"}} >
                                <ProIcons src={Icons} alt='ico' onClick={() => window.open('https://github.com/sutha001/HistoryCom', '_blank')}/>
                                <ProIcons src={Icons2} alt='ico2' onClick={() => window.open('https://hiscom.netlify.app/', '_blank')}/>
                        </div>
                        </ProP>
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal2
                    (prev2 => !prev2)} />
                </ModalWrapper>
                </animated.div>
            </Background>
            ) : null}
            
        </React.Fragment>
    );
};


export const Modal3 = ({ showModal3, setShowModal3 }) => {
    const modelRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal3 ? 1 : 0,
        transform: showModal3 ? `translateY(0%)` : `translateY(-100%)` 
    })

    return (
        <React.Fragment>
            {showModal3 ? (
            <Background ref={modelRef}>
                <animated.div style={animation}>
                <ModalWrapper showModal3={showModal3}>
                    <ModalImg src={require('../ImgPro/img13.png').default} alt='proj3'/>
                    <ModalContent>
                        <ProH1>BKK Crime Scene</ProH1>
                        <ProP>Website about problem of road in Bangkok that must solve with some gimmicks<br/><br/>
                        Front-end languages: HTML, CSS and JavaScript<br/><br/>
                        <div style={{display: "flex",  justifyContent: "space-around"}} >
                                <ProIcons src={Icons} alt='ico' onClick={() => window.open('https://github.com/sutha001/Goodhealthandwellbeing', '_blank')}/>
                                <ProIcons src={Icons2} alt='ico2' onClick={() => window.open('https://bkkcrimescene.netlify.app/', '_blank')}/>
                        </div>
                        </ProP>
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal3
                    (prev3 => !prev3)} />
                </ModalWrapper>
                </animated.div>
            </Background>
            ) : null}
            
        </React.Fragment>
    );
};



export const Modal4 = ({ showModal4, setShowModal4 }) => {
    const modelRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal4 ? 1 : 0,
        transform: showModal4 ? `translateY(0%)` : `translateY(-100%)` 
    })

    return (
        <React.Fragment>
            {showModal4 ? (
            <Background ref={modelRef}>
                <animated.div style={animation}>
                <ModalWrapper showModal4={showModal4}>
                    <ModalImg src={require('../ImgPro/img14.png').default} alt='proj4'/>
                    <ModalContent>
                        <ProH1>Virtual Exhibition Web Application Framework</ProH1>
                        <ProP>We develop a demo 3D web application framework for virtual exhibitions and online stores.<br/> A framework is a tool for the organizer to set up a shop or event as well as an application for the customer.<br/> It allows customers to virtually visit the online event and maximize the user experience.<br/> In addition, virtually visiting the online event is safer in the Coronavirus epidemic.<br/><br/>
                        Front-end languages: React.js, Redux and Three.js<br/>
                        Back-end languages: Node.js and Express.js<br/>
                        Database: MongoDB<br/><br/>
                        <div style={{display: "flex",  justifyContent: "space-around"}} >
                                <ProIcons src={Icons} alt='ico' onClick={() => window.open('https://github.com/Nomoki/WebappVEX', '_blank')}/>
                                <ProIcons src={Icons3} alt='ico3' onClick={() => window.open('https://drive.google.com/file/d/1eEvF9pswEARX3bOLFICn0bb5ieviPEUZ/view?usp=sharing', '_blank')}/>
                        </div>
                        </ProP>
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal4
                    (prev4 => !prev4)} />
                </ModalWrapper>
                </animated.div>
            </Background>
            ) : null}
            
        </React.Fragment>
    );
};