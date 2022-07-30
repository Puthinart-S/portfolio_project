import React, { useEffect } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBody } from './SidebarElements';

const  Sidebar = ({ isOpen, toggle }) => {

    useEffect(() =>{
        document.body.style.overflow = (isOpen) ? 'hidden' : "unset";
    }, [isOpen])
    return (
        <>
        <SidebarBody isOpen={isOpen}>
            <SidebarContainer isOpen={isOpen}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/" onClick={toggle}>Profile</SidebarLink>
                    </SidebarMenu>
                    <SidebarMenu>
                        <SidebarLink to="/Myproject" onClick={toggle}>MyProject</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </SidebarBody>
        </>
    );
};

export default Sidebar;
