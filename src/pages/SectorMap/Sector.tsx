import React from 'react'
import { BannerInfo, BannerSector, StyledBannerSectorMap } from '../../components/Banner/Banner.style'
import { StyledGradienteBackground } from '../../components/GlobalStyle/GlobalStyle.style'
import Navbar from '../../components/Navbar/Navbar'
import { ColorLabel, DetailsSector, Info, SectorLabel, SectorMap, Wrapper, WrapperInfo } from './Sector.style'
import UrlBannerPista from '../../assets/Image/Pista.svg'
import UrlPistaPremimum from '../../assets/Image/PistaPremium.svg'
import UrlCadeiras from '../../assets/Image/Cadeiras.svg'
import UrlBannerSectorMap from '../../assets/Image/BannerSectorMap.svg'
import { StyledFooter } from '../../components/Footer/Footer.style'

export  const Sector = () => {
    return (
        <React.Fragment>
            <Navbar />
            <StyledBannerSectorMap url={UrlBannerSectorMap}/>
            <StyledGradienteBackground>
                <SectorMap>
                    <BannerSector />
                    <Wrapper>
                        <h1>Legenda:</h1>
                        <SectorLabel>
                            <ColorLabel bgColor='#0E7DF1'/><p>Pista Premium</p>
                        </SectorLabel>
                        <SectorLabel>
                            <ColorLabel bgColor='#FE016E'/><p>Pista Comum</p>
                        </SectorLabel>
                        <SectorLabel>
                            <ColorLabel bgColor='#01A89E'/><p>Cadeiras térreo</p>
                        </SectorLabel>
                        <SectorLabel>
                            <ColorLabel bgColor='#3F51B5'/><p>Cadeiras superiores</p>
                        </SectorLabel>
                        <SectorLabel>
                            <ColorLabel bgColor='#0E7DF1'/><p>Rampa</p>
                        </SectorLabel>
                    </Wrapper>
                </SectorMap>
                <DetailsSector>
                    <h1>Mais detalhes sobre os setores:</h1>
                    <WrapperInfo>
                        <Info>
                            <BannerInfo url={UrlBannerPista}/>
                            <h2>Pista</h2>
                            <p>Pista convencional, atendida pelos bares e banheiros das laterais
                            do estádio. Espaço amplo, com local para sentar e descansar. 
                            Separada da pista premium por uma grade.</p>
                        </Info>
                        <Info>
                            <BannerInfo url={UrlPistaPremimum} marginTop/>
                            <h2>Pista Premium</h2>
                            <p>Pista mais próxima do palco, com acesso muito próximo a banheiros
                            e bares num raio de 100m. Todas as pessoas idosas e/ou com
                            deficiência têm direito a acesso gratuito a essa área.</p>
                        </Info>
                        <Info>
                            <BannerInfo url={UrlCadeiras}/>
                            <h2>Cadeiras</h2>
                            <p>Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, 
                            visão um pouco elevada em relação às pistas.</p>
                        </Info>
                    </WrapperInfo>
                </DetailsSector>
                <StyledFooter />
            </StyledGradienteBackground>
        </React.Fragment>
    )
}