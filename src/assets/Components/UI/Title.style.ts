import styled from "styled-components";

interface StyledTitleProps {
    fontFamily: string,
    fontWeight: string,
    fontSize: string,
    color: string,
    textAlign: string
}

export const StyledTitle = styled.h1`
    font-family: ${(props: StyledTitleProps) => props.fontFamily};
    font-weight: ${(props: StyledTitleProps) => props.fontWeight};
    font-size: ${(props: StyledTitleProps) => props.fontSize};
    color: ${(props: StyledTitleProps) => props.color};
    text-align: ${(props: StyledTitleProps) => props.textAlign};
`

export const StyledTitleDate = styled(StyledTitle)`
    margin-top: 32px;
    span {
        display: block;
    }
`

export const StyledTitleLineUp = styled(StyledTitle)`
    margin-top: 64px;
    @media only screen and (min-width: 768px) {
        font-size: 64px;
    }
`

