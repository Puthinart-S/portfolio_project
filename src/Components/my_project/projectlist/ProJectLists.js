import React, { useRef } from 'react';
import {useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const TogBody = styled.body`
    overflow-y: ${({ showModal }) => (showModal ? 'hidden' : 'auto')};
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    padding: 50px;

`;

const ModalWrapper = styled.div`
    max-width: 100%;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
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

    @media screen and (max-width: 575px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1,33%);
        grid-gap: 84px;
        margin-bottom: 75px;
    };

`;

const ModalImg = styled.img`
    width : 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`;

const ModalContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    line-height: 2.0;
    color: #141414;
    font-size: 1rem;
    max-height: 500px;
    transition: all 0.2s ease-in-out;
    overflow-y: scroll;

    p {
        margin-bottom: 20rem;
        margin-right: 2rem;
    }
    @media screen and (max-width: 991px){
        font-size: 1rem;
    };

    @media screen and (max-width: 575px){
        max-height: 400px;
        font-size: 0.75rem;
        text-align: center;
    };
`;

const CloseModalButton = styled(FaTimes)`
    color: blue;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
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
            <TogBody showModal={showModal}>
            <Background ref={modelRef}>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={require('../ImgPro/img11.png').default} alt='proj1'/>
                    <ModalContent>
                        <h1>Name</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal
                    (prev => !prev)} />
                </ModalWrapper>
                </animated.div>
            </Background>
            </TogBody>
            ) : null}
            
        </React.Fragment>
    );
};
