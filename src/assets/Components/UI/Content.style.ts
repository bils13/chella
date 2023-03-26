import styled from "styled-components";

interface StyledContentProps {
    backgroundColor: string
    marginTop: string
    padding: string
}

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
    @media only screen and (min-width: 768px) {
        width: 80%;
    }
    @media only screen and (min-width: 1440px) {
        width: 40%;
    } 
`