import React, { useContext, useState } from 'react'
import { StyledNavbar, StyledLinksNav, NavLink, Theme } from './Navbar.style'
import MenuLateral from '../Menu/Menu'
import LogoWhite from '../../assets/Image/LogoWhite.svg'
import MenuIcon from '../../assets/Image/Menu.svg'
import { useNavigate } from 'react-router-dom'
import { useThemeContext } from '../../context/Theme'



export const Navbar = () => {

    const [menu, setMenu] = useState(0)
    const navigate = useNavigate();

    const { changeTheme } = useThemeContext()

    return (
        <StyledNavbar>
            <img src={LogoWhite} alt='Logo CodeChella' onClick={() => navigate('/')} />
            <img src={MenuIcon} alt='Menu' onClick={menu===0 ? () => setMenu(1) : () => setMenu(0)}/>
            {
                window.matchMedia("(min-width: 768px)").matches
                    ? 
                    <StyledLinksNav>
                        <NavLink to='/experience'>A experiência</NavLink>
                        <NavLink to='/sectorMap'>Mapa de Setores</NavLink>
                        <NavLink to='/info'>Informações</NavLink>
                        <NavLink to='/ticket'>Ingresso</NavLink>
                        <Theme onClick={changeTheme} >Mudar tema</Theme>
                    </StyledLinksNav>
                    :
                    menu===1 ? (<MenuLateral />) : ''
            }              
        </StyledNavbar>
    )
}

export default Navbar