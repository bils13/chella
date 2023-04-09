import React, { useContext, useState } from 'react'
import LogoBlack from '../../assets/Image/LogoBlack.svg'
import LogoWhite from '../../assets/Image/LogoWhite.svg'
import { useThemeContext } from '../../context/Theme'

interface FooterProps {
    className?: string
    LogoBlack?: string
}

export const Footer = ( {className}: FooterProps ) => {

    const { theme } = useThemeContext()

    return (
        <footer className={className}>
            <img src={theme==='boreal' ? LogoWhite : LogoBlack } />
            <div>
                <p>Desenvolvido por Gabriel Souza.</p>
                <p>Projeto fictício sem fins comerciais.</p>
            </div>
        </footer>
    )
}

export default Footer