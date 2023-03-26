import React from 'react'
import { StyledLi, StyledList } from '../UI/Menu.style'

export const Menu = () => {
    return (
        <StyledList>
            <StyledLi>A experiência</StyledLi>
            <StyledLi>Mapa de Setores</StyledLi>
            <StyledLi>Informações</StyledLi>
            <StyledLi>Ingresso</StyledLi>
        </StyledList>
    )
}

export default Menu