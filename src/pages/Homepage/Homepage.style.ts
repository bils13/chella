import styled from "styled-components";

export const StyledDiv = styled.div`
    padding: 32px 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const StyledContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    @media only screen and (min-width: 1440px) {
        flex-direction: row;
    }   
`

export const StyledContentBuyTicket = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 32px;
        color: ${(props) => props.theme.text};
        text-align: center;
        margin-top: 32px;
        span {
            display: block;
        }
    }
    > p {
        margin-top: 24px;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        color: ${(props) => props.theme.text};
        text-align: center;
    }
    @media only screen and (min-width: 768px) {
        width: 80%;
    }
    @media only screen and (min-width: 1440px) {
        width: 40%;
    } 
`

export const StyledTitleLineUp = styled.h1`
    margin-top: 5rem;
    font-family: 'Calistoga', sans-serif;
    font-weight: 400;
    font-size: 64px;
    color: ${(props) => props.theme.text};
    text-align: center;
`