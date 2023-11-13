import styled, { css } from "styled-components";

export const ListsScreenContainer = styled.div`
  width: 90%;
  padding: 12px 5% 18px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  height: 85%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const EmptryList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptryListText = styled.div<{ textColor: string }>`
  max-width: 90%;
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.textColor};
`;

export const AddBtnContainer = styled.div<{ backgroundColor: string }>`
  width: 90%;
  height: 15%;
  padding: 0 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.backgroundColor};
`;

export const AddButton = styled.button<{
  backgroundColor: string;
  textColor: string;
}>`
  width: 90%;
  height: 70%;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 8px;
  text-decoration: none;
  color: ${(props) => props.textColor};
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;
