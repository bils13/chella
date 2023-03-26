import styled from "styled-components";

interface StyledBannerProps {
    width: string,
    backgroundImage: string,
    height: string,
    backgroundRepeat: string,
    backgroundPosition: string, 
    backgroundSize: string
}

export const StyledBanner = styled.div`
    max-width: ${(props: StyledBannerProps) => props.width};
    background-image: url(${(props: StyledBannerProps) => props.backgroundImage});
    height: ${(props: StyledBannerProps) => props.height};
    background-repeat: ${(props: StyledBannerProps) => props.backgroundRepeat};
    background-position: ${(props: StyledBannerProps) => props.backgroundPosition};
    background-size: ${(props: StyledBannerProps) => props.backgroundSize};
`

export const StyledBannerHomePage = styled(StyledBanner)`
    width: ${(props: StyledBannerProps) => props.width};
    border-radius: 16px;
    @media only screen and (min-width: 768px) {
        max-width: 80%;
    }
    @media only screen and (min-width: 1440px) {
        max-width: 45%;
    }
`
export const StyledBannerHomePageRodape = styled.div`

`