import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { StyledBanner } from '../../components/Banner/Banner.style'
import { StyledDiv, StyledContent } from './Homepage.style'
import { StyledButtonBuyTicket } from '../../components/Button/Button.style'
import Ticket from '../../assets/Image/Ticket.svg'
import { StyledBannerHomePage, StyledBannerHomePageRodape } from '../../components/Banner/Banner.style'
import LineUp  from '../../components/LineUp/LineUp'
import { StyledTitleLineUp } from '../../pages/Homepage/Homepage.style'
import { StyledFooter } from '../../components/Footer/Footer.style'
import { StyledContentBuyTicket } from '../../pages/Homepage/Homepage.style'
import { StyledGradienteBackground } from '../../components/GlobalStyle/GlobalStyle.style'
import BannerLight from '../../assets/Image/Banner.svg'
import BannerBoreal from '../../assets/Image/BannerBoreal.svg'
import { useThemeContext } from '../../context/Theme'
import People from '../../assets/Image/People.svg'
import Guitarrista from '../../assets/Image/Guitarrista.svg'
import Guitarra from '../../assets/Image/Guitarra.svg'
import Pessoas from '../../assets/Image/BannerRodape.svg'

export const Homepage = () => {

    const { theme } = useThemeContext()  

    return (
    <React.Fragment>
        <Navbar />
        <StyledBanner url={theme==='boreal' ? BannerBoreal : BannerLight} />
        <StyledGradienteBackground>
        <StyledDiv>
            <StyledContent>
                <StyledBannerHomePage url={theme==='boreal' ? Guitarrista : People} />
                <StyledContentBuyTicket>
                    <h1>11 e 12 de Março <span>Aluródromo de São Paulo</span></h1>
                    <p> 
                        Hora de programar nossa memória com novas lembranças! 
                        Uma nova experiência sobre música, linguagens e, claro, 
                        tecnologia! Somos um festival diverso, com vários artistas
                        e referências. Divirta-se!
                    </p>
                    <StyledButtonBuyTicket>     
                        Comprar ingresso! <img src={Ticket}  alt='Ticket'/>
                    </StyledButtonBuyTicket>
                </StyledContentBuyTicket>
            </StyledContent>
            <StyledTitleLineUp>/Line-Up/</StyledTitleLineUp>
            <LineUp 
                day='SÁBADO <11/03>'
                b1='System Of a DOM'
                b2='Python Maiden'
                b3='Apollo Cliente 2001'
                b4='Bon Java'
                b5='NickCallback'
                b6='Linkin Promises'
                b7='Fullstack Fighters'
                b8='Papa React'
                b9='Angular in Chains'
                b10='Agnostic Front-end'
                b11='SlipkNode'
                b12='Pink Flutter'
                b13='Kiss'/>
            <LineUp 
                day='DOMINGO <12/03>'
                b1='Lana Del Ploy'
                b2='Dua Lib'
                b3='The Backnd'
                b4='CSS Styles'
                b5='ArrayAna Grande'
                b6='Dj Query'
                b7='Miley Cypress'
                b8='The Bootstrap Boys'
                b9='Json Derulo'
                b10='CloudPlay'
                b11='Dev Lovato'
                b12='Kylie Milog'
                b13='Jenkins Brothers'
                b14='Rubycat Dolls'/> 
            </StyledDiv>
            <StyledBannerHomePageRodape url={theme==='boreal' ? Guitarra : Pessoas} />
            <StyledFooter />
        </StyledGradienteBackground>
    </React.Fragment>
    )

}


export default Homepage 