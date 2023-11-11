import styled, { css } from "styled-components";



export const HomeScreenContainer = styled.div`
  flex: 1;
  height: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: transparent;
`;

export const HomeScreenContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
`;
