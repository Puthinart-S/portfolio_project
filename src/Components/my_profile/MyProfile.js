import React from 'react';
import BoatImg from './imgref/boatimg.png';
import Icons from './imgref/instagram.png';
import Icons2 from './imgref/facebook.png';
import Icons3 from './imgref/github.png';
import { ProContainer, ProImg, ProWrapper, ProContent, ProContent2, ProP, ProH1,
     ProH2, WrapHead, ProIcons, ProIcons2, ProIcons3, IconWrapper, LinkImg, ProH22 } from './ProfileElements';


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
                    </ProContent2>
                    <ProContent>
                        <ProH2>About</ProH2>
                        <ProP>Name: Puthinart Sutjaritkittikul</ProP>
                        <ProP>Nickname: Boat</ProP>
                        <ProP>Age: 21</ProP>
                        <ProP>Date of Birth: 28 May 2000</ProP>
                    </ProContent>
                    <ProContent>
                        <ProH2>Contact(Link)</ProH2>
                        <IconWrapper>
                        <LinkImg href="https://www.instagram.com/_b.0.at_/"><ProIcons src={Icons} alt='ico1'/></LinkImg>
                        <LinkImg href="https://www.facebook.com/boatchirema"><ProIcons2 src={Icons2} alt='ico2'/></LinkImg>
                        <LinkImg href="https://github.com/Puthinart-S"><ProIcons3 src={Icons3} alt='ico3'/></LinkImg>
                        </IconWrapper>
                    </ProContent>
                    <ProContent>
                        <ProH2>Education</ProH2>
                        <ProP>2018 - 2022 King Mongkut's Institute of Technology Ladkrabang</ProP>
                        <ProP>2012 - 2017 Bodindecha (Sing Singhaseni) School </ProP>
                    </ProContent>
                    <ProContent>
                        <ProH2>Skills</ProH2>
                        <ProP>2D-3D Animation/Game Design/Web Design</ProP>
                        <ProP>HTML/CSS/Js/Python/C++/MySQL</ProP>
                        <ProP>Bootrap/Vue/React/Node.Js</ProP>
                    </ProContent>
                </ProWrapper>
            </ProContainer>
        </React.Fragment>
    )
};

export default MyProfile;