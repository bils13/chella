import styled from "styled-components";


export const StyledLinksNav = styled.div`
    padding-top: 32px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
        color: white;
        font-family: 20px;
        font-weight: 600;
        text-decoration: none;
    }

    @media only screen and (min-width: 1440px) {
        padding: 0;
        width: 50%;
    }
`