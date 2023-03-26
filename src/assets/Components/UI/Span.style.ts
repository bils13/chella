import styled from "styled-components";

interface SpanProps {
    marginTop: string
}

export const StyledSpan = styled.span`
    display: block;
    margin-top: ${(props: SpanProps) => props.marginTop};
    @media only screen and (min-width: 768px){
        margin-top: 0;
    }
`