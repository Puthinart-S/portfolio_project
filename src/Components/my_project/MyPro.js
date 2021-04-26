import React, { useState } from 'react';
import Img1 from './ImgPro/img11.png';
import Img2 from './ImgPro/img12.png';
import Img3 from './ImgPro/img13.png';
import Img4 from './ImgPro/img14.jpg';
import { MyprojectContainer, MyprojectH1, MyprojectWrapper, MyprojectCard, MyprojectImg, MyprojectH2, MyprojectP } from './MyProElements';
import { Modal } from './projectlist/ProJectLists';


const MyPro = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    };

    return (
        <React.Fragment>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <MyprojectContainer id="myproj">
                <MyprojectH1>My Project</MyprojectH1>
                <MyprojectWrapper>
                    <MyprojectCard onClick={openModal}>
                        <MyprojectImg src={Img1}/>
                        <MyprojectH2>Name</MyprojectH2>
                        <MyprojectP>1Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry</MyprojectP>
                    </MyprojectCard>
                    <MyprojectCard>
                        <MyprojectImg src={Img2}/>
                        <MyprojectH2>Name2</MyprojectH2>
                        <MyprojectP>2Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry</MyprojectP>
                    </MyprojectCard>
                    <MyprojectCard>
                        <MyprojectImg src={Img3}/>
                        <MyprojectH2>Name3</MyprojectH2>
                        <MyprojectP>3Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry</MyprojectP>
                    </MyprojectCard>
                    <MyprojectCard>
                        <MyprojectImg src={Img4}/>
                        <MyprojectH2>Name4</MyprojectH2>
                        <MyprojectP>4Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry</MyprojectP>
                    </MyprojectCard>
                </MyprojectWrapper>
            </MyprojectContainer>
        </React.Fragment>
    );
};

export default MyPro;
