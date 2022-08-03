import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: #000;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    min-width: 100vw;

    @media screen and (max-width: 992px) {
        transition: 0.6s all ease;
    }
`;
export const NaviContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8vh;
    z-index: 1;
    min-width: 100vw;
    padding: 0 24px;
`;

export const NavLogo = styled.div`
    color: #fff;
    justify-self: flex-start;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: default;

    &:hover{
        color: #00ff70dd;
     }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 576px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 10%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #bbb;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 576px){
        display: none;
    } 
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkR)`
     color: #fff;
     display: flex;
     align-items: center;
     justify-content: center;
     text-decoration: none;
     padding: 0 1.5rem;
     height: 100px;
     cursor: pointer;

    &:hover {
        text-decoration: none;
        color: #cc00ff;    
    }

    &.active{
        color: #00ff70dd;
    }
`
