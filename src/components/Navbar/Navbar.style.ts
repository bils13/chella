import { NavLink as BaseNavLink} from 'react-router-dom'
import styled from 'styled-components'


export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 32px 0.5rem;
    background-color: ${(props) => props.theme.navbar};
    max-width: 100vw;
    position: relative;
    img {
        max-width: 200px;
        width: 100%;
        height: 64px;
        &:hover {
            cursor: pointer;
        }
    }
    img:nth-child(2) {
        height: 32px;
        max-width: 32px;
        width: 100%;
        &:hover {
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px 60px;
        img:nth-child(2) {
            display: none;
        }
    }

    @media only screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 32px 0;
    }
`

export const StyledLinksNav = styled.div`
    padding-top: 32px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (min-width: 1440px) {
        padding: 0;
        width: 50%;
    }
`

export const NavLink = styled(BaseNavLink)`
    font-family: 'Raleway', sans-serif;
    color: white;
    font-family: 20px;
    font-weight: 600;
    text-decoration: none;
    &:hover {
        border-bottom: 1px solid #fff;
        cursor: pointer;
    }
    &.active {
        border-bottom: 1px solid #fff;
    }
`

export const Theme = styled.p`
    font-family: 'Raleway', sans-serif;
    color: white;
    font-family: 20px;
    font-weight: 600;
    text-decoration: none;
    &:hover {
        border-bottom: 1px solid #fff;
        cursor: pointer;
    }
`