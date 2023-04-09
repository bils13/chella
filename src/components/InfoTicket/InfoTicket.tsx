import React from 'react'
import { BannerTicketGerado } from '../Banner/Banner.style'
import { Info, Ticket, TicketData, TicketImage } from './InfoTicket.style'
import LogoBlack from '../../assets/Image/LogoBlack.svg'
import MaiorMenor from '../../assets/Image/MaiorMenor.svg'
import { StyledGradienteBackground } from '../GlobalStyle/GlobalStyle.style'
import QrCode from '../../assets/Image/QrCode.svg'
import { useThemeContext } from '../../context/Theme'
import LogoWhite from '../../assets/Image/LogoWhite.svg'

export const InfoTicket = () => {

    const { theme } = useThemeContext()

    return (
        <React.Fragment>
            <BannerTicketGerado />
            <Info>
                <h1>Uhul, agora sim!
                    <span>Seu ingresso está aqui, 
                    apresenta na entrada do evento e divirta-se!</span>
                </h1>
                <StyledGradienteBackground>
                    <Ticket>
                        <TicketImage>
                            <img src={theme==='boreal' ? LogoWhite : LogoBlack} alt='Logo CodeChella Preta' />
                            <img src={MaiorMenor} alt='Maior Menos' />
                        </TicketImage>
                        <img src={QrCode} alt='QR Code' />
                        <TicketData>
                            <h2>Moni Hillman</h2>
                            <h3>Ingresso Cortesia</h3>
                            <h3>Setor Pista</h3>
                            <h3>Data: 11/03</h3>
                            <h3>Local: São Paulo-SP</h3>
                        </TicketData>
                    </Ticket>
                </StyledGradienteBackground>

            </Info>
        </React.Fragment>
    )
}

export default InfoTicket