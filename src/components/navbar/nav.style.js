import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;
    background: rgba(0,0,0,.3);
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 26rem;
    margin-left: 16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLink = styled(Link)`    
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-size: 1.2rem;
    color: #fff;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        color: #999;
    }
`;