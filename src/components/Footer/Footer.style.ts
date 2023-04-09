import styled from "styled-components";
import Footer from "./Footer";


export const StyledFooter = styled(Footer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 24px;
    background-color: ${(props) => props.theme.footer};
    img {
        max-width: 100%;
    }
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        p {
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 40px;
        color: ${(props) => props.theme.text};
        text-align: center;
    }
    }
    @media only screen and (min-width: 1440px) {
        flex-direction: row;
        justify-content: space-around;
        div {
            flex-direction: column;
            p {
                text-align: left;
            }
        }
    }
`
