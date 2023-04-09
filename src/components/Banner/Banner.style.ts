import styled from "styled-components";
import UrlBannerExperience from '../../assets/Image/BannerExperience.svg'
import UrlBannerSector from '../../assets/Image/Sector.svg'
import UrlBannerInfo from '../../assets/Image/BannerInfo.svg'
import UrlBannerTicket from '../../assets/Image/BannerTicket.svg'
import UrlBannerTicketGerado from '../../assets/Image/TicketGerado.svg'

interface BannerProps {
    url: string
    marginTop?: boolean
    className?: any
}

export const StyledBanner = styled.div`
    max-width: 100vw;
    background-image: url(${(props: BannerProps) => props.url});
    height: 270px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media only screen and (min-width: 768px) {
        height: 384px;
    }
    @media only screen and (min-width: 1440px) {
        height: 407px;
    }
`

export const StyledBannerHomePage = styled.div`
    width: 609px;
    max-width: 100%;
    border-radius: 16px;
    background-image: url(${(props: BannerProps) => props.url});
    height: 381px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media only screen and (min-width: 768px) {
        max-width: 80%;
    }
    @media only screen and (min-width: 1440px) {
        max-width: 45%;
    }
`
export const StyledBannerHomePageRodape = styled.div`
    max-width: 100%;
    margin-top: 2rem;
    background-image: url(${(props: BannerProps) => props.url});
    mix-blend-mode: multiply;
    height: 338px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const StyledBannerExperience = styled(StyledBanner)`
    background-image: url(${UrlBannerExperience});

    @media only screen and (min-width: 1440px) {
        background-position: center;
        background-size: cover;
    }
`

export const StyledBannerMainExperience = styled(StyledBannerHomePage)`
    background-image: url(${(props: BannerProps) => props.url});
    @media only screen and (min-width: 1440px) {
        width: 40%;
        margin-top: 2em;
    }
`
export const StyledBannerSectorMap = styled(StyledBanner)`
    background-image:  url(${(props: BannerProps) => props.url});
`

export const BannerSector = styled.div`
    max-width: 100vw;
    width: 100%;
    height: calc(360px + 3vw);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url(${UrlBannerSector});
    @media only screen and (min-width: 768px) {
        height: 609px;
        background-size: contain;
    }
    @media only screen and (min-width: 1440px) {
        max-width: 609px;
    }
`

export const BannerInfo = styled.div`
    max-width: 100vw;
    width: 100%;
    height: 239px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props: BannerProps) => props.url});
    margin-bottom: 1.5rem;
    border-radius: 16px;
    @media only screen and (min-width: 1440px) {
        margin-top: ${(props: BannerProps) => props.marginTop ? '130px' : '' };
    }
`

export const BannerInfoGeral = styled.div`
    max-width: 100vw;
    width: 100%;
    background-repeat: no-repeat;
    height: 281px;
    background-position: center;
    background-image: url(${UrlBannerInfo});
    background-size: cover;
    @media only screen and (min-width: 768px) {
        height: 384px;
    }
    @media only screen and (min-width: 1440px) {
        height: 407px;
        background-size: cover;
    }
`

export const BannerTicket = styled.div`
    max-width: 100vw;
    width: 100%;
    height: 281px;
    background-image: url(${UrlBannerTicket});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (min-width: 768px) {
        height: 384px;
    }
    @media only screen and (min-width: 1440px) {
        height: 407px;
        background-size: cover;
    }
`

export const BannerTicketGerado = styled(BannerTicket)`
    background-image: url(${UrlBannerTicketGerado});
`
