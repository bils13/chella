import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledLi, StyledList } from './Menu.style'
import { useThemeContext } from '../../context/Theme'

export const Menu = () => {
    const navigate = useNavigate()
    const { changeTheme } = useThemeContext()

    return (
        <StyledList>
            <StyledLi onClick={() => navigate('/experience')}>A experiência</StyledLi>
            <StyledLi onClick={() => navigate('/sectorMap')}>Mapa de Setores</StyledLi>
            <StyledLi onClick={() => navigate('/info')}>Informações</StyledLi>
            <StyledLi onClick={() => navigate('/ticket')}>Ingresso</StyledLi>
            <StyledLi onClick={changeTheme}>Mudar Tema</StyledLi>
        </StyledList>
    )
}

export default Menu