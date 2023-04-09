import { ReactElement } from 'react'
import styled, { ThemedStyledProps } from 'styled-components'

interface ExperienceProps {
    reverse?: string
    columnReverse?: string
    textAlign?: string
}

export const StyledSection = styled.section`
    display: flex;
    flex-direction: ${(props: ExperienceProps) => props.columnReverse ? props.columnReverse : 'column'};
    align-items: center;
    justify-content: center;
    padding: 24px 32px;
    margin-bottom: 1rem;
    @media only screen and (min-width: 1440px) {
        flex-direction: row;
    }
`

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    > h1 {
        margin-top: 1rem;
        font-family: 'Raleway', sans-serif;
        font-size: clamp(0.5em, 0.5em + 6vw, 2em);
        font-weight: 700;
        color: ${(props) => props.theme.text};
        text-align: center;
        @media only screen and (min-width: 1440px) {
            text-align: ${(props: ExperienceProps) => props.textAlign ? props.textAlign : 'left'};
            margin: ${(props: ExperienceProps) => props.reverse ? props.reverse : '0 0 0 3rem' };
        }
    }
    > p {
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 40px;
        color: ${(props) => props.theme.text};
        text-align: center;
        @media only screen and (min-width: 1440px) {
            text-align: ${(props: ExperienceProps) => props.textAlign ? props.textAlign : 'left'};
            margin: ${(props: ExperienceProps) => props.reverse ? props.reverse : '0 0 0 3rem' };
        }
    }
    @media only screen and (min-width: 1440px) {
            width: 40%;
    }
`