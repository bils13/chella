import styled from "styled-components";

export const StyledList = styled.ul`
    width: 50%;
    background-color: ${(props) => props.theme.navbar};;
    padding: 10px;
    right: 0;
    top: 100%;
    position: absolute;
`
export const StyledLi = styled.li`
    padding: 8px;
    text-align: center;
    color: #fff;
    border-bottom: 1px solid #fff;
    font-size: 20px;
    list-style: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 600;
    &:nth-child(5) {
        border: none;
    }
`