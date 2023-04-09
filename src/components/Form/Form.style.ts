import styled from "styled-components";


export const StyledForm = styled.section`
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100vw;
        width: 100%;

        > div {
            max-width: 100vw;
            width: 100%;
            display: flex;
            flex-direction: column;

            > label {
                align-self: flex-start;
                font-family: 'Raleway', sans-serif;
                font-weight: 700;
                font-size: 32px;
                color: ${(props) => props.theme.text};
                margin-bottom: 0.5rem;
            }

            > input {
                width: 100%;
                border: none;
                outline: 0;
                background: #ffffff;
                height: 48px;
                margin-bottom: 2rem;
                font-family: 'Raleway', sans-serif;
                font-weight: 500;
                font-size: 20px;
                color: #444444;
                padding: 10px;
            }

            p {
                align-self: flex-start;
                margin-top: -2rem;
                font-family: 'Raleway', sans-serif;
                font-weight: 500;
                font-size: 15px;
                color: red;
                padding: 10px;
                margin-bottom: 1rem;
            }

            > select {
                width: 100%;
                border: none;
                outline: 0;
                background: #ffffff;
                height: 48px;
                margin-bottom: 2rem;
                padding: 10px;
                font-family: 'Raleway', sans-serif;
                font-weight: 500;
                font-size: 20px;
                color: #444444;
            }
        }
        @media only screen and (min-width: 768px) {
            padding: 24px 32px;
            & :nth-child(4) {
                width: 70%;
                align-self: flex-start;
            }
        }    

        @media only screen and (min-width: 1440px) {
            width: 70%;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            & :nth-child(3), & :nth-child(4) {
                width: 49%;
                padding: 5px;
            }
        } 
    }

`