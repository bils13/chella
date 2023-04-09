import styled from "styled-components";


export const Faq = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 24px;

    > h1 {
        font-family: 'Calistoga', sans-serif;
        font-weight: 400;
        font-size: 32px;
        color: ${(props) => props.theme.text};
        margin-bottom: 2rem;
        text-align: center;
        @media only screen and (min-width: 768px) {
            font-size: 48px;
        }
    }
`

export const Question = styled.div`
    margin-bottom: 0.5rem;
    max-width: 90%;
    width: 100%;

    > h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: clamp(0.5rem, 0.7rem + 3vw, 1.8rem);
        color: #FFFFFF;
        padding: 1rem;
        background-color: ${(props) => props.theme.button};
        display: flex;
        justify-content: space-between;
    }

    .block ~ div {
        display: block;
        color: ${(props) => props.theme.textFaq};
    }

    .block > img {
        transform: rotate(180deg);
    }

    &:hover {
        cursor: pointer;
    }

    @media only screen and (min-width: 1440px) {
        max-width: 70%;        
    }

`
export const Answer = styled.div`
    color: ${(props) => props.theme.text};
    padding: 1rem;
    background-color: #C8DEEF;
    display: none;

    > p {
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        font-size: clamp(0.3rem, 0.2rem + 2vw, 1.2rem);
        line-height: 40px;
    }
`