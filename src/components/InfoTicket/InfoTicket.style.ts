import styled from "styled-components";


export const Info = styled.section`
    padding: 2.5rem 1.5rem;
    max-width: 100vw;
    width: 100%;

    > h1 {
        font-family: 'Raleway', sans-serif;
        font-size: clamp(0.5rem, 1rem + 2vw, 2rem);
        font-weight: 700;
        color: ${(props) => props.theme.text};
        text-align: center;
        margin-bottom: 2rem;

        > span {
            display: block;
        }
    }

`

export const Ticket = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);

    > img {
        max-width: 248px;
        width: 100%;
    }

`

export const TicketImage = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 100%;

    & :nth-child(1) {
        max-width: 117px;
        width: 100%;
    }
    & :nth-child(2) {
        max-width: 32px;
        width: 100%;
    }
`

export const TicketData = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: clamp(0.5rem, 0.5rem + 5vw, 2rem);
        text-align: center;
        color: ${(props) => props.theme.text};
        margin-bottom: 0.5rem;
    }

    > h3 {
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        font-size: clamp(0.5rem, 0.3rem + 3vw, 1rem);
        text-align: center;
        color: ${(props) => props.theme.text};
        margin-bottom: 0.5rem;
    }
`