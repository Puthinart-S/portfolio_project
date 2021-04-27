import React from 'react';
import BoatImg from './imgref/boatimg.png';
import { ProContainer, ProImg, ProWrapper, ProContent, ProP, ProH1, ProH2, WrapHead } from './ProfileElements';

const MyProfile = () => {
    return (
        <React.Fragment>
            <ProContainer>
                <WrapHead>
                <ProH1>Profile</ProH1>
                </WrapHead>
                <ProWrapper>
                        <ProImg src={BoatImg} alt='proj1'/>
                    <ProContent>
                        <ProH2>About</ProH2>
                        <ProP>Name: Puthinart Sutjaritkittikul</ProP>
                        <ProP>Nickname: Boat</ProP>
                        <ProP>Age: 21</ProP>
                        <ProP>Date of Birth: 28 May 2000</ProP>
                    </ProContent>
                    <ProContent>
                        <ProH2>Contact</ProH2>
                        <ProP>Tel. : 081-559-1815</ProP>
                        <ProP>Email : boatkakkakmak@gmail.com</ProP>
                    </ProContent>
                </ProWrapper>
            </ProContainer>
        </React.Fragment>
    )
};

export default MyProfile;