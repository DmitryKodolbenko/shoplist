import styled, { css } from "styled-components";

export const ListScreenContainer = styled.div`
  width: 90%;
  padding: 12px 5% 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  height: 85%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const EditContainer = styled.div<{ backgroundColor: string }>`
  width: 90%;
  height: 15%;
  padding: 0 5% 0;

  display: flex;
  flex-direction: row;
  gap: 5%;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.backgroundColor};
`;
export const NewItemInput = styled.input<{
  backgroundColor: string;
  colorText: string;
  placeholderColor: string;
}>`
  font-size: 14px;
  text-decoration: none;
  box-shadow: none;
  border: none;
  color: ${(props) => props.colorText};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 12px;
  padding: 12px 6px 12px;
  flex: 1;

  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
  &:focus {
    outline: none;
  }
`;
export const SubmitBtn = styled.button<{ backgroundColor: string }>`
  height: 40.8px;
  width: 40.8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    opacity: 0.8;
  }
`;

interface IListitem {
  backgroundColor: string;
}

export const StyledListitem = styled.div<IListitem>`
  width: 90%;
  border: none;
  border-radius: 12px;
  padding: 16px 5% 16px;
  background-color: ${(props) => props.backgroundColor};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

interface IListTitle {
  textColor: string;
}

export const ListTitle = styled.h2<IListTitle>`
  font-size: 14px;
  color: ${(props) => props.textColor};
  max-width: 80%;
  word-wrap: break-word;
`;

export const ItemContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: none;

  &:hover {
    opacity: 0.4;
  }
`;
