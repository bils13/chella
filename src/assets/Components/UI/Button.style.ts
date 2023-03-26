import styled from "styled-components";

interface ButtonProps {
    backgroundColor: string
    border: string
    color: string
    padding: string
    fontSize: string
    fontWeight: string
    borderRadius: string
}

export const StyledButton = styled.button`
    background-color: ${(props: ButtonProps) => props.backgroundColor};
    border: ${(props: ButtonProps) => props.border};
    color: ${(props: ButtonProps) => props.color};
    font-size: ${(props: ButtonProps) => props.fontSize};
    font-weight: ${(props: ButtonProps) => props.fontWeight};
    padding: ${(props: ButtonProps) => props.padding};
    border-radius: ${(props: ButtonProps) => props.borderRadius};
`

export const StyledButtonBuyTicket = styled(StyledButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 0px #444444;
    margin-top: 32px;
    width: 100%;
    img {
        margin-left: 16px;
        width: 32px;
        height: 40px;
    }
    &:hover {
        cursor: pointer;
    }

    @media only screen and (min-width: 768px) {
        margin-top: 24px;
        width: 50%;
    }
`