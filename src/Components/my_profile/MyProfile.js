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
    return (
        <React.Fragment>
            <ProContainer>
                <WrapHead>
                <ProH1>Profile</ProH1>
                </WrapHead>
                <ProWrapper>
                        <ProImg src={BoatImg} alt='proj1'/>
                    <ProContent2>
                        <ProH22>Front-end Developer</ProH22>
                        <ProH22>& UX/UI Designer</ProH22>
                    </ProContent2>
                    <ProContent>
                        <ProH2>About</ProH2>
                        <ProP>Name: Puthinart Sutjaridkidtikul</ProP>
                        <ProP>Nickname: Boat</ProP>
                        <ProP>Age: 22</ProP>
                        <ProP>Date of Birth: 28 May 2000</ProP>
                    </ProContent>
                    <ProContent>
                        <ProH2>Contact(Link)</ProH2>
                        <IconWrapper>
                        <LinkImg href="https://www.instagram.com/ptnrt.98o97t/"><ProIcons src={Icons} alt='ico1'/></LinkImg>
                        <LinkImg href="https://www.facebook.com/boatchiremaz"><ProIcons2 src={Icons2} alt='ico2'/></LinkImg>
                        <LinkImg href="https://github.com/Puthinart-S"><ProIcons3 src={Icons3} alt='ico3'/></LinkImg>
                        </IconWrapper>
                        <IconWrapper>
                        <LinkImg2 href="#"><ProIcons4 src={Icons4} alt='ico4'/><ProP3>+6681-559-1815</ProP3></LinkImg2>
                        <LinkImg2 href="#"><ProIcons5 src={Icons5} alt='ico5'/><ProP3>boatkakkakmak@gmail.com</ProP3></LinkImg2>
                        </IconWrapper>
                    </ProContent>
                    <ProContent>
                        <ProH2>Education</ProH2>
                        <ProP>2018 - 2022 King Mongkut's Institute of Technology Ladkrabang</ProP>
                        <ProP>2012 - 2017 Bodindecha (Sing Singhaseni) School </ProP>
                    </ProContent>
                    <ProContent>
                        <ProH2>Skills</ProH2>
                        <ProP>2D-3D Animation/Game Design/Web Design/AdobeXD</ProP>
                        <ProP>HTML/CSS/JavaScript/Bootrap/PHP/Python/C++/MySQL</ProP>
                        <ProP>React.js/Node.js/Express.js/MongoDB/Firebase</ProP>
                    </ProContent>
                </ProWrapper>
            </ProContainer>
        </React.Fragment>
    )
};

export default MyProfile;