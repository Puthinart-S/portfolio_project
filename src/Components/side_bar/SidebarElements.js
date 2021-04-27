import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';

export const SidebarBody = styled.body`
    width: 100%;
    height: 100%;
    overflow-y: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')};
`;

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    overflow-y: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;

    &:hover{
        color: #00ff70dd;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    
`;

export const SidebarWrapper = styled.div`
    color: #fff;

    &:hover{
        color: #00ff70dd;
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 125px);
    text-align: center;
    margin-right: 30px;

    @media screen and (max-width: 576px){
        grid-template-rows: repeat(2, 100px);
        margin-right: 30px

    }
`;

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        color: #00ff70dd;
    }
`;

