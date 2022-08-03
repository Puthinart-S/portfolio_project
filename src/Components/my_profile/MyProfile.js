import React from 'react';
import BoatImg from './imgref/boatimg.png';
import Icons from './imgref/instagram.png';
import Icons2 from './imgref/facebook.png';
import Icons3 from './imgref/github.png';
import Icons4 from './imgref/phone-call.png';
import Icons5 from './imgref/email.png';
import { ProContainer, ProImg, ProWrapper, ProContent, ProContent2, ProP, ProH1,
     ProH2, WrapHead, ProIcons, ProIcons2, ProIcons3, IconWrapper, LinkImg, ProH22, ProIcons4, ProIcons5, LinkImg2, ProP3 } from './ProfileElements';


const MyProfile = () => {

    const transitionEnter = { duration: 0.25, ease: [1, 0.3, 0.5, 0.7] };
    const transitionExit = { duration: 0.25, ease: [0.8, 0.4, 0.1, 0.2] };
    const contentsVariants = {
    initial: { scale: 1, opacity: 0 },
    enter: { 
        scale: 1, 
        opacity: 1, 
        transition: { duration: 1, ...transitionEnter }
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1, ...transitionExit }
    }
  };

    return (
        <>
            <ProContainer>
                <WrapHead>
                <ProH1>Profile</ProH1>
                </WrapHead>
                <ProWrapper 
                    initial="initial"
                    animate="enter"
                    enter="enter"
                    exit="exit"
                    variants={{ enter: { transition: { staggerChildren: 0.1 } }, 
                                exit: { transition: { staggerChildren: 0.1 } } }}
                >
                    <ProContent2 variants={contentsVariants}>
                        <ProImg src={BoatImg} alt='proj1'/>
                    </ProContent2>
                    <ProContent2 variants={contentsVariants}>
                        <ProH22>Front-end Developer</ProH22>
                    </ProContent2>
                    <ProContent variants={contentsVariants}>
                        <ProH2>About</ProH2>
                        <ProP>Name: Puthinart Sutjaridkidtikul<br/>
                        Nickname: Boat<br/>
                        Date of Birth: 28 May 2000</ProP>
                    </ProContent>
                    <ProContent variants={contentsVariants}>
                        <ProH2>Contact</ProH2>
                        <IconWrapper>
                        <LinkImg2 href="#"><ProIcons4 src={Icons4} alt='ico4'/><ProP3>+6681-559-1815</ProP3></LinkImg2>
                        <LinkImg2 href="#"><ProIcons5 src={Icons5} alt='ico5'/><ProP3>puthinart.sut@gmail.com</ProP3></LinkImg2>
                        </IconWrapper>
                    </ProContent>
                    <ProContent variants={contentsVariants}>
                        <ProH2>Education</ProH2>
                        <ProP>2018 - 2022 King Mongkut's Institute of Technology Ladkrabang <br/>
                        2012 - 2017 Bodindecha (Sing Singhaseni) School </ProP>
                    </ProContent>
                    <ProContent variants={contentsVariants}>
                        <ProH2>Skills</ProH2>
                        <ProP> - AdobeXD, Figma<br/>
                         - HTML, CSS, JavaScript, PHP, Python, C++, Java, MySQL<br/>
                         - React, Node.js, Express.js, MongoDB, Firebase</ProP>
                    </ProContent>
                </ProWrapper>
            </ProContainer>
        </>
    )
};

export default MyProfile;