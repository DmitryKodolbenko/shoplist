import styled, { css } from "styled-components";




interface IHeaderContainer {
    backgroundColor: string
}

export const HeaderContainer = styled.div<IHeaderContainer>`
    width: 100%;
    padding: 12px 32px 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.backgroundColor};
`