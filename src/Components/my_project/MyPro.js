import React, { useEffect, useState } from 'react';
import Img1 from './ImgPro/img11.png';
import Img2 from './ImgPro/img12.png';
import Img3 from './ImgPro/img13.png';
import Img4 from './ImgPro/img14.jpg';
import { MyprojectContainer, MyprojectH1, MyprojectWrapper, MyprojectCard, MyprojectImg, MyprojectH2, MyprojectP } from './MyProElements';
import { Modal, Modal2, Modal3, Modal4 } from './projectlist/ProJectLists';


const MyPro = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    };

    const [showModal2, setShowModal2] = useState(false);

    const openModal2 = () => {
        setShowModal2(prev2 => !prev2)
    };

    const [showModal3, setShowModal3] = useState(false);

    const openModal3 = () => {
        setShowModal3(prev3 => !prev3)
    };

    const [showModal4, setShowModal4] = useState(false);

    const openModal4 = () => {
        setShowModal4(prev4 => !prev4)
    };

    useEffect(() =>{
        (document.body.style.overflow = (showModal || showModal2 || showModal3 || showModal4 ) ? 'hidden' : 'unset');

    }, [showModal, showModal2, showModal3, showModal4]);


    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Modal2 showModal2={showModal2} setShowModal2={setShowModal2}/>
            <Modal3 showModal3={showModal3} setShowModal3={setShowModal3}/>
            <Modal4 showModal4={showModal4} setShowModal4={setShowModal4}/>
            <MyprojectContainer id="myproj">
                <MyprojectH1>My Project</MyprojectH1>
                <MyprojectWrapper>
                    <MyprojectCard onClick={openModal}>
                        <MyprojectImg src={Img1}/>
                        <MyprojectH2>World-Cup-Analysis</MyprojectH2>
                        <MyprojectP>Website that bringing matches In the FIFA World Cup from 1930 to 2018, 
                            analyse the places and display them in the most likely parts of the world.</MyprojectP>
                        <MyprojectH2>Click for More Info </MyprojectH2>
                    </MyprojectCard>
                    <MyprojectCard onClick={openModal2}>
                        <MyprojectImg src={Img2}/>
                        <MyprojectH2>History of Computer</MyprojectH2>
                        <MyprojectP>Website for learning about computer</MyprojectP>
                        <MyprojectH2>Click for More Info </MyprojectH2>
                    </MyprojectCard>
                    <MyprojectCard onClick={openModal3}>
                        <MyprojectImg src={Img3}/>
                        <MyprojectH2>BKK Crime Scene</MyprojectH2>
                        <MyprojectP>Website for arouse people to have an awareness.</MyprojectP>
                        <MyprojectH2>Click for More Info </MyprojectH2>
                    </MyprojectCard>
                    <MyprojectCard onClick={openModal4}>
                        <MyprojectImg src={Img4}/>
                        <MyprojectH2>Swamp Ancient Ruin</MyprojectH2>
                        <MyprojectP>Created Custom landscape game</MyprojectP>
                        <MyprojectH2>Click for More Info </MyprojectH2>
                    </MyprojectCard>
                </MyprojectWrapper>
            </MyprojectContainer>
        </>
    );
};

export default MyPro;
