import styled from "styled-components";


export const StyledButtonBuyTicket = styled.button`
    background-color: ${(props) => props.theme.button};
    border: none;
    color: ${(props) => props.theme.textLineup};
    font-size: 20px;
    font-weight: 700;
    padding: 8px 16px;
    border-radius: 16px;
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

export const ButtonForm = styled.button`
    background-color: ${(props) => props.theme.button};
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    max-width: 164px;
    width: 100%;
    border: none;
    box-shadow: 4px 4px 0px #000000;
    border-radius: 16px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: ${(props) => props.theme.text};
    &:hover {
        cursor: pointer;
    }
`