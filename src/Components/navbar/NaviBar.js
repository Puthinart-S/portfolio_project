import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Nav, NaviContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink} from './NavElements'




const NaviBar = ({ toggle }) => {

    return(
        <Nav>
            <NaviContainer>
                <NavLogo>MyPortfolio</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink exact to="/" style={isActive => ({ color: isActive ? "#00ff70dd" : "#fff" })}>Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/MyProject" style={isActive => ({ color: isActive ? "#00ff70dd" : "#fff" })}>MyProject</NavLink>
                    </NavItem>
                </NavMenu>
            </NaviContainer>
        </Nav>
    );
};

export default NaviBar;
