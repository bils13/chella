import styled from "styled-components";

interface SectorProps {
    bgColor: string
}

export const SectorMap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 1440px) {
        flex-direction: row;
        justify-content: center;
    }
`

export const SectorLabel = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    > p {
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        font-size: 20px;
        color: ${(props) => props.theme.text};
        margin-left: 1rem;
    }
`

export const ColorLabel = styled.div`
    width: 32px;
    height: 32px;
    background-color: ${(props: SectorProps) => props.bgColor};
`

export const Wrapper = styled.div`
    margin-top: 2rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    > h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: ${(props) => props.theme.text};
        margin-bottom: 1rem;
        @media only screen and (min-width: 768px) {
            font-size: 32px;
        }
    }
    @media only screen and (min-width: 768px) {
        margin-top: 3rem;
    }
`

export const DetailsSector = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    padding: 24px;

    > h1 {
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 32px;
        color: ${(props) => props.theme.text};
        margin-bottom: 1.5rem;
        @media only screen and (min-width: 1440px) {
            font-size: 40px;
            margin-bottom: 0;
        }
    }
` 
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > h2 {
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 32px;
        color: ${(props) => props.theme.text};
        margin-bottom: 1rem;
    }

    > p {
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        color: ${(props) => props.theme.text};
        margin-bottom: 1rem;
    }
    @media only screen and (min-width: 1440px) {
        width: 22%;
        margin-top: 1rem;
    }
`

export const WrapperInfo = styled.div`
    @media only screen and (min-width: 1440px) {
        display: flex;
        justify-content: center;

    }
`