import React from 'react';
import { FaBars } from 'react-icons/fa';
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
                        <NavLink to="/">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/MyProject">MyProject</NavLink>
                    </NavItem>
                </NavMenu>
            </NaviContainer>
        </Nav>
    );
};

export default NaviBar;
