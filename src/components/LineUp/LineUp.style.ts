import styled from "styled-components";

export const StyledLineUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 4rem;
    gap: 2rem;

    > h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        color: ${(props) => props.theme.text};
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style: none;
        align-items: center;
        width: 100%;
        gap: 1rem;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    
    @media only screen and (min-width: 768px) {
        > p {
        }
    }
`

export const Line = styled.section `
    display: flex;
    align-items: center;

    > p {
        background-color: ${(props) => props.theme.colorBg};
        color: ${(props) => props.theme.textLineup};
        font-family: 'Calistoga', sans-serif;
        font-size: 32px;
        font-weight: 400;
        padding: 16px;
    }

    > div {
        height: 0;
        width: 150px;
        margin: 32px;
        border: 1px solid ${(props) => props.theme.colorBg};
    }

    @media only screen and (max-width: 700px) {
        > div {
            display: none;
        }
    }

    @media only screen and (min-width: 1440px) {
        > div {
            width: 470px;
        }
    }
    
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;
        gap: 2rem;

        @media screen and (max-width: 700px) {
            flex-direction: column;
        }
    }

    div:nth-child(1) {
        h5 {
            font-family: 'Raleway', Arial, Helvetica, arial;
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 47px;
            color: ${(props) => props.theme.text};
        }
    }

    div:nth-child(2) {
        h5 {
            font-family: 'Raleway', Arial, Helvetica, arial;
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 38px;
            color: ${(props) => props.theme.text};
        }
    }

    div:nth-child(3) {
        h5 {
            font-family: 'Raleway', Arial, Helvetica, arial;
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 38px;
            color: ${(props) => props.theme.text};
        }

        @media screen and (max-width: 768px) {
            max-width: 480px;
        }
    }
`

