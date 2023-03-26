import React from 'react'
import { StyledDiv } from '../UI/MainHomePage.style'
import { StyledButtonBuyTicket } from '../UI/Button.style'
import UrlBanner from '../../Image/People.svg'
import Ticket from '../../Image/Ticket.svg'
import { StyledBannerHomePage } from '../UI/Banner.style'
import { StyledTitleLineUp, StyledTitleDate, StyledTitle } from '../UI/Title.style'
import { StyledText, StyledTextHomePage } from '../UI/Text.style'
import { StyledContent, StyledContentBuyTicket } from '../UI/Content.style'
import LineUp from '../LineUp/LineUp'



export const Main = () => {
    return (
        <StyledDiv>
            <StyledContent>
                <StyledBannerHomePage 
                    width='100%'
                    backgroundImage={UrlBanner}
                    height='381px'
                    backgroundRepeat='no-repeat'
                    backgroundPosition='center'
                    backgroundSize='cover'/>
                <StyledContentBuyTicket>
                    <StyledTitleDate
                        fontFamily="'Raleway', Arial, Helvetica, arial"
                        fontWeight='700'
                        fontSize='32px'
                        color='#444444'
                        textAlign='center'>
                        11 e 12 de Março <span>Aluródromo de São Paulo</span>
                    </StyledTitleDate>
                    <StyledTextHomePage
                        fontFamily="'Raleway', Arial, Helvetica, arial"
                        fontWeight='500'
                        fontSize='20px'
                        color='#444444'
                        textAlign='center'>
                        Hora de programar nossa memória com novas lembranças! 
                        Uma nova experiência sobre música, linguagens e, claro, 
                        tecnologia! Somos um festival diverso, com vários artistas
                        e referências. Divirta-se!
                    </StyledTextHomePage>
                    <StyledButtonBuyTicket
                        backgroundColor='#2E7BA2' 
                        border='none' 
                        color='#fff' 
                        padding='8px 16px' 
                        fontSize='20px'
                        fontWeight='700'
                        borderRadius='16px'
                        >
                        Comprar ingresso! <img src={Ticket}  alt='Ticket'/>
                    </StyledButtonBuyTicket>
                </StyledContentBuyTicket>
            </StyledContent>
            <StyledTitleLineUp
                fontFamily="'Calistoga', Arial, Helvetica, arial"
                fontWeight='400'
                fontSize='48px'
                color='#444444'
                textAlign='center'>
                    /Line-Up/
            </StyledTitleLineUp>
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
            {/* <LineUp 
                day='DOMINGO <12/03>'
                b1='Lana Del Ploy'
                b2='Dua Lib'
                b3='The Backnd CSS Styles'
                b4='ArrayAna Grande'
                b5='Dj Query'
                b6='Miley Cypress'
                b7='The Bootstrap Boys'
                b8='Json Derulo'
                b9='CloudPlay'
                b10='Dev Lovato'
                b11='Kylie Milog'
                b12='Jenkins Brothers'
                b13='Rubycat Dolls'/> */}
            
    </StyledDiv>
    )
}

export default Main