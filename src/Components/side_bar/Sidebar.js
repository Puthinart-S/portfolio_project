import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';


const  Sidebar = ({ isOpen, toggle }) => {
    return (
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
    );
};

export default Sidebar;
