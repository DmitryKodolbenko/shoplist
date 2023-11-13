import styled from "styled-components";

interface IHeaderContainer {
    backgroundColor: string
}

export const HeaderContainer = styled.header<IHeaderContainer>`
    width: 87%;
    padding: 12px 6.5% 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    background-color: ${props => props.backgroundColor};
`

interface IHeaderTwa {
    textColor: string
}

export const HeaderTwa = styled.div<IHeaderTwa>`
    font-size: 16px;
    color: ${props => props.textColor};
`
export const DeleteChangeBtn = styled.button<{backgroundColor: string, textColor: string}>`
    border: none;
    background-color: ${props => props.backgroundColor};
    padding: 4px 8px 4px;
    border-radius: 8px;
    text-decoration: none;

    color: ${props => props.textColor};
    font-size: 16px;
    min-width: 25%;

    
    &:hover {
      opacity: 0.8;
    }
`

export const BackBtn = styled.button`
    border: none;
    background-color: transparent;
    text-decoration: none;
    
    &:hover {
      opacity: 0.4;
    }
  `