import styled from "styled-components";

interface StyledTitleProps {
    fontFamily: string,
    fontWeight: string,
    fontSize: string,
    color: string,
    textAlign: string
}

export const StyledText = styled.p `
    font-family: ${(props: StyledTitleProps) => props.fontFamily};
    font-weight: ${(props: StyledTitleProps) => props.fontWeight};
    font-size: ${(props: StyledTitleProps) => props.fontSize};
    color: ${(props: StyledTitleProps) => props.color};
    text-align: ${(props: StyledTitleProps) => props.textAlign};
`

export const StyledTextHomePage = styled(StyledText)`
    margin-top: 24px;
    line-height: 40px;
`