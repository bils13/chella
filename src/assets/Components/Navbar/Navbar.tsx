import React, { useState } from 'react'
import { StyledNavbar } from '../UI/Navbar.style'
import MenuLateral from '../Menu/Menu'
import LogoWhite from '../../Image/LogoWhite.svg'
import Menu from '../../Image/Menu.svg'
import { StyledLinksNav } from '../UI/LinksNav.style'

export const Navbar = () => {

    const [menu, setMenu] = useState(0)

    return (
        <StyledNavbar>
            <img src={LogoWhite} alt='Logo CodeChella' />
            <img src={Menu} alt='Menu' onClick={menu===0 ? () => setMenu(1) : () => setMenu(0)}/>
            {
                window.matchMedia("(min-width: 768px)").matches
                    ? 
                    <StyledLinksNav>
                        <a href=''>A experiência</a>
                        <a href=''>Mapa de Setores</a>
                        <a href=''>Informações</a>
                        <a href=''>Ingresso</a>
                    </StyledLinksNav>
                    :
                    menu===1 ? (<MenuLateral />) : ''
            }              
        </StyledNavbar>
    )
}

export default Navbar