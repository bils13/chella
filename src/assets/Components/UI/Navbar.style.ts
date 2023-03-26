import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 32px 0;
    background-color: #2E7BA2;
    max-width: 100vw;
    position: relative;
    img {
        width: 234px;
        height: 64px;
    }
    img:nth-child(2) {
        height: 32px;
        width: 32px;
        &:hover {
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        img:nth-child(2) {
            display: none;
        }
    }

    @media only screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`