import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'Raleway', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Calistoga&family=Raleway:ital,wght@0,100;0,200;0,400;0,500;0,600;1,700&display=swap');
    font-family: 'Calistoga', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;0,500;0,600;1,700&display=swap');
}
`

export const StyledGradienteBackground = styled.section`
    background: ${(props) => props.theme.background};
`