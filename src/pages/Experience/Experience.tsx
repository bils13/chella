import React from 'react'
import { StyledBannerMainExperience, StyledBannerExperience } from '../../components/Banner/Banner.style'
import { StyledGradienteBackground } from '../../components/GlobalStyle/GlobalStyle.style'
import Navbar from '../../components/Navbar/Navbar'
import { StyledDescription, StyledSection } from './Experience.style'
import UrlBannerAcessibilidade from '../../assets/Image/BannerAcessibilidade.svg'
import UrlBannerSustentabilidade from '../../assets/Image/BannerSustentabilidade.svg'
import UrlBannerAtracoes from '../../assets/Image/BannerAtracoes.svg'
import { StyledFooter } from '../../components/Footer/Footer.style'

export const Experience = () => {
    return (
        <React.Fragment>
            <Navbar />
            <StyledBannerExperience />
            <StyledGradienteBackground>
                <StyledSection>
                    <StyledBannerMainExperience url={UrlBannerAcessibilidade} />
                    <StyledDescription>
                        <h1>Acessbilidade e Inclusão</h1>
                        <p>Nosso evento tenta abraçar um público mais 
                        amplo em todos os sentidos, de todas as idades,
                        corpos, gostos e pensamentos!  Isso está presente
                        no espaço físico, na sinalização, no treinamento da 
                        equipe de apoio, na comunicação em libras, braile, 
                        visual e tátil. Além disso, dispomos de ingressos 
                        gratuitos para pessoas com deficiência e acompanhantes,
                        pessoas idosas e crianças!</p>
                    </StyledDescription>
                </StyledSection>
                <StyledSection columnReverse='column-reverse'>
                    <StyledDescription reverse='0 3rem 0 0' textAlign='right'>
                        <h1>Sustentabilidade</h1>
                        <p>Queremos estar aqui celebrando daqui a 50, 100 anos! 
                        Por isso, levamos o futuro do nosso planeta a sério. 
                        Nosso festival é carbono zero, com utilização de copos
                        retornáveis, coleta e destinação adequada de resíduos, 
                        e transporte coletivo.</p>
                    </StyledDescription>
                    <StyledBannerMainExperience url={UrlBannerSustentabilidade} />
                </StyledSection>
                <StyledSection>
                <StyledBannerMainExperience url={UrlBannerAtracoes} />
                    <StyledDescription>
                        <h1>Atrações</h1>
                        <p>Intervenções artísticas e culturais para todos os gostos! 
                        Durante os intervalos dos shows, nossa experiência contará
                        com recreação para crianças, oficina de cerâmica, origami, 
                        circo e aquarela! Além disso, nosso espaço contra com 
                        3 praças de alimentação, roda gigante e outros brinquedos!</p>
                    </StyledDescription>
                </StyledSection>
                <StyledFooter />
            </StyledGradienteBackground>
        </React.Fragment>
    )
}

export default Experience