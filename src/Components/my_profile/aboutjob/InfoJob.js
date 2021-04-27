import React, { useRef } from 'react';
import {useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 50px;
    overflow: ${({ showModal }) => (showModal ? 'auto' : 'hidden')};
`;

const ModalWrapper = styled.div`
    max-width: 100%;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #000;
    color: #000;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 10;
    border-radius: 25px;
    margin-bottom: 50px;
    padding: 0;
    grid-gap: 32px;
    align-items: center;

    @media screen and (max-width: 576px){
        grid-template-rows: repeat(1,33%);
        grid-gap: 32px;
        margin-bottom: 75px;
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
    max-height: 500px;
    transition: all 0.2s ease-in-out;
    overflow-y: scroll;
    -ms-overflow-style: none;

    p {
        margin-bottom: 25%;
        margin-right: 2rem;
    }
    @media screen and (max-width: 992px){
        font-size: 1rem;
    };

    @media screen and (max-width: 576px){
        max-height: 300px;
        font-size: 0.75rem;
        text-align: center;
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

    @media screen and (max-width: 576px){
        top: -100px;
    };
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
                    <ModalContent style={{lineHeight:"1rem"}}>
                        <h1>User Experience</h1>
                        <p>1.รวบรวม ค้นคว้า ออกแบบ ทดสอบ และประเมินผล สิ่งต่าง ๆ ที่เกี่ยวข้องกับผู้ใช้งาน <br/>
                        2. ใช้งานหลักการออกแบบต่าง ๆ มาใช้ออกแบบ UX</p>
                        <h1>User Interface</h1>
                        <p>1.ออกแบบส่วนติดต่อผู้ใช้งาน Wireframe/Mockup/Prototype <br/>
                        2. ความต้องการของลูกค้ามาทำ UI <br/>
                        3. ประสานงานร่วมกันกับ Programmer</p>
                        <br/>
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