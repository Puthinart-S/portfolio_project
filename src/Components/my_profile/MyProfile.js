import React from 'react';
import BoatImg from './imgref/boatimg.png';
import Icons from './imgref/instagram.png';
import Icons2 from './imgref/facebook.png';
import Icons3 from './imgref/github.png';
import Icons4 from './imgref/phone-call.png';
import Icons5 from './imgref/email.png';
import Icons6 from './imgref/imgpdf.png';
import pdf from './imgref/resume.pdf';
import { ProContainer, ProImg, ProWrapper, ProContent, ProContent2, ProP, ProH1,
     ProH2, WrapHead, ProIcons, ProIcons2, ProIcons3, IconWrapper, LinkImg, ProH22, ProIcons4, ProIcons5, LinkImg2, ProP3, ProIcons6 } from './ProfileElements';


const MyProfile = () => {


    const transitionEnter = { duration: 0.25, ease: [0.2, 0.35, 0.45, 0.5] };
    const transitionExit = { duration: 0.25, ease: [0.8, 0.4, 0.1, 0.2] };
    const contentsVariants = {
    initial: { scale: 0, opacity: 0 },
    enter: { 
        opacity: 1, 
        transition: { duration: 0.01, ...transitionEnter, type: "spring" },
        x: [-500, -500, -500, -500, -500, -400, -200, -150, 0, 0, 0, 0, 0],
        y: [-1000, -800, -600, -400, -500, -400, -200, -150, 0, -150, 0, -100, 0],
        scale: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9, 1, 3, 2.75, 1.25, 1],
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1, ...transitionExit, type: "spring" }
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
                    variants={{ enter: { transition: { staggerChildren: 0.5 } }, 
                                exit: { transition: { staggerChildren: 0.1 } } }}
                >
                    <ProContent2 variants={contentsVariants}>
                        <ProImg src={BoatImg} alt='proj1'/>
                    </ProContent2>
                    <ProContent2 variants={contentsVariants}>
                        <ProH22>Front-end Developer</ProH22>
                        <ProH22>& UX/UI Designer</ProH22>
                    </ProContent2>
                    <ProContent variants={contentsVariants}>
                        <ProH2>About</ProH2>
                        <ProP>Name: Puthinart Sutjaridkidtikul<br/>
                        Nickname: Boat<br/>
                        Date of Birth: 28 May 2000</ProP>
                        <ProP style={{ fontWeight: 'bold' }}>Here my resume:</ProP>
                        <IconWrapper>
                        <LinkImg2 ><a href={pdf} target="_blank" rel="noreferrer"><ProIcons6 src={Icons6} alt='ico6'/></a></LinkImg2>
                        </IconWrapper>
                    </ProContent>
                    <ProContent variants={contentsVariants}>
                        <ProH2>Contact</ProH2>
                        <IconWrapper>
                        <LinkImg2 ><ProIcons4 src={Icons4} alt='ico4'/><ProP3>+6681-559-1815</ProP3></LinkImg2>
                        <LinkImg2 ><ProIcons5 src={Icons5} alt='ico5'/><ProP3>puthinart.sut@gmail.com</ProP3></LinkImg2>
                        </IconWrapper>
                    </ProContent>
                    <ProContent variants={contentsVariants}>
                        <ProH2>Education</ProH2>
                        <ProP><ProP style={{ fontWeight: 'bold' }}>2018 - 2022</ProP>&nbsp;&nbsp;&nbsp;King Mongkut's Institute of Technology Ladkrabang</ProP>
                        <ProP><ProP style={{ fontWeight: 'bold' }}>2012 - 2017</ProP>&nbsp;&nbsp;&nbsp;Bodindecha (Sing Singhaseni) School </ProP>
                    </ProContent>
                    <ProContent variants={contentsVariants}>
                        <ProH2>Skills</ProH2>
                        <ProP> <ProP style={{ fontWeight: 'bold' }}>Front-end languages</ProP>
                        &nbsp;&nbsp;&nbsp;- HTML, CSS, JavaScript, React</ProP>
                        <ProP> <ProP style={{ fontWeight: 'bold' }}>Back-end languages</ProP>
                        &nbsp;&nbsp;&nbsp;- Node.js, Express.js, Python, Java and C++</ProP>
                        <ProP> <ProP style={{ fontWeight: 'bold' }}>Database</ProP>
                        &nbsp;&nbsp;&nbsp;- MongoDB, Firebase and MySQL</ProP>
                        <ProP> <ProP style={{ fontWeight: 'bold' }}>Tools</ProP>
                        &nbsp;&nbsp;&nbsp;- AdobeXD and Figma</ProP>
                        <ProP> <ProP style={{ fontWeight: 'bold' }}>CMS</ProP>
                        &nbsp;&nbsp;&nbsp;- Wordpress and WooCommerce</ProP>
                    </ProContent>
                </ProWrapper>
            </ProContainer>
        </>
    )
};

export default MyProfile;